---
sidebar_position: 1
---

# pyRevit Development with Cursor AI



Real-world pyRevit development exercises with Cursor AI - each group works on the same minimal Revit Python tool with coding issues or missing documentation.

## Task A: Tab-Autocomplete Scaffolding

### Starting Code - Incomplete pyRevit Tool
```python
# Incomplete room data exporter - missing key functions
from pyrevit import forms, revit, DB

__title__ = "Room Data Exporter"
__author__ = "Workshop Participant"

# TODO: Add function to collect room data
# TODO: Add function to export to Excel
# TODO: Add error handling

if __name__ == '__main__':
    # TODO: Implement main execution
    pass
```

### Your Mission
Use **Tab completion** to scaffold these missing functions:
1. Type `def collect_room_data` + **Tab** - let Cursor generate the complete function
2. Type `def export_to_excel` + **Tab** - let Cursor create Excel export logic
3. Type `def main` + **Tab** - let Cursor build the main execution flow

### Expected Result
Cursor should generate complete functions with:
- Proper pyRevit imports and patterns
- Revit API FilteredElementCollector usage
- Error handling with pyRevit forms
- Excel export functionality

:::tip Success Criteria
- All functions are properly scaffolded
- Code follows pyRevit conventions
- No syntax errors remain
:::

## Task B: Natural Language Refactoring

### Starting Code - Needs Improvement
```python
# Poor code that needs refactoring
def process_walls():
    walls = DB.FilteredElementCollector(revit.doc).OfCategory(DB.BuiltInCategory.OST_Walls).ToElements()
    for wall in walls:
        print(wall.Name)
        print(wall.get_Parameter(DB.BuiltInParameter.HOST_AREA_COMPUTED).AsDouble())
```

### Your Mission - Use Ctrl+K Natural Language Edits
Try these refactoring prompts:

1. **"Add proper error handling and parameter validation"**
2. **"Convert to use pyRevit forms for output instead of print"**
3. **"Add docstring and improve variable naming"**
4. **"Filter walls by type and add progress indication"**

### Expected Improvements
Cursor should transform the code to include:
- Try-catch error handling
- pyRevit forms for user interaction
- Meaningful variable names
- Proper documentation
- Parameter validation

:::tip Practice Prompts
- *"Make this code more robust for production use"*
- *"Add user selection for wall types"*
- *"Include area calculations in square meters"*
:::

## Task C: Modern Rules System Implementation

### Create Modern .cursor/rules/ Directory
Modern Cursor uses a structured rules directory instead of a single file:

```
.cursor/
└── rules/
    ├── dcmvn-framework.mdc      # Main framework rules
    ├── pyrevit-templates.py     # Code templates  
    └── project-standards.mdc   # Project-specific standards
```

### Example: dcmvn-framework.mdc
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

## Code Standards
- All functions must have docstrings
- Use `alert()` instead of print statements
- Always validate parameters before use
- Include error handling for all Revit API calls

## Naming Conventions  
- Use snake_case for function names
- Use descriptive variable names (selected_walls not walls)
- Prefix private functions with underscore
```

### Example: pyrevit-templates.py
```python
# coding: utf-8
import clr
from DCMvn.core import DB, HOST_APP, get_output
from DCMvn.core.framework import System, Debug
from DCMvn.forms import alert

clr.AddReference("System.Core")
clr.ImportExtensions(System.Linq)

doc = HOST_APP.doc
output = get_output()

def validate_document_requirements():
    """Template for document validation"""
    # Add validation logic here
    return True

# Main execution template
if validate_document_requirements():
    try:
        # Your tool logic here
        pass
    except Exception as e:
        alert("Error: {}".format(str(e)), "Tool Error")
        Debug.WriteLine("Error: {}".format(str(e)))
```

### Your Mission
1. Create the `.cursor/rules/` directory structure
2. Add the framework rules and templates above
3. Ask Cursor to "refactor according to DCMvn framework rules"
4. Observe how Cursor applies the structured rules automatically

:::tip Modern Rule Testing
Try asking Cursor to: *"Create a new room analyzer tool following DCMvn framework patterns"*
:::

## Task D: Agent Chat Documentation

### Your Mission - Use Ctrl+I Agent Chat
Take any completed function and use the Agent chat to:

1. **Ask:** *"Add comprehensive XML documentation comments"*
2. **Ask:** *"Create unit tests for this function"*  
3. **Ask:** *"Add input validation and error handling"*
4. **Ask:** *"Optimize this code for performance"*

### Expected Results
The Agent should provide:
- Complete XML documentation
- Basic unit test structure
- Robust input validation
- Performance optimization suggestions

:::tip Advanced Agent Prompts
- *"Explain potential issues with this Revit API usage"*
- *"Suggest alternative approaches for better performance"*
- *"Add logging and debugging capabilities"*
:::
- Generates room filtering logic
- Includes pandas integration for data processing
- Handles unplaced rooms automatically

**DCMvn Application**: Used for space programming analysis in healthcare and mixed-use projects like Zentralinstitut für Seelische Gesundheit (20,000 m²).

## MEP Systems Analysis

### Efficient Cursor Prompt

**Prompt**: *"Create a tool that analyzes HVAC systems in a Revit model, calculates airflow rates, and generates a compliance report for building codes."*

**Generated Capabilities**:
- Intelligent MEP namespace suggestions
- Duct and pipe system filtering
- Flow calculation algorithms
- Automated report generation

**DCMvn Expertise**: Leverages our multidisciplinary MEP coordination experience across 95,000+ m² of projects.

## Family Parameter Automation

### Efficient Cursor Prompt

**Prompt**: *"Develop a Revit plugin that standardizes family parameters across all families in a project, ensuring consistent naming conventions and data types according to company standards."*

**Features Generated**:
- Family loading and parameter scanning
- Standardization rule application
- Batch parameter modification
- Progress reporting and logging

## Custom Ribbon Integration

### Efficient Cursor Prompt

**Prompt**: *"Create a Revit ribbon panel with multiple commands for BIM coordination tasks including clash detection preparation, model validation, and export utilities."*

**Cursor Suggestions**:
- Ribbon panel creation patterns
- Icon and button management
- Command organization
- User interface best practices

## Real-World Project Applications

### Konzerthaus München (74,000 m²)

**Acoustic Analysis Plugin**
- **Prompt**: *"Create a BIM-integrated acoustic analysis tool that evaluates room geometries, material properties, and sight lines for optimal performance hall design."*
- **Application**: Concert hall acoustic optimization
- **Result**: Automated geometry analysis with material property integration

### Überseequartier Residential (419,000 m²)

**Multi-Building Coordination**  
- **Prompt**: *"Develop a tool for multi-building projects that synchronizes element naming, coordinates clash detection across buildings, and manages shared parameters."*
- **Scale**: 419,000 m² residential complex
- **Benefit**: Consistent standards across multiple building phases

## Advanced Plugin Patterns

### Model Validation Suite

**Prompt**: *"Create a comprehensive model validation plugin that checks geometry quality, parameter completeness, naming conventions, and export readiness for different file formats."*

**Generated Components**:
- Geometry validation algorithms
- Parameter completeness checking
- Naming convention enforcement  
- Multi-format export preparation

### Performance Monitoring

**Prompt**: *"Build a plugin that monitors Revit model performance, tracks file size growth, element count changes, and provides optimization recommendations."*

**Features**:
- Real-time performance metrics
- Historical data tracking
- Optimization suggestions
- Resource usage monitoring

## Cursor AI Best Practices

### Prompt Engineering Tips

1. **Be Specific About Context**
   - ✅ "Create a Revit API tool for MEP clash detection"
   - ❌ "Make a clash detection tool"

2. **Include Technical Requirements**
   - ✅ "Export to Excel using OpenXML with custom formatting"
   - ❌ "Export the data"

3. **Specify Error Handling**
   - ✅ "Include try-catch blocks for transaction failures"
   - ❌ "Make it work"

### DCMvn Development Standards

Our team follows these practices across all projects:

- **Consistent Naming**: Use DCMvn coding standards in prompts
- **Documentation**: Request inline documentation for all generated code
- **Version Control**: Include git integration in workflow prompts
- **Testing**: Always request unit tests for critical functions

## Performance Optimization

### Large Model Handling

**Prompt**: *"Optimize the wall analyzer for large models with 10,000+ walls. Implement progress reporting, memory-efficient processing, and cancellation support."*

**Cursor Optimizations**:
- Efficient element filtering
- Batch processing strategies
- Memory management patterns
- User feedback mechanisms

## Common Issues & Solutions

### Transaction Management

**Issue**: "Transaction not started" errors
**Solution Prompt**: *"Fix transaction handling in this Revit plugin to ensure proper start/commit patterns with error recovery"*

### Parameter Access

**Issue**: Null reference exceptions
**Solution Prompt**: *"Add safe parameter access patterns with null checking and type validation for Revit elements"*

### Performance Bottlenecks

**Issue**: Slow processing on large models
**Solution Prompt**: *"Implement efficient element collection and processing for large Revit models with progress indication"*

## Next Steps

Explore more advanced BIM development:

- **IFC Processing** - Industry Foundation Classes workflows
- **Data Visualization** - BIM analytics and reporting
- **Project Case Studies** - Complete project implementations

---

*Plugin examples by [DCMvn CO., Ltd](https://dcmvn.com) - 98.3% digital, 100% pure*