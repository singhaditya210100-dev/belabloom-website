#!/bin/bash
# Run this once to configure git push credentials permanently
# Called automatically by setup — do not delete

TOKEN="${1:-$GITHUB_TOKEN}"

if [ -z "$TOKEN" ]; then
  echo "❌ No token provided."
  echo "Usage: bash .claude/git-credentials.sh YOUR_GITHUB_TOKEN"
  exit 1
fi

REPO_URL="https://singhaditya210100-dev:${TOKEN}@github.com/singhaditya210100-dev/belabloom-website.git"
git remote set-url origin "$REPO_URL"
git config credential.helper store
echo "https://singhaditya210100-dev:${TOKEN}@github.com" > ~/.git-credentials
chmod 600 ~/.git-credentials
echo "✅ Git credentials configured. Pushes will now work silently."
