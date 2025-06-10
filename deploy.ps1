# PowerShell Script to Deploy pyDCMvn to GitHub Pages
# Run this script after creating your GitHub repository

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$false)]
    [string]$RepositoryName = "pyDCMvn"
)

Write-Host "🚀 Deploying pyDCMvn to GitHub Pages..." -ForegroundColor Green

# Check if we're in the right directory
if (-not (Test-Path "_config.yml")) {
    Write-Host "❌ Error: Please run this script from the pyDCMvn.Docs directory" -ForegroundColor Red
    exit 1
}

# Update _config.yml with the correct username
Write-Host "📝 Updating _config.yml with your GitHub username..." -ForegroundColor Yellow
$configContent = Get-Content "_config.yml" -Raw
$configContent = $configContent -replace "yourusername", $GitHubUsername
Set-Content "_config.yml" -Value $configContent

# Update other files with username
Write-Host "📝 Updating documentation files..." -ForegroundColor Yellow
$filesToUpdate = @("README.md", "getting-started.md", "api-reference.md", "examples.md", "contributing.md")

foreach ($file in $filesToUpdate) {
    if (Test-Path $file) {
        $content = Get-Content $file -Raw
        $content = $content -replace "yourusername", $GitHubUsername
        Set-Content $file -Value $content
    }
}

# Add remote origin
Write-Host "🔗 Adding GitHub remote..." -ForegroundColor Yellow
$repoUrl = "https://github.com/$GitHubUsername/$RepositoryName.git"

try {
    git remote remove origin 2>$null
} catch {
    # Remote doesn't exist, that's fine
}

git remote add origin $repoUrl

# Rename branch to main
Write-Host "🔄 Setting up main branch..." -ForegroundColor Yellow
git branch -M main

# Commit the username updates
Write-Host "💾 Committing configuration updates..." -ForegroundColor Yellow
git add .
git commit -m "Update configuration with GitHub username: $GitHubUsername"

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Go to https://github.com/$GitHubUsername/$RepositoryName" -ForegroundColor White
Write-Host "2. Click 'Settings' tab" -ForegroundColor White
Write-Host "3. Scroll to 'Pages' in the sidebar" -ForegroundColor White
Write-Host "4. Select 'Deploy from a branch'" -ForegroundColor White
Write-Host "5. Choose 'main' branch and '/ (root)' folder" -ForegroundColor White
Write-Host "6. Click 'Save'" -ForegroundColor White
Write-Host ""
Write-Host "Your site will be available at:" -ForegroundColor Cyan
Write-Host "https://$GitHubUsername.github.io/$RepositoryName" -ForegroundColor Green
Write-Host ""
Write-Host "Note: It may take 5-10 minutes for the site to be available." -ForegroundColor Yellow
