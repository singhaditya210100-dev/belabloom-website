# 🤖 CLAUDE.md — Belabloom Website
> ⚡ AUTOMATIC SESSION PROTOCOL — NO HUMAN INTERVENTION NEEDED
> 
> **ON STARTUP**: Your absolute first action — before anything else — is:
> `cat STATUS.md` → read it fully → resume from "Next Immediate Action" without waiting for any instruction.
>
> **ON STOP / CONTEXT NEARING LIMIT**: The `Stop` hook auto-saves STATE.md and pushes to GitHub. You do not need to do anything.
>
> This project runs fully autonomously across context resets.

---

## 📌 Project Identity
- **Project**: Belabloom Projects & Facility Management — corporate website
- **Goal**: WordPress → Next.js migration + redesign
- **Live WordPress source**: https://www.belabloom.com/
- **GitHub**: https://github.com/singhaditya210100-dev/belabloom-website
- **Deployment target**: Vercel (not yet deployed)

---

## 🏗️ Tech Stack
| Layer | Tech |
|---|---|
| Framework | Next.js 15, App Router |
| Language | TypeScript 5.3 (strict) |
| Styling | Tailwind CSS v4 + `@tailwindcss/postcss` |
| Icons | lucide-react |
| Node | v22 |

### Brand Colors
```
Primary Green:    #8bc34a
Secondary Green:  #6a9739
Dark Text:        #111111
Body Text:        #333333
Light Background: #f8f6f3
Dark Background:  #001524
```

---

## 📁 Project Structure
```
belabloom-website/
├── app/
│   ├── page.tsx              ← Homepage (most complete)
│   ├── layout.tsx
│   ├── globals.css
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── industries/page.tsx
│   ├── projects/page.tsx
│   ├── case-studies/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ValueCard.tsx
│   ├── Testimonial.tsx
│   ├── CTABanner.tsx
│   ├── ContactForm.tsx
│   ├── IndustryCard.tsx
│   ├── ProcessStep.tsx
│   └── TrustIndicators.tsx
├── public/images/            ← 43 client logo images already copied from WordPress
├── wp-download/              ← Raw WordPress HTML (home.html, services.html) for reference
├── docs/                     ← Static HTML reference pages
├── CLAUDE.md                 ← THIS FILE (read every session)
└── STATUS.md                 ← Current progress tracker (read every session)
```

---

## ✅ What's Done
- [x] Full Next.js project scaffold (Next 15, TS, Tailwind v4)
- [x] Homepage (`app/page.tsx`) — 9 sections migrated from WordPress:
  - Hero, Company Story, Stats (500+ projects, 20+ clients), Client Logos grid, Services (4 cards), Core Values, Industries grid, Testimonials, CTA Banner
- [x] 11 reusable components created
- [x] 43 client images copied to `public/images/`
- [x] Color scheme matching WordPress (#8bc34a primary green)
- [x] Competitor analysis done (`REDESIGN_STRATEGY.md`)
- [x] Git repo initialized + pushed to GitHub (2 commits)

---

## 🔧 Architectural Decisions
1. **App Router only** — No Pages Router. All routes under `app/`.
2. **Tailwind v4** — Uses `@tailwindcss/postcss`, NOT the old `tailwind.config.js` plugin approach. Import via `@import "tailwindcss"` in `globals.css`.
3. **No external carousel lib yet** — Client logos currently in a static grid. Swiper.js integration is planned.
4. **Static generation** — All pages use default static generation (no `"use client"` unless interactive).
5. **Contact form** — API route at `app/api/contact/route.ts` exists but email service (SendGrid/Resend) is NOT yet wired up.

---

## ⚠️ Known Issues / Watch Out For
- `tailwind.config.ts` exists but Tailwind v4 reads config differently — do not add `content` paths the old v3 way.
- `PostCSS` config is at `postcss.config.js` using `@tailwindcss/postcss`.
- Images in `public/images/` have verbose WhatsApp-style filenames — reference them carefully.
- `wp-download/` HTML files are for content reference only, not served.

---

## 📋 How to Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run type-check # TypeScript check
npm run lint
```

---

## 🔁 Session Protocol
At the **start** of every session:
1. Read `CLAUDE.md` (this file) ✅
2. Read `STATUS.md` for latest task state
3. Continue from "Next Immediate Action" in `STATUS.md`

At the **end** of every session (or when approaching token limit):
1. Update `STATUS.md` — mark completed items, update "In Progress", set new "Next Immediate Action"
2. Commit with a meaningful message: `git add -A && git commit -m "feat/fix: description"`
3. Push: `git push origin main`
