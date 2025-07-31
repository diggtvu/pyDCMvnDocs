---
sidebar_position: 1
---

# Installation & Setup

Get started with Cursor AI for BIM development in just a few steps.

## Prerequisites

Before you begin, ensure you have:

- **Cursor IDE** - Download from [cursor.com](https://cursor.com)
- **Development Environment**: Visual Studio for C# Revit plugins or Python for pyRevit/IFC  
- **BIM Software**: Autodesk Revit 2020+ (for Revit API development)
- **Basic Knowledge**: Familiarity with C#, Python, or your preferred BIM development language

## Install Cursor

1. **Download Cursor**: Visit [cursor.com](https://cursor.com) and download the installer
2. **Install**: Run the installer and follow the setup wizard
3. **Launch**: Open Cursor - AI features work immediately out of the box

## Configure for BIM Development

### Sync Settings from VS Code

If you're migrating from VS Code, Cursor can automatically sync your settings:

1. **Import Settings**: `Ctrl+Shift+P` → "Settings Sync: Configure"
2. **Sign in** with your GitHub/Microsoft account to sync extensions and settings
3. **Select what to sync**: Extensions, Settings, Keybindings, Snippets

### Enable BIM-Specific Settings

Open Cursor settings (`Ctrl+,`) and configure:

```json
{
    "cursor.cpp.disabledLanguages": [],
    "cursor.tab.enablePartialAccepts": true,
    "cursor.tab.triggerInComments": true,
    "cursor.imports.typescript.enabled": false,
    "cursor.imports.python.enabled": true,
    "cursorpyright.analysis.extraPaths": [
        "~/AppData/Roaming/pyRevit-Master/pyrevitlib",
        "~/AppData/Roaming/pyRevit-Master/site-packages"
    ]
}
```

### Install Cursor-Specific Extensions

**For C# Revit Development**:
- **C# Dev Kit** (by Microsoft for Cursor) - Official C# support optimized for Cursor
- **C#** (by Muhammad Sameer) - Enhanced C# language support  
- **XML Tools** - For .addin and manifest files

**For Python/pyRevit Development**:
- **Python** (by Microsoft for Cursor) - Official Python support with Cursor optimizations
- **Pylance** (by Microsoft for Cursor) - Advanced Python language server
- **Python Debugger** - Enhanced debugging capabilities

> **Important**: Use Cursor-specific versions of extensions when available. Standard VS Code extensions may not work properly or lack Cursor's AI integration features.

### Configure Python Stubs for Better IntelliSense

For enhanced Python development with Revit API and pyRevit, configure additional stub paths:

```json
{
    "cursorpyright.analysis.extraPaths": [
        "F:/path/to/pyRevitAutocomplete/common",
        "F:/path/to/pyRevitAutocomplete/2025",
        "F:/path/to/pyGTV/pyGTV.extension/lib",
        "F:/path/to/pyDCMvn/pyDCMvn.lib",
        "~/AppData/Roaming/pyRevit-Master/pyrevitlib",
        "~/AppData/Roaming/pyRevit-Master/site-packages",
        "~/AppData/Roaming/pyRevit/Extensions/pyDCMvn.lib"
    ]
}
```

> **Note**: Adjust paths according to your local development environment setup.

## Verify Installation

Test your setup with this simple prompt:

**Cursor Prompt**: *"Create a basic Revit external command structure with proper namespaces and error handling"*

If Cursor suggests appropriate Revit API imports and command structure with proper IntelliSense, you're ready to proceed!

## Next Steps

Continue with [Project Setup](./setup) to configure your first BIM development project with Cursor AI.

---

![DCMvn Logo](https://dcmvn.com/assets/logo.png)

*Setup guide by [DCMvn CO., Ltd](https://dcmvn.com) - Digital Construction and Management*