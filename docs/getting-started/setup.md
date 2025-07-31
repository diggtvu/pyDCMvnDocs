---
sidebar_position: 2
---

# Project Setup

Configure your BIM development environment for optimal Cursor AI integration.

## Project Structure Recommendations

For optimal Cursor performance with BIM projects, organize your workspace as follows:

```
RevitPlugin/
├── src/
│   ├── Commands/           # External commands
│   ├── Utils/             # Utility classes
│   ├── UI/                # User interface
│   └── Models/            # Data models
├── Resources/             # Icons, images
├── Installer/             # Installation files
├── Tests/                 # Unit tests
└── Documentation/         # API documentation

IFCAnalysis/
├── analyzers/             # Analysis modules
├── extractors/           # Data extraction
├── validators/           # Quality control
├── reports/              # Report generation
├── data/                 # Sample IFC files
└── tests/                # Test cases
```

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

1. **Create .csproj file** with Revit API references:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <TargetFramework>net48</TargetFramework>
    <UseWPF>true</UseWPF>
    <UseWindowsForms>true</UseWindowsForms>
  </PropertyGroup>
  
  <ItemGroup>
    <Reference Include="RevitAPI">
      <HintPath>C:\Program Files\Autodesk\Revit 2024\RevitAPI.dll</HintPath>
      <Private>False</Private>
    </Reference>
    <Reference Include="RevitAPIUI">
      <HintPath>C:\Program Files\Autodesk\Revit 2024\RevitAPIUI.dll</HintPath>
      <Private>False</Private>
    </Reference>
  </ItemGroup>
</Project>
```

2. **Create .addin file** for plugin registration

### Python pyRevit Projects

1. **Set up virtual environment**:
```bash
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
```

2. **Create requirements.txt**:
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

## DCMvn Development Standards

Our team follows these standards across all projects:

- **Consistent Naming**: Use DCMvn coding conventions
- **Documentation**: Inline documentation for all functions
- **Version Control**: Atomic commits with clear messages
- **Testing**: Unit tests for critical BIM operations

## Next Steps

With your environment configured, proceed to [Your First Project](./first-project) to start developing with Cursor AI.

---

*Configuration guide by [DCMvn CO., Ltd](https://dcmvn.com) - 98.3% digital, 100% pure*