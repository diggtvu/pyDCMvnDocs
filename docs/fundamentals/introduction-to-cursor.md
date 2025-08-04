---
title: "Introduction to Cursor AI"
slug: "introduction-to-cursor"
description: "Discover Cursor AI's revolutionary approach to AI-native code editing for BIM and AEC development"
sidebar_position: 3
---

# Introduction to Cursor AI

Cursor AI is a revolutionary AI-native code editor that transforms how developers write code, especially for complex BIM and AEC applications. Built from the ground up with AI integration, Cursor provides an unparalleled development experience for pyRevit and Revit API projects.

## 🌟 What is Cursor AI?

Cursor is more than just an AI-powered code editor—it's a complete development environment designed for the AI era. Unlike traditional IDEs with AI plugins, Cursor is built with AI as a core component, offering:

- **Native AI Integration** - AI is embedded throughout the entire development workflow
- **Agent Mode** - Autonomous coding sessions that can work for hours
- **Advanced Context Understanding** - Comprehends entire codebases and project structures
- **Real-time Collaboration** - Work alongside AI as a coding partner

## 🔗 Official Resources

### Essential Links

- **Official Documentation**: [https://docs.cursor.com/en/welcome](https://docs.cursor.com/en/welcome)
- **Community Forum**: [https://forum.cursor.com/](https://forum.cursor.com/)
- **Download**: [https://cursor.com/](https://cursor.com/)
- **GitHub**: [https://github.com/getcursor/cursor](https://github.com/getcursor/cursor)

### Key Documentation Sections

- [Getting Started Guide](https://docs.cursor.com/en/get-started/migrate-from-vscode)
- [AI Features Overview](https://docs.cursor.com/en/features/ai-features)
- [Context Management](https://docs.cursor.com/en/context/rules)
- [Settings & Configuration](https://docs.cursor.com/en/settings/rules-for-ai)

## 🎯 Why Cursor for BIM Development?

Cursor AI is particularly powerful for BIM and AEC development because:

### 1. **Complex API Understanding**
- Understands Revit API patterns and C# interop
- Recognizes pyRevit architecture and conventions
- Suggests appropriate error handling for API operations

### 2. **Architectural Pattern Recognition**
- Identifies MVVM patterns in WPF applications
- Understands spatial data structures and geometry
- Recognizes BIM workflow patterns

### 3. **Multi-language Support**
- Seamless Python-C# interop for pyRevit
- XAML understanding for WPF interfaces
- Database query optimization for BIM data

### 4. **Domain-Specific Knowledge**
- Building codes and standards awareness
- MEP system understanding
- Construction workflow patterns

## 🚀 Key Features for BIM Developers

### Agent Mode
- **Autonomous Development**: AI can work independently for extended periods
- **Multi-file Refactoring**: Handles complex changes across multiple files
- **Testing Integration**: Automatically runs tests and fixes issues

### Tab Completion
- **Context-Aware Suggestions**: Understands your specific BIM context
- **API Method Completion**: Intelligent Revit API method suggestions
- **Custom Library Integration**: Learns your project's patterns

### Inline Edit
- **Natural Language Edits**: Describe changes in plain English
- **Smart Refactoring**: Maintains code quality during modifications
- **Error Prevention**: Anticipates and prevents common mistakes

### Chat Interface
- **Project-Wide Queries**: Ask questions about your entire codebase
- **Documentation Generation**: Create docs from code automatically
- **Code Explanation**: Understand complex BIM algorithms

## 🛠️ Cursor vs Traditional IDEs

| Feature | Traditional IDE + AI Plugin | Cursor AI |
|---------|------------------------------|-----------|
| AI Integration | Add-on, limited context | Native, full codebase awareness |
| Multi-file Operations | Manual coordination | Autonomous agent mode |
| Learning Curve | Steep for AI features | Intuitive, VS Code-like |
| BIM Domain Knowledge | Generic programming help | Specialized AEC understanding |
| Performance | Plugin overhead | Optimized AI integration |

## 📁 .cursorindexingignore

One of Cursor's unique features is the `.cursorindexingignore` file, which controls what Cursor indexes for AI context. This is crucial for BIM projects with large datasets:

```gitignore
# Ignore large Revit files
*.rvt
*.rte
*.rfa
*.rft

# Ignore point clouds and large datasets
*.pts
*.xyz
*.las
*.e57

# Ignore temporary build files
**/bin/
**/obj/
**/__pycache__/
*.pyc

# Ignore large documentation
**/docs/api/
**/help/
```

### Why .cursorindexingignore Matters

- **Performance**: Prevents Cursor from indexing massive BIM files
- **Context Quality**: Focuses AI attention on relevant code
- **Cost Optimization**: Reduces token usage for irrelevant content
- **Privacy**: Keeps sensitive project data out of AI context

## 🔧 Initial Setup for BIM Development

### 1. Download and Install
1. Visit [cursor.com](https://cursor.com/) and download the installer
2. Run the installer (supports Windows, macOS, Linux)
3. Launch Cursor and complete the initial setup

### 2. Import VS Code Settings
If you're coming from VS Code:
```bash
# Cursor can automatically import your VS Code settings
# During setup, choose "Import from VS Code"
```

### 3. Configure for pyRevit Development
Essential extensions for BIM development:
- **Python** - Python language support
- **C#** - For Revit API interop
- **XML Tools** - For XAML and configuration files
- **GitHub Copilot** - Additional AI assistance (optional)

### 4. Set Up Project Structure
Recommended folder structure for pyRevit projects:
```
MyRevitExtension/
├── .cursorindexingignore
├── .cursor/
│   └── rules/
├── pyrevit.yaml
├── MyExtension.tab/
│   ├── Panel1.panel/
│   │   ├── Tool1.pushbutton/
│   │   │   ├── script.py
│   │   │   ├── __init__.py
│   │   │   └── icon.png
│   │   └── Tool2.pushbutton/
│   └── Panel2.panel/
├── lib/
│   ├── common/
│   ├── models/
│   └── views/
└── tests/
```

## 🎨 Cursor Interface Overview

### Main Components

1. **Editor Area** - AI-enhanced code editing with real-time suggestions
2. **Sidebar** - File explorer with AI-powered search
3. **Chat Panel** - Conversational AI interface for complex queries
4. **Terminal** - Integrated terminal with AI command suggestions
5. **Agent Panel** - Monitor autonomous AI development sessions

### AI Interaction Methods

- **Tab Completion** - Press Tab for AI code suggestions
- **Chat Commands** - Use `@` to reference files and symbols
- **Inline Edit** - Select code and describe desired changes
- **Agent Mode** - Give high-level instructions for autonomous work

## 🔄 Migration from VS Code

If you're migrating from VS Code to Cursor:

### What Transfers Automatically
- Extensions (most VS Code extensions work in Cursor)
- Settings and preferences
- Keyboard shortcuts
- Theme and appearance

### What Needs Manual Setup
- AI model preferences
- Cursor-specific rules and context settings
- .cursorindexingignore configuration
- Project-specific AI prompts

### Migration Checklist
- [ ] Import VS Code settings during setup
- [ ] Install essential extensions
- [ ] Configure .cursorindexingignore for your projects
- [ ] Set up Project Rules in .cursor/rules/ for team consistency
- [ ] Test AI features with sample code
- [ ] Configure API keys and model preferences

## 🚀 What's Next?

Now that you understand Cursor AI fundamentals, let's explore:

1. **[Setting Up Cursor for pyRevit](./setting-up-cursor.md)** - Essential configuration and Anysphere extensions
2. **[Core Features Deep Dive](../features/tab-autocomplete.md)** - Master Tab, Inline Edit, and Agent Mode

---

Ready to revolutionize your BIM development workflow? Let's dive deeper into what makes Cursor special for pyRevit and Revit API development.