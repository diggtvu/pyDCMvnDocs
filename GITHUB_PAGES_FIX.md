# How to Fix GitHub Pages to Show Docusaurus Content

## The Problem

Your GitHub Pages site is currently showing the README.md file because it's configured to use the **main** branch as the source, but your built Docusaurus content is in the **gh-pages-deploy** branch.

## Solution - Update GitHub Pages Source Branch

You need to manually change the GitHub Pages source branch in your repository settings:

1. Go to your repository on GitHub: https://github.com/diggtvu/pyDCMvnDocs
2. Click on "Settings" (top navigation bar)
3. In the left sidebar, click on "Pages"
4. Under "Build and deployment" section:
   - For "Source", select "Deploy from a branch"
   - For "Branch", change from "main" to **"gh-pages-deploy"**
   - Keep the folder as "/" (root)
5. Click "Save"

![GitHub Pages Settings](https://docs.github.com/assets/cb-78797/mw-1440/images/help/pages/source-menu.webp)

## Verification

After updating the settings:
1. Wait a few minutes for GitHub to deploy the site
2. Visit https://diggtvu.github.io/pyDCMvnDocs/
3. You should now see your Docusaurus content instead of the README

## Additional Information

- The GitHub Actions workflow is correctly set up to build and deploy to the gh-pages-deploy branch
- The gh-pages-deploy branch contains the proper built Docusaurus site with index.html and assets
- The only missing piece is telling GitHub Pages which branch to serve content from

If you continue to have issues after updating the branch setting, please let me know.
