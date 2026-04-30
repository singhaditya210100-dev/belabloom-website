#!/usr/bin/env node
/**
 * session-end.js — fires on every Stop event (after Claude finishes responding).
 *
 * Automatically:
 * 1. Checks if there are git changes to commit
 * 2. Calls Anthropic API to intelligently update STATUS.md
 * 3. Commits + pushes belabloom-website to GitHub
 * 4. If a task is complete, moves it from In Progress → Done in KANBAN.md
 *    and pushes the kanban repo too
 */

const fs   = require("fs");
const path = require("path");
const os   = require("os");
const { execSync } = require("child_process");

const ROOT            = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const TRANSCRIPT_PATH = process.env.CLAUDE_TRANSCRIPT_PATH || null;
const ANTHROPIC_KEY   = process.env.ANTHROPIC_API_KEY || "";
const KANBAN_API      = "https://api.github.com/repos/singhaditya210100-dev/belabloom-kanban/contents/KANBAN.md";

function getToken() {
  try {
    const creds = fs.readFileSync(path.join(os.homedir(), ".git-credentials"), "utf8");
    const match = creds.match(/https:\/\/[^:]+:([^@]+)@github\.com/);
    return match ? match[1].trim() : "";
  } catch { return ""; }
}

async function fetchKanban(token) {
  const res = await fetch(KANBAN_API, {
    headers: { "Authorization": `Bearer ${token}`, "Accept": "application/vnd.github.v3+json" }
  });
  if (!res.ok) return null;
  const d = await res.json();
  return { content: Buffer.from(d.content, "base64").toString("utf8"), sha: d.sha };
}

async function pushKanban(token, content, sha, message) {
  await fetch(KANBAN_API, {
    method: "PUT",
    headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ message, content: Buffer.from(content).toString("base64"), sha })
  });
}

function getInProgressTasks(md) {
  const m = md.match(/## 🔄 In Progress\n([\s\S]*?)(?=\n## )/);
  if (!m) return [];
  return m[1].split("\n").filter(l => l.match(/^- \[[ x]\] /)).map(l => ({
    line: l, task: l.replace(/^- \[[ x]\] /, ""), done: l.includes("[x]")
  }));
}

function moveToDone(md, taskLine, taskText) {
  // Remove from In Progress
  let updated = md.split(taskLine + "\n").join("").split(taskLine).join("");
  // Add to Done
  const doneMarker = "## ✅ Done";
  const idx = updated.indexOf(doneMarker);
  if (idx === -1) return updated;
  const nl = updated.indexOf("\n", idx) + 1;
  return updated.slice(0, nl) + `- [x] ${taskText}\n` + updated.slice(nl);
}

async function updateStatusMd(currentStatus, diffSummary, recentWork) {
  if (!ANTHROPIC_KEY) return currentStatus;
  try {
    const today = new Date().toISOString().split("T")[0];
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 2000,
        messages: [{
          role: "user",
          content: `Update this STATUS.md to reflect work just completed.

Current STATUS.md:
\`\`\`
${currentStatus}
\`\`\`

Git diff --stat:
\`\`\`
${diffSummary}
\`\`\`

Recent transcript context:
\`\`\`
${recentWork}
\`\`\`

Today: ${today}

Rules:
- Move completed items to "Completed" section
- Update "Next Immediate Action" to the very next concrete step
- Add session log entry with date and 2-3 bullets of what was done
- Keep identical markdown format
- Output ONLY the raw markdown, nothing else`
        }]
      })
    });
    if (res.ok) {
      const data = await res.json();
      const text = data?.content?.[0]?.text || "";
      if (text.trim().startsWith("#")) return text.trim();
    }
  } catch (_) {}
  return currentStatus;
}

async function run() {
  try {
    const gitStatus = execSync("git status --porcelain", { cwd: ROOT }).toString().trim();
    if (!gitStatus) { process.exit(0); }

    // Gather context
    let diffSummary = "";
    try { diffSummary = execSync("git diff --stat HEAD", { cwd: ROOT }).toString().trim(); } catch (_) {}

    let recentWork = "";
    if (TRANSCRIPT_PATH && fs.existsSync(TRANSCRIPT_PATH)) {
      try { recentWork = fs.readFileSync(TRANSCRIPT_PATH, "utf8").slice(-3000); } catch (_) {}
    }

    // Update STATUS.md
    const statusPath = path.join(ROOT, "STATUS.md");
    const currentStatus = safeRead(statusPath);
    const updatedStatus = await updateStatusMd(currentStatus, diffSummary, recentWork);
    fs.writeFileSync(statusPath, updatedStatus, "utf8");

    // Build commit message
    const changed = gitStatus.split("\n").slice(0, 4)
      .map(l => l.trim().split(" ").pop()).filter(Boolean).join(", ");
    const commitMsg = `chore: auto-sync — ${changed}`;

    // Commit + push website repo
    execSync("git add -A", { cwd: ROOT });
    execSync(`git commit -m "${commitMsg}"`, { cwd: ROOT });
    execSync("git push origin main", { cwd: ROOT });
    console.log(`✅ Pushed website: ${commitMsg}`);

    // Check if kanban task is complete — look for transcript signal
    const token = getToken();
    if (token && recentWork.toLowerCase().includes("complet")) {
      try {
        const kanban = await fetchKanban(token);
        if (kanban) {
          const inProgress = getInProgressTasks(kanban.content);
          if (inProgress.length > 0) {
            const task = inProgress[0];
            const updated = moveToDone(kanban.content, task.line, task.task);
            await pushKanban(token, updated, kanban.sha,
              `chore: complete "${task.task.split("|")[0].trim()}" ✅`);
            console.log(`✅ Kanban updated: "${task.task.split("|")[0].trim()}" → Done`);
          }
        }
      } catch (e) { console.error("Kanban update failed:", e.message); }
    }

    process.exit(0);
  } catch (err) {
    console.error("session-end error:", err.message);
    process.exit(0); // Never block Claude
  }
}

function safeRead(p) {
  try { return fs.readFileSync(p, "utf8"); } catch { return ""; }
}

run();
