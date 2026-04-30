#!/usr/bin/env node
/**
 * session-end.js
 * Fires on every Stop event (when Claude finishes responding).
 * 
 * What it does automatically:
 * 1. Checks if there are any changes to commit
 * 2. Reads the session transcript to understand what happened
 * 3. Calls Anthropic API to generate an updated STATUS.md
 * 4. Writes STATUS.md, commits all changes, and pushes to GitHub
 * 
 * This means every time Claude finishes a task, state is saved to GitHub.
 * If context resets, the next session starts from the last committed state.
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const TRANSCRIPT_PATH = process.env.CLAUDE_TRANSCRIPT_PATH || null;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || "";

async function run() {
  try {
    // Check if there's anything to commit
    const statusOut = execSync("git status --porcelain", { cwd: ROOT }).toString().trim();
    const hasChanges = statusOut.length > 0;
    
    if (!hasChanges) {
      // Nothing changed this turn - skip
      process.exit(0);
    }

    // Get a summary of what changed
    let diffSummary = "";
    try {
      diffSummary = execSync("git diff --stat HEAD", { cwd: ROOT }).toString().trim();
      if (!diffSummary) {
        diffSummary = execSync("git diff --cached --stat", { cwd: ROOT }).toString().trim();
      }
    } catch (_) {}

    // Read last few lines of transcript if available
    let recentWork = "";
    if (TRANSCRIPT_PATH && fs.existsSync(TRANSCRIPT_PATH)) {
      try {
        const transcript = fs.readFileSync(TRANSCRIPT_PATH, "utf8");
        // Get last ~3000 chars of transcript
        recentWork = transcript.slice(-3000);
      } catch (_) {}
    }

    // Read current STATUS.md
    const statusPath = path.join(ROOT, "STATUS.md");
    const currentStatus = fs.existsSync(statusPath)
      ? fs.readFileSync(statusPath, "utf8")
      : "No STATUS.md found.";

    // Build commit message from diff
    const changedFiles = execSync("git diff --name-only HEAD", { cwd: ROOT })
      .toString().trim().split("\n").filter(Boolean);
    const newFiles = statusOut.split("\n")
      .filter(l => l.startsWith("?? "))
      .map(l => l.replace("?? ", "").trim());
    const allChanged = [...changedFiles, ...newFiles].slice(0, 5);
    const commitMessage = allChanged.length > 0
      ? `chore: auto-sync — updated ${allChanged.join(", ")}`
      : "chore: auto-sync session state";

    // Call Anthropic API to generate updated STATUS.md
    let updatedStatus = currentStatus;
    
    if (ANTHROPIC_API_KEY) {
      try {
        const today = new Date().toISOString().split("T")[0];
        const prompt = `You are maintaining a STATUS.md file for a Next.js website project called Belabloom.

Current STATUS.md:
\`\`\`
${currentStatus}
\`\`\`

What changed in this session (git diff --stat):
\`\`\`
${diffSummary || "No diff available"}
\`\`\`

Recent work context:
\`\`\`
${recentWork || "No transcript available"}
\`\`\`

Today's date: ${today}

Task: Update the STATUS.md file to reflect what was just completed. 
- Move completed items from "In Progress" or "Todo" to "Completed"  
- Update "Next Immediate Action" to point to the very next concrete step
- Add a new entry to the Session Log at the bottom with today's date and 2-3 bullet points of what was done
- Keep the format identical to the current STATUS.md
- Do NOT add any commentary outside the markdown file content
- Output ONLY the raw markdown content, nothing else`;

        const response = await fetch("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": ANTHROPIC_API_KEY,
            "anthropic-version": "2023-06-01"
          },
          body: JSON.stringify({
            model: "claude-sonnet-4-20250514",
            max_tokens: 2000,
            messages: [{ role: "user", content: prompt }]
          })
        });

        if (response.ok) {
          const data = await response.json();
          const content = data?.content?.[0]?.text || "";
          if (content.trim().startsWith("#")) {
            updatedStatus = content.trim();
          }
        }
      } catch (apiErr) {
        // API call failed - still commit with unchanged STATUS.md
        console.error("STATUS.md update via API failed:", apiErr.message);
      }
    }

    // Write updated STATUS.md
    fs.writeFileSync(statusPath, updatedStatus, "utf8");

    // Stage everything and commit
    execSync("git add -A", { cwd: ROOT });
    execSync(`git commit -m "${commitMessage}"`, { cwd: ROOT });

    // Push to GitHub
    execSync("git push origin main", { cwd: ROOT });
    
    console.log(`✅ Auto-synced to GitHub: ${commitMessage}`);
    process.exit(0);

  } catch (err) {
    console.error("session-end hook error:", err.message);
    process.exit(0); // Never block Claude — exit 0 even on error
  }
}

run();
