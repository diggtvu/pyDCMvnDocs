---
title: "Configuring Rules & Docs"
slug: "configuring-rules-docs"
description: "Essential configuration for production workflows using Cursor Rules and documentation integration"
sidebar_position: 4
---
# Configuring Rules & Docs

> 🎯 **Foundation First**: This guide assumes you've completed [Project Setup](../fundamentals/project-setup.md) and understand [Cursor&#39;s basic interface](../fundamentals/introduction-to-cursor.md). Rules configuration is an advanced topic for optimizing AI behavior.

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

> 🚀 **Getting Started**: Learn about the basic Rules and Memories interface in [Introduction to Cursor AI](../fundamentals/introduction-to-cursor.md#ai-interaction-methods)

## 📚 Official Documentation

**Essential Reading**: [https://docs.cursor.com/en/context/rules](https://docs.cursor.com/en/context/rules)

Key sections to review:

- [Basic Rules Setup](https://docs.cursor.com/en/context/rules#basic-setup)
- [Advanced Configuration](https://docs.cursor.com/en/context/rules#advanced-patterns)
- [Team Collaboration](https://docs.cursor.com/en/context/rules#team-workflows)

## 🎯 Cursor Rules System

According to the [official Cursor documentation](https://docs.cursor.com/en/context/rules), Cursor uses a **Project Rules** system with `.cursor/rules/` directory containing multiple `.mdc` files.

### Modern Project Rules Benefits

- **Better Organization**: Separate rules by domain/purpose
- **Improved Scope**: Rules can target specific file patterns with `globs`
- **Rule Types**: Always, Auto Attached, Agent Requested, or Manual
- **Version Control**: Full integration with git and team workflows
- **Nested Rules**: Organize rules in subdirectories for different project areas

> **Note**: The legacy `.cursorrules` file is still supported but the modern `.cursor/rules/` system is recommended for new projects.

## 📝 How Rules Work

Based on the [official Cursor documentation](https://docs.cursor.com/en/context/rules), rules provide system-level instructions to Agent and Inline Edit:

- **Persistent Context**: Rules provide consistent guidance across AI interactions
- **Prompt-Level Instructions**: Rule contents are included at the start of model context
- **Version Controlled**: Rules are stored as files and can be managed with git
- **Scoped Application**: Rules can target specific files, directories, or project areas

### Rule Types

| Rule Type                 | Behavior                                      | When to Use            |
| ------------------------- | --------------------------------------------- | ---------------------- |
| **Always**          | Always included in model context              | Core project standards |
| **Auto Attached**   | Included when matching files are referenced   | File-specific patterns |
| **Agent Requested** | AI decides whether to include                 | Specialized knowledge  |
| **Manual**          | Only when explicitly mentioned with @ruleName | On-demand guidance     |

## 🗂️ Rule Anatomy (.mdc Format)

Rules use MDC (Markdown with metadata) format:

```yaml
---
description: Brief description of the rule's purpose
globs: ["*.py", "*.cs"]        # File patterns (optional)
alwaysApply: true              # Boolean (optional)
---

# Rule Content
Your rule instructions in markdown format.

## Referenced Files
@template-file.py              # Include additional context
```

### Key Properties

- **`description`**: Required for Agent Requested rules, helps AI understand purpose
- **`globs`**: File patterns using standard glob syntax for auto-attachment
- **`alwaysApply`**: Set to `true` for rules that should always be active
- **Referenced Files**: Use `@filename` to include additional context files

## 🏗️ Basic BIM Rules Setup

**Essential Rules Structure**:

```
project/
├── .cursor/rules/
│   ├── bim-standards.mdc      # Always applied core standards
│   ├── revit-patterns.mdc     # Auto-attached for Revit files
│   └── documentation.mdc     # Manual rule for docs generation
```

**Example: Core Standards Rule**

```yaml
---
description: Basic BIM development standards
alwaysApply: true
---

# BIM Development Standards

## Code Quality
- Include comprehensive error handling
- Use descriptive names for BIM elements
- Add docstrings for all public functions
- Follow language-specific conventions (PEP 8 for Python)

## BIM-Specific Guidelines
- Always use transactions for Revit model modifications
- Validate element existence before processing
- Handle large datasets efficiently
- Include progress reporting for long operations
```

## 🔧 Creating Rules

### Using Cursor Interface

Create rules through Cursor's interface:

1. **New Rule Command**: Use `Ctrl+Shift+P` → "New Cursor Rule"
2. **Settings Panel**: Go to `Cursor Settings > Rules`
3. **Generate from Chat**: Use `/Generate Cursor Rules` command in chat

### Rule Best Practices

Based on the [official Cursor documentation](https://docs.cursor.com/en/context/rules):

- **Keep rules focused**: Each rule should have a specific purpose
- **Under 500 lines**: Split large rules into multiple composable rules
- **Provide examples**: Include concrete code examples in rules
- **Clear descriptions**: Write descriptions like internal documentation
- **Reference files**: Use `@filename` to include additional context

### Nested Rules

Organize rules in subdirectories for different project areas:

```
project/
├── .cursor/rules/           # Project-wide rules
├── backend/
│   └── .cursor/rules/      # Backend-specific rules
└── frontend/
    └── .cursor/rules/      # Frontend-specific rules
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

## 🎯 User Rules (Global Settings)

Configure global rules in `Cursor Settings > Rules` that apply to all projects:

```markdown
# Global Development Standards

## Communication Style
- Provide concise, actionable responses  
- Include code examples with explanations
- Focus on domain-specific solutions

## Code Quality Standards
- Always include proper error handling
- Use descriptive variable and function names
- Add inline documentation for complex operations
- Follow language-specific conventions (PEP 8 for Python, Microsoft for C#)
```

## 📋 Rule Management Tips

### FAQ from [Official Documentation](https://docs.cursor.com/en/context/rules)

**Why isn't my rule being applied?**

- Check rule type and file pattern matching
- Ensure `description` is provided for Agent Requested rules
- Verify `globs` patterns match your files

**Can rules reference other files?**

- Yes, use `@filename.ts` to include additional context
- Referenced files are included when the rule triggers

**Do rules affect all Cursor features?**

- No, rules only apply to Agent and Inline Edit features
- Tab completion and other features are not affected

---

## 🚀 Next Steps

Start with basic rules and gradually expand based on your team's needs:

1. **[Project Setup](../fundamentals/project-setup.md)** - Set up your basic rules structure
2. **[Hands-On Examples](../hands-on/pyrevit-mvvm-showcase.md)** - See advanced DCMvn-specific rules and patterns in action
3. **[Chat Mode](./chat-mode.md)** - Learn how rules integrate with conversational AI development
