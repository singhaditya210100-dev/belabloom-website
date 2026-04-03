# Deployment Guide for Belabloom Website

## Pre-Deployment Checklist

- [ ] Update all placeholder content
- [ ] Add company logo and images
- [ ] Test all forms and functionality locally
- [ ] Run type check: `npm run type-check`
- [ ] Check build: `npm run build`
- [ ] Set environment variables
- [ ] Configure email service
- [ ] Update metadata and SEO tags

## Vercel Deployment

### Step 1: Prepare Repository

```bash
# Initialize Git (if not already done)
git init

# Create .gitignore (already included)
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Belabloom Next.js website"
```

### Step 2: Push to GitHub

```bash
# Create repository on GitHub
# Then:
git remote add origin https://github.com/USERNAME/belabloom-website.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

**Option A: Using Vercel CLI**

```bash
npm i -g vercel
vercel
```

**Option B: Using Vercel Dashboard**

1. Go to [vercel.com](https://vercel.com)
2. Sign up or log in
3. Click "New Project"
4. Import your GitHub repository
5. Framework preset: Select "Next.js"
6. Build settings (auto-detected):
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm ci`
7. Add environment variables:
   - `NEXT_PUBLIC_SENDGRID_FROM_EMAIL`
   - `SENDGRID_API_KEY` (if using SendGrid)
   - Any other env vars needed
8. Click "Deploy"

### Step 4: Configure Custom Domain

1. In Vercel project settings → Domains
2. Add your custom domain (e.g., belabloom.com)
3. Follow DNS instructions from your domain provider
4. Wait for DNS propagation (up to 48 hours)

### Step 5: Set Up Redirects (Optional)

Add to `next.config.js` for old WordPress URLs:

```js
redirects: async () => {
  return [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true,
    },
  ]
},
```

## Environment Variables on Vercel

### In Vercel Dashboard:

1. Project Settings → Environment Variables
2. Add all variables from `.env.example`
3. Select which environments (Production, Preview, Development)

Example:
```
NEXT_PUBLIC_SENDGRID_FROM_EMAIL=noreply@belabloom.com
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
NEXT_PUBLIC_CONTACT_EMAIL=info@belabloom.com
```

## Email Service Setup

### SendGrid Integration

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Add to Vercel environment variables:
   ```
   SENDGRID_API_KEY=your_key_here
   NEXT_PUBLIC_SENDGRID_FROM_EMAIL=noreply@belabloom.com
   ```
4. Update `app/api/contact/route.ts` with SendGrid code

### Resend Integration

1. Sign up at [resend.com](https://resend.com)
2. Create API key
3. Add to Vercel environment variables:
   ```
   RESEND_API_KEY=your_key_here
   ```
4. Update `app/api/contact/route.ts` with Resend code

## Post-Deployment

### 1. Test Everything

- [ ] Visit https://yourdomain.com
- [ ] Test all navigation links
- [ ] Submit contact form (check email)
- [ ] Check mobile responsiveness
- [ ] Verify all images load
- [ ] Check SEO meta tags (inspect HTML)

### 2. Submit to Search Engines

```bash
# Add to Search Console
https://search.google.com/search-console

# Add sitemap (Next.js auto-generates)
https://yourdomain.com/sitemap.xml

# Submit robots.txt
https://yourdomain.com/robots.txt
```

### 3. Set Up Monitoring

- Enable Vercel Analytics in project settings
- Set up error notifications
- Monitor performance metrics

### 4. Enable Security Features

- Enable "Serverless Function Rate Limiting"
- Set up CORS if needed
- Enable HTTPS (automatic on Vercel)

### 5. Backup & Version Control

```bash
# Ensure regular commits
git add .
git commit -m "Post-deployment fixes"
git push
```

## Maintenance

### Weekly

- [ ] Check for broken links
- [ ] Review form submissions
- [ ] Monitor performance metrics

### Monthly

- [ ] Update content as needed
- [ ] Check for security updates
- [ ] Review analytics

### Quarterly

- [ ] Update dependencies:
  ```bash
  npm update
  npm audit
  ```
- [ ] Performance optimization audit
- [ ] SEO audit

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Verify environment variables
3. Run `npm run build` locally
4. Check TypeScript errors: `npm run type-check`

### Contact Form Not Working

1. Verify environment variables are set
2. Check email service API key
3. Review server logs in Vercel
4. Test locally first

### Slow Performance

1. Check Vercel Analytics
2. Optimize images
3. Review Core Web Vitals
4. Check for unwanted scripts/plugins

### Domain Not Resolving

1. Verify DNS records
2. Check domain provider settings
3. Wait for DNS propagation
4. Try incognito/private browser

## Rollback Procedure

```bash
# If something goes wrong, revert to previous deployment:
# In Vercel dashboard → Deployments → Select previous

# Or revert Git commit:
git log --oneline
git revert <commit-hash>
git push
```

## Performance Optimization

### Image Optimization

```tsx
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Description" 
  width={400} 
  height={300}
  priority
/>
```

### Code Splitting

Already automatic with Next.js App Router.

### Caching Strategy

```tsx
export const revalidate = 3600 // 1 hour ISR
```

## SSL Certificate

- Automatic on Vercel
- Renews automatically
- No action needed

## CDN & Edge

- Automatically cached on Vercel Edge Network
- No additional configuration needed
- Serves from 300+ datacenters worldwide

## Monitoring & Analytics

### Vercel Analytics

1. Go to Project Settings → Analytics
2. Enable Web Analytics
3. View at: Analytics tab in dashboard

### Google Analytics (Optional)

1. Create GA4 property
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add tracking script to `app/layout.tsx`

## Contacting Support

- Vercel Support: [vercel.com/support](https://vercel.com/support)
- Next.js Discussion: [github.com/vercel/next.js/discussions](https://github.com/vercel/next.js/discussions)
- Email: Your tech team

## Resources

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Best Practices Guide](./BEST_PRACTICES.md)

---

**Last Updated**: March 16, 2026  
**Version**: 1.0.0
