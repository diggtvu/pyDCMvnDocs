---
title: "Project Setup"
slug: "project-setup"
description: "Configure your BIM development environment for optimal Cursor AI integration"
sidebar_position: 4
---
# Project Setup

Configure your BIM development environment for optimal Cursor AI integration.

## 🔧 Prerequisites

Before you begin, ensure you have:

- **Cursor IDE** - Download from [cursor.com](https://cursor.com)
- **Development Environment**: Visual Studio 2022 for .NET/XAML Development or Python 3.8+ For standalone IFC processing
- **BIM Software**: Autodesk Revit 2020+ (for Revit API development)
- **pyRevit 5+** - Current stable release
- **Basic Knowledge**: Familiarity with Python 2/3, IronPython, basic libraries (pandas, numpy, matplotlib, openpyxl, ifcopenshell, etc.)
- **Version Control**: Git installed and configured

## Install Cursor

1. **Download Cursor**: Visit [cursor.com](https://cursor.com) and download the installer
2. **Install**: Run the installer and follow the setup wizard
3. **Launch**: Open Cursor - AI features work immediately out of the box

### Recommended Experience

- **C# Programming** - For advanced Revit API development
- **WPF/XAML** - For creating user interfaces
- **Database Concepts** - For data storage and retrieval
- **Version Control** - Git workflows and collaboration

## Project Structure Recommendations

For optimal Cursor performance with BIM projects, organize your workspace as follows:

- [C# Revit Project](https://github.com/DCMvnDigial/DCMvn)
- [Python pyRevit Project](https://github.com/DCMvnDigial/pyDCMvn.MunichRE)
- [IFC Analysis Project](https://github.com/DCMvnDigial/IfcAnalyzer)

## Configure Version Control

### .gitignore for BIM Projects

Create a `.gitignore` file:

```gitignore
# Build outputs
bin/
obj/
*.dll
*.exe

# Revit backup files
*.rvt.bak
*.rfa.bak
*.rte.bak

# IFC temporary files
*.ifczip
temp_*.ifc

# Python cache
__pycache__/
*.pyc
*.pyo

# IDE files
.vs/
.vscode/settings.json
*.suo
*.user

# Large model files (optional)
*.rvt
*.rfa
*.ifc
```

## Cursor Workspace Configuration

### settings.json for BIM Development

Create `.vscode/settings.json`:

```json
{
    // Cursor Tab completion settings
    "cursor.tab.enabled": true,
    "cursor.tab.partialAccepts": true,
    "cursor.tab.triggerInComments": true,
    "cursor.tab.maxSuggestionLength": 1000,
  
    // Auto-import settings
    "cursor.imports.python.enabled": true,
    "cursor.imports.typescript.enabled": false,
  
    // BIM-specific language settings
    "cursor.languages.csharp.enabled": true,
    "cursor.languages.python.enabled": true,
  
    // File associations for BIM development
    "files.associations": {
        "*.addin": "xml",
        "*.ifc": "plaintext",
        "*.ifcxml": "xml"
    },
  
    // Exclude large files from search
    "search.exclude": {
        "**/*.rvt": true,
        "**/*.rfa": true,
        "**/*.ifc": true
    }
}
```

## Language-Specific Setup

### C# Revit API Projects

1. **Revit 2025 Marco**: use the [template](https://help.autodesk.com/view/RVT/2025/ENU/?guid=GUID-EFF4E5A3-16EB-4CB4-AD6A-5EEE823CCE76) created by Autodesk to start developing.

### Python pyRevit Projects

1. **Start directly with pyRevit 5+**: don't need to set up virtual environment, select interpreter and start developing.

2. **Set up virtual environment**: if you want develop standalone IFC processing, you need to set up virtual environment.

```powershell
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

3. **Create requirements.txt**:

```txt
ifcopenshell
pandas
numpy
matplotlib
openpyxl
```

## Test Your Setup

### Quick Validation Test

**Cursor Prompt**: *"Create a simple Revit external command that counts all walls in the active document and displays the result in a TaskDialog."*

Expected result: Cursor should generate proper Revit API code with:

- Correct using statements
- Proper external command structure
- Transaction handling
- Error management

## Performance Optimization

### Large Model Handling

For projects with large BIM models:

1. **Exclude large files** from Cursor indexing
2. **Use specific file patterns** for BIM files
3. **Close unused projects** to reduce memory usage
4. **Configure file watchers** to ignore temporary files

### Memory Management

```json
{
    "files.watcherExclude": {
        "**/*.rvt": true,
        "**/*.rfa": true,
        "**/*.ifc": true,
        "**/temp/**": true
    }
}
```

## Modern Cursor Configuration

### Setup .cursor/rules/ Directory

Modern Cursor uses a structured rules system instead of a single `.cursorrules` file:

```
your-project/
├── .cursor/
│   └── rules/
│       ├── dcmvn-framework.mdc      # Framework patterns
│       ├── pyrevit-templates.py     # Code templates
│       ├── project-standards.mdc    # Team standards
│       └── error-handling.mdc       # Error patterns
├── .cursorindexingignore           # Exclude large files
└── your-project-files...
```

### Essential Rule Files

**1. dcmvn-framework.mdc**

```yaml
---
description: DCMvn framework patterns for pyRevit development
alwaysApply: true
---
## Core Framework Integration
- **Primary imports**: `from DCMvn.core import DB, HOST_APP, get_output`
- **Framework utilities**: `from DCMvn.core.framework import System, Debug`
- **User notifications**: `from DCMvn.forms import alert`
- **CLR setup**: Always add `clr.AddReference("System.Core")`

## MVVM Architecture
- **ViewModels**: Inherit from `ViewModelBase`
- **Commands**: Use `RelayCommand(execute_method, can_execute_method)`
- **Collections**: Use `ObservableCollection[T]()` for UI-bound data
```

**2. .cursorindexingignore**

```
# Don't index large BIM files
**/*.rvt
**/*.rfa
**/*.ifc
**/*.dwg
temp/**
bin/**
obj/**

# Don't index auto-save files but allow @ references
.specstory/**
```

### Configuration Benefits

- **Structured rules** organized by purpose
- **YAML frontmatter** for rule metadata
- **Template files** for consistent scaffolding
- **Selective indexing** for better performance

## DCMvn Development Standards

Our team follows these standards across all projects:

- **Modern Cursor Rules**: Use `.cursor/rules/` directory structure
- **DCMvn Framework**: Consistent imports and patterns
- **Documentation**: Inline documentation for all functions
- **Version Control**: Atomic commits with clear messages
- **Testing**: Unit tests for critical BIM operations

## 📚 Learning Resources

### Official Documentation

- [Cursor AI Documentation](https://docs.cursor.com/)
- [pyRevit Developer Docs](https://pyrevitlabs.notion.site/Developer-Docs-2c88f3ecccde422d9504e20b6b9e04f8)
- [Revit API Developer Guide](https://help.autodesk.com/view/RVT/2025/ENU/?guid=Revit_API_Revit_API_Developers_Guide_html)
- [Revit API Docs](https://revapidocs.com/)
- [IfcOpenShell Documentation](https://docs.ifcopenshell.org/)

### Community Resources

- [pyRevit Forums](https://discourse.pyrevitlabs.io/)
- [Revit API Forum](https://forums.autodesk.com/t5/revit-api-forum/bd-p/160)
- [Dynamo Forum](https://forum.dynamobim.com/)

## Next Steps

With your environment configured, proceed to [Your First Project](../getting-started/first-project) to start developing with Cursor AI.

---

*Configuration guide by [DCMvn CO., Ltd](https://dcmvn.com) - 98.3% digital, 100% pure*
