---
title: "Configuring Rules & Docs"
slug: "configuring-rules-docs"
description: "Essential configuration for production workflows using Cursor Rules and documentation integration"
sidebar_position: 4
---

# Configuring Rules & Docs

Cursor Rules are the foundation of consistent, high-quality AI-assisted development. This comprehensive guide covers everything you need to know about configuring Cursor for professional BIM development workflows.

:::warning Critical Importance
Cursor Rules are **absolutely essential** before rolling out AI-assisted development to production teams. Without proper rules, AI suggestions can be inconsistent, violate coding standards, or introduce subtle bugs that are difficult to catch in code reviews.
:::

## 🎯 What are Cursor Rules?

Cursor Rules are configuration files that:
- Define coding standards and conventions
- Provide domain-specific context to AI
- Ensure consistent code quality across teams
- Integrate with project-specific patterns
- Enforce security and compliance requirements

## 📚 Official Documentation

**Essential Reading**: [https://docs.cursor.com/en/context/rules](https://docs.cursor.com/en/context/rules)

Key sections to review:
- [Basic Rules Setup](https://docs.cursor.com/en/context/rules#basic-setup)
- [Advanced Configuration](https://docs.cursor.com/en/context/rules#advanced-patterns)
- [Team Collaboration](https://docs.cursor.com/en/context/rules#team-workflows)

## 🔄 Important Change: Project Rules vs .cursorrules

:::warning Legacy System Deprecated
The `.cursorrules` file is now **deprecated**. According to the [official documentation](https://docs.cursor.com/en/context/rules), Cursor now uses a **Project Rules** system with `.cursor/rules/` directory.

**Old System**: Single `.cursorrules` file  
**New System**: Multiple `.mdc` files in `.cursor/rules/` directory
:::

### Benefits of New Project Rules System
- **Better Organization**: Separate rules by domain/purpose
- **Improved Scope**: Rules can target specific file patterns with `globs`
- **Rule Types**: Always, Auto Attached, Agent Requested, or Manual
- **Version Control**: Better integration with git and team workflows

## 🏗️ BIM Development Project Rules Template

Here's a comprehensive Project Rules setup optimized for BIM/AEC development using the modern `.cursor/rules/` system:

**Directory Structure**: `.cursor/rules/`

**Main Rule** (`.cursor/rules/bim-development.mdc`):
```mdc
---
description: BIM/AEC development standards and patterns
globs: ["*.py", "*.cs", "*.xaml", "*.yml", "*.yaml"]
alwaysApply: true
---

# BIM/AEC Development Standards
Project: [Your Project Name]
Last Updated: [Date]
Team: [Your Team Name]

## Project Context
This project develops tools for Building Information Modeling (BIM) and Architecture, Engineering, Construction (AEC) workflows using pyRevit, Revit API, and related technologies.

### Technology Stack
- **Primary Language**: Python 3.7+ (pyRevit compatibility)
- **Secondary Language**: C# (Revit API, WPF)
- **Frameworks**: pyRevit, WPF/MVVM, .NET Framework 4.8
- **APIs**: Revit API, Forge API, IFC libraries
- **Data**: Excel (openpyxl), SQLite, PostgreSQL
- **UI**: WPF/XAML, pyRevit forms

## Coding Standards

### Python Code Style
- Follow PEP 8 with pyRevit-specific adaptations
- Use snake_case for variables and functions
- Use PascalCase for classes and pyRevit tool names
- Line length: 88 characters (Black formatter compatible)
- Use type hints for function signatures
- Include comprehensive docstrings with Args, Returns, Raises

### C# Code Style
- Follow Microsoft C# conventions
- Use PascalCase for public members
- Use camelCase for private members
- Implement IDisposable for Revit API resources
- Use proper async/await patterns for long operations

### Naming Conventions
```python
# Python Examples
class RoomDataProcessor:          # PascalCase for classes
    def process_room_data(self):  # snake_case for methods
        room_count = 0            # snake_case for variables
        
# C# Examples
public class ElementProcessor     // PascalCase for classes
{
    private string elementName;   // camelCase for private fields
    public string ElementName     // PascalCase for properties
}
```

**📚 For detailed DCMvn module documentation and advanced patterns, visit:**
[https://github.com/DCMvnDigial/pyDCMvn.lib](https://github.com/DCMvnDigial/pyDCMvn.lib)

This repository contains comprehensive documentation for:
- Complete DCMvn framework API reference
- Advanced MVVM patterns and services
- Excel template library and examples
- BIM data processing utilities
- Integration patterns with Revit API
- Performance optimization guidelines

## Documentation Standards

### Code Documentation
Use comprehensive docstrings:
```python
def extract_room_data(room_element, include_geometry=False):
    """Extract comprehensive data from a Revit room element.
    
    Args:
        room_element (DB.Room): Revit room element to process
        include_geometry (bool): Whether to include geometric data
        
    Returns:
        dict: Dictionary containing room data with keys:
            - number (str): Room number
            - name (str): Room name  
            - area (float): Room area in square feet
            - level (str): Level name
            - geometry (dict, optional): Geometric properties
            
    Raises:
        ValueError: If room_element is None or invalid
        RevitAPIError: If Revit operation fails
        
    Example:
        >>> room_data = extract_room_data(room, include_geometry=True)
        >>> print(room_data['name'])
        'Conference Room A'
    """
```

### README Requirements
Include comprehensive project documentation:
```markdown
# Project Name

## Overview
Brief description of the project and its purpose.

## Requirements
- Revit 2020+
- pyRevit 5+
- Dependencies

## Installation
Step-by-step installation instructions.

## Usage
Examples of how to use the tools.

## Configuration
How to configure settings and preferences.

## Contributing
Guidelines for team contributions.
```

## Team Collaboration Rules

### Code Review Requirements
- All AI-generated code must be reviewed by senior developer
- Focus review on business logic and Revit API usage
- Verify error handling and edge cases
- Check performance implications for large models

### Version Control
- Use semantic versioning (1.0.0)
- Include clear commit messages
- Tag releases with release notes
- Maintain changelog

### Deployment Standards
- Test with multiple Revit versions
- Validate with sample models
- Document any breaking changes
- Provide migration guides

## AI Assistance Guidelines

### When to Use AI
- Boilerplate code generation
- Standard pattern implementation  
- Documentation writing
- Unit test creation
- Refactoring existing code

### When to Review Carefully
- Security-sensitive code
- Performance-critical sections
- Complex business logic
- Integration with external systems
- Error handling edge cases

### Quality Gates
- All AI-generated code must pass unit tests
- Performance benchmarks must be met
- Security scans must pass
- Code must follow established patterns

## Conclusion

These rules ensure consistent, high-quality AI-assisted development for BIM projects. Regular updates and team feedback help maintain relevance and effectiveness.

Remember: **Rules are living documents** - update them as you learn and as technologies evolve.

## 📊 Measuring Success

### Quality Metrics
- Reduced code review iterations
- Fewer bugs in AI-generated code
- Consistent coding patterns across team
- Improved code documentation quality

### Productivity Metrics
- Faster development cycles
- Reduced onboarding time for new developers
- More consistent tool architecture
- Better adherence to coding standards

### Team Satisfaction
- Developer confidence in AI suggestions
- Reduced friction in code reviews
- Better collaboration across team members
- Improved code quality perception

---

Proper Cursor Rules are the foundation of successful AI-assisted development. Next, let's see these rules in action with real-world case studies.

**Next**: [Hands-On Examples](../hands-on/pyrevit-mvvm-showcase.md) - Real-world implementations