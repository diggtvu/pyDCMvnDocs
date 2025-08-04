# GitHub Actions Deployment

This document describes the GitHub Actions workflow for building and deploying the Docusaurus site to GitHub Pages.

## Overview

The repository uses GitHub Actions to automate the build and deployment process for the documentation site. The workflow is configured to:

1. Build the Docusaurus project when changes are pushed to the `main` branch
2. Deploy the built files to the `gh-pages-deploy` branch
3. GitHub Pages then serves the content from this branch

## Workflow Files

Two workflow files control the CI/CD process:

1. `.github/workflows/deploy.yml` - Handles build and deployment to `gh-pages-deploy` branch
2. `.github/workflows/test.yml` - Tests builds on feature branches with multiple Node.js versions

## Main Deployment Workflow

The `deploy.yml` workflow handles the main deployment process:

### Triggers
- Pushes to the `main` branch
- Pull requests to the `main` branch (test only, no deployment)

### Jobs

#### Test Job
- Runs on all pushes and pull requests
- Builds the Docusaurus site and performs a basic server check
- Ensures changes don't break the build before deployment

#### Deploy Job
- Only runs when changes are pushed to the `main` branch
- Builds the Docusaurus site
- Uses `peaceiris/actions-gh-pages@v3` to deploy to `gh-pages-deploy` branch
- Configures git user as `github-actions[bot]` for commit history
- Uses `force_orphan: true` to ensure clean deployment history

## Feature Branch Testing

The `test.yml` workflow handles testing on feature branches:

### Triggers
- Pushes to any branch except `main`
- Pull requests to any branch except `main`

### Features
- Tests builds across multiple Node.js versions (18 and 20)
- Ensures cross-version compatibility
- Performs server tests to validate the build

## Manual Triggering

You can manually trigger the deployment workflow from the GitHub Actions tab in the repository:

1. Navigate to the "Actions" tab
2. Select the "Build and Deploy Docusaurus" workflow
3. Click "Run workflow" dropdown
4. Select the branch and click "Run workflow"

## Troubleshooting

If deployment fails, check:

1. GitHub repository settings to ensure Actions has appropriate permissions
2. The build logs for any errors in the Docusaurus build process
3. GitHub Pages settings to confirm it's configured to serve from the `gh-pages-deploy` branch

## Local Testing

Before pushing changes, test locally with:

```bash
# Install dependencies
npm ci

# Build site
npm run build

# Serve locally to test
npm run serve
```

Visit `http://localhost:3000/pyDCMvnDocs/` to verify your changes.
