#!/usr/bin/env node
/**
 * session-start.js — fires before Claude's first action each session.
 * 1. Fetches KANBAN.md from belabloom-kanban repo
 * 2. Moves top Todo → In Progress (auto-commits to kanban repo)  
 * 3. Injects full context so Claude resumes instantly without prompting
 */

const fs = require("fs");
const path = require("path");
const os = require("os");
const { execSync } = require("child_process");

const ROOT = process.env.CLAUDE_PROJECT_DIR || process.cwd();
const SESSION_ID = process.env.CLAUDE_SESSION_ID || "unknown";
const FLAG = path.join(os.tmpdir(), `belabloom-${SESSION_ID}.started`);

const KANBAN_API = "https://api.github.com/repos/singhaditya210100-dev/belabloom-kanban/contents/KANBAN.md";

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
  const data = await res.json();
  return { content: Buffer.from(data.content, "base64").toString("utf8"), sha: data.sha };
}

async function pushKanban(token, content, sha, message) {
  await fetch(KANBAN_API, {
    method: "PUT",
    headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ message, content: Buffer.from(content).toString("base64"), sha })
  });
}

function getNextTodo(md) {
  const lines = md.split("\n");
  const start = lines.findIndex(l => l.trim() === "## 🔲 Todo");
  if (start === -1) return null;
  for (let i = start + 1; i < lines.length; i++) {
    if (lines[i].startsWith("## ")) break;
    const m = lines[i].match(/^- \[ \] (.+)$/);
    if (m) return { line: lines[i], task: m[1], index: i };
  }
  return null;
}

function moveToInProgress(md, taskLine, taskText) {
  let updated = md.split(taskLine + "\n").join("").split(taskLine).join("");
  updated = updated.replace(/\n_\(empty.*?\)_\n/g, "\n");
  const marker = "## 🔄 In Progress";
  const idx = updated.indexOf(marker);
  if (idx === -1) return updated;
  const nl = updated.indexOf("\n", idx) + 1;
  return updated.slice(0, nl) + `- [ ] ${taskText}\n` + updated.slice(nl);
}

async function run() {
  if (fs.existsSync(FLAG)) process.exit(0);
  fs.writeFileSync(FLAG, Date.now().toString());

  const status   = safeRead(path.join(ROOT, "STATUS.md"));
  const claudeMd = safeRead(path.join(ROOT, "CLAUDE.md"));
  let kanbanCtx  = "";

  const token = getToken();
  if (token) {
    try {
      const kanban = await fetchKanban(token);
      if (kanban) {
        const next = getNextTodo(kanban.content);
        if (next) {
          const updated = moveToInProgress(kanban.content, next.line, next.task);
          await pushKanban(token, updated, kanban.sha,
            `chore: move "${next.task.split("|")[0].trim()}" → In Progress`);
          kanbanCtx = `## 🎯 ACTIVE TASK (from Kanban — work on this now)\n${next.task}\n`;
        } else {
          const ipMatch = kanban.content.match(/## 🔄 In Progress\n([\s\S]*?)(?=\n## )/);
          const ip = (ipMatch?.[1] || "").trim();
          kanbanCtx = ip && !ip.includes("(empty")
            ? `## 🔄 Continue In-Progress Task\n${ip}\n`
            : `## ✅ Kanban board is empty — follow STATUS.md next steps\n`;
        }
      }
    } catch (e) { kanbanCtx = `(Kanban unavailable: ${e.message})\n`; }
  }

  const output = {
    type: "system",
    content: [
      "=== AUTO-LOADED SESSION CONTEXT — ACT ON THIS IMMEDIATELY ===",
      kanbanCtx,
      "## CLAUDE.md\n" + claudeMd,
      "## STATUS.md\n" + status,
      "=== Start working. No user confirmation needed. ==="
    ].join("\n\n").trim()
  };

  process.stdout.write(JSON.stringify(output));
  process.exit(0);
}

function safeRead(p) {
  try { return fs.readFileSync(p, "utf8"); } catch { return ""; }
}

run().catch(() => process.exit(0));
