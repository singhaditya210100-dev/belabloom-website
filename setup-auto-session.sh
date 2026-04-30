#!/bin/bash
# ============================================================
# setup-auto-session.sh
# Run this ONCE in your project to enable fully automatic
# session continuity — no manual steps ever again.
# ============================================================

set -e
echo "🔧 Setting up Belabloom auto-session continuity..."

# 1. Configure git credentials so push works silently
bash .claude/git-credentials.sh

# 2. Make hooks executable
chmod +x .claude/hooks/session-start.js
chmod +x .claude/hooks/session-end.js

# 3. Verify Claude Code can find the hooks
if [ ! -f ".claude/settings.json" ]; then
  echo "❌ .claude/settings.json not found!"
  exit 1
fi

echo ""
echo "✅ Done! Here's what's now fully automatic:"
echo ""
echo "  🟢 Session START  → Claude reads STATUS.md and resumes automatically"
echo "  🔴 Session STOP   → STATUS.md updated by AI, committed, pushed to GitHub"
echo "  🔁 Context reset  → Next session picks up from last GitHub commit"
echo ""
echo "You never need to say anything. Just open Claude Code and work."
echo ""

# 4. Do an initial commit of the setup files
git add -A
git commit -m "chore: add Claude Code auto-session hooks (zero manual intervention)" 2>/dev/null || echo "(nothing new to commit)"
git push origin main
echo "✅ Pushed to GitHub."
