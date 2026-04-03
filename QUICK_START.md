# Quick Start Commands

This file contains all commands needed to get started, from setup to deployment.

## 📋 Prerequisites

- Node.js 18+ installed
- Git installed
- GitHub account
- Vercel account (free signup at vercel.com)

## 🚀 Quick Setup (Copy & Paste)

### 1. Navigate to Project

```bash
cd belabloom-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

```bash
# Copy example environment file
cp .env.example .env.local

# Edit and add your email service credentials:
# nano .env.local  (on Mac/Linux)
# code .env.local  (on Windows with VS Code)
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📚 Available Scripts

```bash
# Development
npm run dev              # Start dev server on http://localhost:3000

# Production
npm run build           # Create production build
npm start               # Start production server

# Quality
npm run lint            # Run ESLint
npm run type-check      # Run TypeScript type checking

# All checks
npm run type-check && npm run lint && npm run build
```

---

## 🔧 Customization Commands

### Edit Content

```bash
# Edit homepage
code app/page.tsx

# Edit services
code app/services/page.tsx

# Edit about page
code app/about/page.tsx

# Edit any page
code app/[page-name]/page.tsx
```

### Update Colors

```bash
# Edit Tailwind config
code tailwind.config.ts

# Modify primary colors:
# primary: {
#   500: '#your-color',
#   600: '#darker-shade',
# }
```

### Add New Page

```bash
# Create new directory
mkdir -p app/new-page

# Create page file
cat > app/new-page/page.tsx << 'EOF'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Page | Belabloom',
}

export default function NewPage() {
  return <h1>New Page</h1>
}
EOF
```

---

## 🌐 Git & GitHub Setup

### Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: Belabloom Next.js website"
```

### Create GitHub Repository

**Option 1: Using GitHub CLI**

```bash
gh auth login                                        # Authenticate if needed
gh repo create belabloom-website --source=. --push  # Create and push
```

**Option 2: Manual**

1. Go to https://github.com/new
2. Name: `belabloom-website`
3. Click "Create repository"
4. Run commands from GitHub:

```bash
git remote add origin https://github.com/USERNAME/belabloom-website.git
git branch -M main
git push -u origin main
```

### Verify

```bash
git remote -v
git log --oneline
```

---

## 🚀 Deploy to Vercel

### Option 1: Using Vercel CLI (Fastest)

```bash
npm i -g vercel               # Install Vercel CLI (first time only)
vercel                        # Follow interactive prompts
vercel --prod                 # Deploy to production
```

### Option 2: Using Vercel Dashboard

```bash
# 1. Go to vercel.com
# 2. Click "New Project"
# 3. Import your GitHub repository
# 4. Framework: Next.js (auto-selected)
# 5. Add environment variables
# 6. Click "Deploy"
```

### Set Environment Variables on Vercel

```bash
# After deployment, add environment variables:
vercel env add NEXT_PUBLIC_SENDGRID_FROM_EMAIL
vercel env add SENDGRID_API_KEY

# Or via dashboard: Project Settings → Environment Variables
```

---

## 📧 Email Service Setup

### SendGrid (Recommended)

```bash
# 1. Sign up at sendgrid.com
# 2. Create API key
# 3. Add to Vercel:

vercel env add SENDGRID_API_KEY your_api_key_here

# 4. Update app/api/contact/route.ts with SendGrid integration
npm install @sendgrid/mail
```

### Resend

```bash
# 1. Sign up at resend.com
# 2. Create API key
# 3. Add to Vercel:

vercel env add RESEND_API_KEY your_api_key_here

# 4. Update app/api/contact/route.ts with Resend integration
npm install resend
```

---

## 🔄 Daily Development Workflow

### Start Development

```bash
npm run dev
```

### Make Changes

```bash
# Edit files in your editor
code .

# Check for errors
npm run type-check
```

### Commit Changes

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

### Auto-Deploy

```bash
# Pushing to GitHub automatically triggers Vercel deployment
# Watch deployment at vercel.com dashboard
```

---

## 📱 Testing

### Local Testing

```bash
# Development mode
npm run dev

# Production simulation
npm run build
npm start

# Type checking
npm run type-check

# Testing on different screen sizes
# Browser DevTools → Toggle device toolbar (Ctrl+Shift+M)
```

### Mobile Testing

```bash
# Get local IP address
ipconfig getifaddr en0          # Mac
hostname -I                     # Linux
ipconfig                        # Windows

# Access from phone on same network:
# http://YOUR_IP:3000
```

---

## 🐛 Troubleshooting

### Clear Cache & Reinstall

```bash
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Port Already in Use

```bash
npm run dev -- -p 3001  # Use different port
```

### Build Errors

```bash
npm run type-check      # Check TypeScript errors
npm run lint            # Check ESLint errors
npm run build           # Full build test
```

### Git Issues

```bash
# Check status
git status

# Revert uncommitted changes
git checkout .

# Revert to previous commit
git reset --hard HEAD~1
```

---

## 📊 Performance Check

```bash
# Lighthouse audit (in Chrome DevTools)
# Ctrl+Shift+I → Lighthouse tab

# NextJS analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true',
# })
# module.exports = withBundleAnalyzer(nextConfig)

# Run: ANALYZE=true npm run build
```

---

## ✅ Pre-Launch Checklist

```bash
# 1. Type checking
npm run type-check

# 2. Linting
npm run lint

# 3. Build test
npm run build

# 4. Start production server
npm start

# 5. Manual testing
# - Visit http://localhost:3000
# - Test all pages
# - Test contact form
# - Test mobile view

# 6. Git status
git status

# 7. Commit final changes
git add .
git commit -m "Pre-launch: final checks"
git push

# 8. Check Vercel deployment
# - Opens automatically after git push
# - Verify all pages load
# - Test functionality
# - Check SEO metadata
```

---

## 📈 Monitoring After Launch

```bash
# View Vercel Analytics
vercel analytics

# View logs
vercel logs

# Monitor performance
# Dashboard at vercel.com → Analytics tab
```

---

## 🆘 Support Commands

```bash
# Next.js docs
vercel env list              # List environment variables

# Help
npm help
vercel --help
git --help

# Check versions
node --version
npm --version
git --version
```

---

## 🔐 Security

```bash
# Check for vulnerable dependencies
npm audit

# Fix vulnerabilities
npm audit fix

# Update dependencies safely
npm update
npm outdated  # See available updates
```

---

## 📝 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Git & GitHub Guide](./GIT_GITHUB_SETUP.md)
- [Deployment Guide](./DEPLOYMENT.md)

---

**Everything ready! Start developing with `npm run dev` 🎉**
