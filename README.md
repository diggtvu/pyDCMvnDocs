# Cursor AI for BIM Development

[![Build and Deploy](https://github.com/diggtvu/pyDCMvnDocs/actions/workflows/deploy.yml/badge.svg)](https://github.com/diggtvu/pyDCMvnDocs/actions/workflows/deploy.yml)
[![Documentation](https://img.shields.io/badge/docs-online-brightgreen.svg)](https://diggtvu.github.io/pyDCMvnDocs/)

Complete guide to using Cursor AI for Building Information Modeling development workflows.

**Last Updated:** August 4, 2025

## Overview

This documentation provides comprehensive guidance for leveraging [Cursor AI](https://docs.cursor.com/en/welcome) in BIM development, covering Revit API development, IFC analysis, MEP coordination, and data processing optimization with AI-powered code generation.

## Features

- **AI-Powered Code Generation**: Natural language to code using Cursor's advanced AI models
- **Smart BIM Completions**: Context-aware suggestions for Revit API, IFC, and MEP workflows  
- **Prompt Engineering Guide**: Comprehensive techniques for effective AI communication
- **Professional Examples**: Real-world BIM development scenarios and solutions
- **GitHub Actions Ready**: Automated deployment and testing workflows

## Quick Start

**Efficient Cursor Prompt Example**:
*"Create a Revit external command that analyzes all walls in the active document and exports their properties to Excel. Include error handling and transaction management."*

**Result**: Cursor generates complete BIM development patterns with proper API usage, error handling, and best practices.

## Getting Started

1. **Install Cursor**: Download from [cursor.com](https://cursor.com)
2. **Configure for BIM**: Set up Revit API and IFC library support
3. **Learn Prompt Engineering**: Master AI communication techniques
4. **Explore Examples**: Browse practical BIM development scenarios
5. **Deploy with GitHub Actions**: Use automated workflows for production

## Documentation

Visit our [documentation site](https://diggtvu.github.io/pyDCMvnDocs) for comprehensive guides:

- **Getting Started**: Setup Cursor for BIM development
- **Cursor Features**: AI capabilities and prompt engineering
- **BIM Examples**: Practical Revit, IFC, and MEP scenarios
- **Contributing**: Join the BIM development community

## Cursor AI Features

This guide covers Cursor's core capabilities for BIM development:

- **Tab Completion**: Context-aware code suggestions for BIM patterns
- **AI Chat**: Natural language assistance for complex problems  
- **Codebase Indexing**: Project-wide understanding of BIM relationships
- **Auto-Import**: Smart dependency management for BIM libraries

## Development & Deployment

### Local Development
```bash
npm start              # Development server
npm run build          # Production build
npm run serve          # Test production build
```

### GitHub Actions Deployment
Automated workflows handle the build and deployment process:

1. **Push to main branch** triggers the build pipeline
2. **Build job** compiles Docusaurus site
3. **Deploy job** pushes built files to `gh-pages-deploy` branch
4. **GitHub Pages** serves content from the `gh-pages-deploy` branch

### Feature Branch Testing
Pushes to feature branches trigger test builds on multiple Node.js versions to ensure compatibility.

### Manual Deployment
If needed, you can manually deploy using:
```bash
npm run build
# Push the build/ folder contents to gh-pages-deploy branch
```

## Resources

- **[Cursor Documentation](https://docs.cursor.com/en/welcome)** - Official Cursor AI features
- **[Revit API Docs](https://www.revitapidocs.com)** - Autodesk development resources
- **[buildingSMART](https://www.buildingsmart.org)** - IFC and openBIM standards

## Contributing

Contributions welcome! Please see our [Contributing Guide](docs/contributing.md) for details on:
- Sharing effective Cursor prompts
- Adding BIM development examples
- Improving documentation
