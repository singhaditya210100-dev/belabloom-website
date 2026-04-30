#!/usr/bin/env node
/**
 * session-start.js
 * Fires on PreToolUse (before Claude's very first action each session).
 * Reads STATUS.md and prints it to stdout so Claude sees it in context.
 * Only runs once per session (tracked via a temp flag file).
 */

const fs = require("fs");
const path = require("path");
const os = require("os");

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const SESSION_ID = process.env.CLAUDE_SESSION_ID || "unknown";
const FLAG_FILE = path.join(os.tmpdir(), `belabloom-session-${SESSION_ID}.started`);

// Only inject once per session
if (fs.existsSync(FLAG_FILE)) {
  process.exit(0);
}

// Mark session as started
fs.writeFileSync(FLAG_FILE, Date.now().toString());

const statusPath = path.join(ROOT, "STATUS.md");
const claudePath = path.join(ROOT, "CLAUDE.md");

if (!fs.existsSync(statusPath)) {
  process.exit(0);
}

const status = fs.readFileSync(statusPath, "utf8");
const claudeMd = fs.existsSync(claudePath) ? fs.readFileSync(claudePath, "utf8") : "";

// Output as a system context injection Claude Code will surface
const output = {
  type: "system",
  content: `
=== AUTO-LOADED SESSION CONTEXT ===

## CLAUDE.md
${claudeMd}

## STATUS.md (current task state)
${status}

=== Resume from "Next Immediate Action" in STATUS.md above ===
`.trim()
};

process.stdout.write(JSON.stringify(output));
process.exit(0);
