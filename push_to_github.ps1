# Add Git to PATH
$env:Path += ";C:\Program Files\Git\cmd"

# Navigate to project
cd "c:\workspace\belabloom-website"

Write-Host "=== BelaBloom Website - GitHub Push ===" -ForegroundColor Green

Write-Host "`n=== Git Configuration ===" -ForegroundColor Green
git config user.name "Aditya Singh"
git config user.email "singhaditya210100@gmail.com"

Write-Host "`n=== Git Status ===" -ForegroundColor Green
git status

Write-Host "`n=== Staging Files ===" -ForegroundColor Green
git add .
Write-Host "Files staged successfully"

Write-Host "`n=== Creating Commit ===" -ForegroundColor Green
git commit -m "feat: BelaBloom Website - Next.js E-commerce Platform

- Modern Next.js 14+ architecture
- TypeScript for type safety
- Tailwind CSS responsive design
- Server-side rendering for performance
- WordPress migration integration
- Comprehensive documentation
- Production-ready build"

Write-Host "`n=== Configuring Remote ===" -ForegroundColor Green
git remote remove origin 2>$null
git remote add origin https://github.com/singhaditya210100-dev/belabloom-website.git
Write-Host "Remote configured"

Write-Host "`n=== Pushing to GitHub ===" -ForegroundColor Green
Write-Host "Note: You may be prompted to authenticate. Use your GitHub token when asked." -ForegroundColor Yellow
git push -u origin main --force

Write-Host "`n=== Verification ===" -ForegroundColor Green
Write-Host "Push Status: Check https://github.com/singhaditya210100-dev/belabloom-website" -ForegroundColor Cyan
