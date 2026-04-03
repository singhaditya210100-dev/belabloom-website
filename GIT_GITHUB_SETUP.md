# Git & GitHub Setup Guide

## Prerequisites

- Git installed on your machine
- GitHub account (free at github.com)
- Project files ready to commit

## Step 1: Initialize Git Repository

Navigate to project root and initialize Git:

```bash
cd belabloom-website

# Initialize Git
git init

# Check Git status
git status
```

## Step 2: Configure Git (First Time Only)

Set your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify configuration
git config --global --list
```

## Step 3: Add All Files

```bash
# Add all files to staging area
git add .

# OR add specific files
git add app/layout.tsx components/Navbar.tsx

# Check what's staged
git status
```

## Step 4: Create Initial Commit

```bash
# Create commit with message
git commit -m "Initial commit: Belabloom Next.js website"

# OR with detailed description
git commit -m "Initial commit: Belabloom Next.js website

- Added complete Next.js project structure
- Implemented all pages (Home, Services, About, etc.)
- Created reusable React components
- Configured Tailwind CSS and TypeScript
- Added contact form with API route
- Optimized for Vercel deployment"
```

## Step 5: Create Repository on GitHub

### Option A: Via Web Interface

1. Go to https://github.com/new
2. Repository name: `belabloom-website`
3. Description: "Belabloom Projects & Facility Management - Modern Next.js Website"
4. Choose: Public or Private (Private recommended)
5. DO NOT initialize with README (we have one)
6. Click "Create repository"

### Option B: Via GitHub CLI (Recommended)

```bash
# Install GitHub CLI from https://cli.github.com

# Authenticate
gh auth login

# Create repository
gh repo create belabloom-website --source=. --remote=origin --push

# This will automatically:
# - Create the repository on GitHub
# - Set up remote tracking
# - Push your commits
```

## Step 6: Add Remote Repository

If you created the repo on the web:

```bash
# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/belabloom-website.git

# Verify remote
git remote -v

# Rename default branch to main (if using master)
git branch -M main

# Push your commits
git push -u origin main
```

## Step 7: Verify on GitHub

Visit https://github.com/USERNAME/belabloom-website
- All files should be visible
- Commit history should show your initial commit
- README.md should display

## Common Git Commands

### Daily Operations

```bash
# See what changed
git status

# See commit history
git log
git log --oneline
git log --graph --oneline --all

# Create a new branch
git branch feature/new-page
git checkout feature/new-page

# Or create and checkout in one command
git checkout -b feature/new-page

# Switch branch
git checkout main

# Push branch to GitHub
git push -u origin feature/new-page
```

### Making Changes

```bash
# After editing files
git add .

# Or add specific files
git add app/services/page.tsx

# Commit changes
git commit -m "Update services page content"

# Push to GitHub
git push
```

### Useful Commands

```bash
# Undo latest commit (keep changes)
git reset --soft HEAD~1

# Undo latest commit (discard changes)
git reset --hard HEAD~1

# Stash changes temporarily
git stash

# Apply stashed changes
git stash pop

# See diff of changes
git diff

# See what's staged
git diff --staged

# Pull latest changes
git pull origin main
```

## GitHub Best Practices

### Branch Naming Convention

```
feature/add-blog-page           # New feature
bugfix/contact-form-error       # Bug fix
docs/update-readme              # Documentation
chore/update-dependencies       # Maintenance
```

### Commit Message Best Practices

```
Good:
- "Add contact form validation"
- "Fix navbar mobile menu bug"
- "Update services page content"

Avoid:
- "asdf"
- "changes"
- "update"
```

### Pull Request Workflow

```bash
# 1. Create and switch to feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "Description of changes"

# 3. Push to GitHub
git push -u origin feature/new-feature

# 4. Create Pull Request on GitHub
# (GitHub will show a prompt)

# 5. After merge, switch back to main
git checkout main
git pull origin main

# 6. Delete local feature branch
git branch -d feature/new-feature
```

## Protecting Main Branch

**Recommended for team projects:**

1. Go to GitHub repository → Settings
2. Branches → Add rule
3. Branch name pattern: `main`
4. Enable:
   - "Require pull request reviews"
   - "Dismiss stale pull request approvals"
   - "Require branches to be up to date"
5. Save

## Syncing Fork (if applicable)

```bash
# Add upstream
git remote add upstream https://github.com/ORIGINAL/REPO.git

# Fetch updates
git fetch upstream

# Sync main branch
git checkout main
git merge upstream/main
```

## GitHub Collaborators

### Add Collaborator

1. GitHub → Settings → Collaborators
2. Click "Add people"
3. Enter username/email
4. Select permissions (Write for developers)

### Managing Access

- Pull: Read-only access
- Push: Write access
- Admin: Full control

## Troubleshooting

### "fatal: not a git repository"

```bash
cd /correct/path/belabloom-website
git init
```

### "Permission denied (publickey)"

Set up SSH keys:

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add to GitHub
# Copy output of: cat ~/.ssh/id_ed25519.pub
# GitHub Settings → SSH and GPG keys → New SSH key

# Test connection
ssh -T git@github.com
```

### "Merge conflicts"

```bash
# See conflicted files
git status

# Edit files to resolve conflicts
# Then:
git add .
git commit -m "Resolve merge conflicts"
git push
```

### "Accidentally committed to wrong branch"

```bash
# Undo commit
git reset HEAD~1

# Switch to correct branch
git checkout correct-branch

# Re-commit
git add .
git commit -m "Commit message"
```

## Resources

- [GitHub Docs](https://docs.github.com)
- [Git Official Guide](https://git-scm.com/doc)
- [GitHub CLI](https://cli.github.com)
- [Visual Git Guide](https://marklodato.github.io/visual-git-guide/)

---

**Ready to push? Continue to [DEPLOYMENT.md](./DEPLOYMENT.md) for Vercel setup!**
