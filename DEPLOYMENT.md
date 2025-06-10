# GitHub Pages Deployment Guide for pyDCMvn

## Prerequisites
1. A GitHub account
2. Git installed on your system
3. This repository ready to push

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon and select "New repository"
3. Name it **exactly**: `pyDCMvn`
4. Make it public (required for free GitHub Pages)
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### 2. Push Your Local Repository

Replace `yourusername` with your actual GitHub username:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/yourusername/pyDCMvn.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Configure Repository Settings

1. In repository settings, update the description to:
   ```
   Python DICOM Library for Vietnamese Healthcare
   ```

2. Add website URL:
   ```
   https://yourusername.github.io/pyDCMvn
   ```

3. Add topics (optional):
   ```
   python, dicom, medical-imaging, healthcare, vietnam
   ```

### 5. Update Configuration

After creating the GitHub repository, update `_config.yml`:

1. Replace `yourusername` with your actual GitHub username
2. Update the `url` and `baseurl` settings

Example:
```yaml
url: "https://yourusername.github.io"
baseurl: "/pyDCMvn"
```

### 6. Access Your Site

Your GitHub Pages site will be available at:
```
https://yourusername.github.io/pyDCMvn
```

Note: It may take 5-10 minutes for the site to be available after first deployment.

## Updating Your Site

To update your documentation:

1. Make changes to your files locally
2. Commit the changes:
   ```bash
   git add .
   git commit -m "Update documentation"
   git push
   ```
3. GitHub Pages will automatically rebuild and deploy your site

## Custom Domain (Optional)

To use a custom domain like `pydcmvn.com`:

1. Buy a domain from a registrar
2. In your repository, go to Settings > Pages
3. Under "Custom domain", enter your domain
4. Create a `CNAME` file in your repository root with your domain
5. Configure DNS with your domain registrar

## Troubleshooting

### Site Not Loading
- Check that GitHub Pages is enabled in repository settings
- Verify the branch and folder are correctly selected
- Wait 5-10 minutes for deployment

### 404 Errors
- Check that file paths in links are correct
- Ensure `baseurl` is properly set in `_config.yml`
- Verify Jekyll syntax is correct

### Build Failures
- Check the "Actions" tab for build logs
- Verify Jekyll syntax and configuration
- Ensure all required files are present

## Repository Structure

Your final repository should look like:
```
pyDCMvn/
├── _config.yml
├── _layouts/
│   └── default.html
├── index.html
├── getting-started.html
├── api-reference.html
├── examples.md
├── contributing.md
├── README.md
├── LICENSE
├── CHANGELOG.md
├── Gemfile
└── .gitignore
```

## Next Steps

1. Create the GitHub repository
2. Push your code
3. Enable GitHub Pages
4. Customize the content for your actual project
5. Share your documentation site with the community!

Your site will be live at: `https://yourusername.github.io/pyDCMvn`
