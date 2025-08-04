---
title: "Agent Inline Editing"
slug: "inline-editing"
description: "Transform code using natural language descriptions with Cursor AI's inline editing feature"
sidebar_position: 2
---
# Inline Editing with Natural Prompts

Cursor's Inline Edit feature revolutionizes how you modify code by allowing natural language descriptions of changes. This is particularly powerful for BIM development where complex architectural patterns and domain-specific requirements can be challenging to implement.

## 🌟 What is Inline Edit?

Inline Edit allows you to:

- Select code and describe changes in plain English
- Modify complex patterns without manual refactoring
- Translate business requirements directly into code
- Maintain code quality during rapid iterations

## 🎯 How to Use Inline Edit

### Basic Usage

1. **Select code** that needs modification
2. **Press Ctrl+K** (or Cmd+K on Mac)
3. **Type your instruction** in natural language
4. **Press Enter** to apply changes

### Advanced Usage

- **Multi-line selections** for complex refactoring
- **Partial selections** to modify specific parts
- **Multiple iterations** to refine changes
- **Undo/redo** support for experimentation

## 🏗️ BIM Development Examples

### Example 1: Adding Error Handling to Revit API Code

**Original Code:**

```python
def get_wall_areas():
    doc = __revit__.ActiveUIDocument.Document
    collector = FilteredElementCollector(doc)
    walls = collector.OfCategory(BuiltInCategory.OST_Walls)
  
    areas = []
    for wall in walls:
        param = wall.get_Parameter(BuiltInParameter.HOST_AREA_COMPUTED)
        areas.append(param.AsDouble())
  
    return areas
```

**Inline Edit Instruction:**

> "Add proper error handling for null parameters and empty collections, include logging"

**Result:**

```python
def get_wall_areas():
    """Get areas of all walls with proper error handling."""
    try:
        doc = __revit__.ActiveUIDocument.Document
        if not doc:
            output.print("No active document found")
            return []
          
        collector = FilteredElementCollector(doc)
        walls = collector.OfCategory(BuiltInCategory.OST_Walls).WhereElementIsNotElementType()
      
        if not walls:
            output.print("No walls found in document")
            return []
      
        areas = []
        for wall in walls:
            try:
                param = wall.get_Parameter(BuiltInParameter.HOST_AREA_COMPUTED)
                if param and param.HasValue:
                    areas.append(param.AsDouble())
                else:
                    output.print(f"Wall {wall.Id} has no area parameter")
            except Exception as e:
                output.print(f"Error processing wall {wall.Id}: {e}")
                continue
      
        output.print(f"Successfully processed {len(areas)} walls")
        return areas
      
    except Exception as e:
        output.print(f"Error in get_wall_areas: {e}")
        return []
```

### Example 2: Converting Simple Function to MVVM Pattern

**Original Code:**

```python
def show_room_list():
    rooms = get_rooms_from_revit()
    for room in rooms:
        print(f"{room.Number}: {room.Name}")
```

**Inline Edit Instruction:**

> "Convert this to MVVM pattern with WPF window, observable collection, and proper data binding"

**Result:**

```python
class RoomListViewModel(INotifyPropertyChanged):
    def __init__(self):
        self._rooms = ObservableCollection[RoomModel]()
        self._selected_room = None
        self.load_rooms()
  
    @property
    def rooms(self):
        return self._rooms
  
    @rooms.setter
    def rooms(self, value):
        self._rooms = value
        self.on_property_changed("rooms")
  
    @property
    def selected_room(self):
        return self._selected_room
  
    @selected_room.setter
    def selected_room(self, value):
        self._selected_room = value
        self.on_property_changed("selected_room")
  
    def load_rooms(self):
        try:
            revit_rooms = get_rooms_from_revit()
            self.rooms.Clear()
            for room in revit_rooms:
                room_model = RoomModel(room.Number, room.Name, room.Area)
                self.rooms.Add(room_model)
        except Exception as e:
            MessageBox.Show(f"Error loading rooms: {e}")
  
    def on_property_changed(self, property_name):
        if self.PropertyChanged:
            self.PropertyChanged(self, PropertyChangedEventArgs(property_name))

def show_room_list():
    window = RoomListWindow()
    window.DataContext = RoomListViewModel()
    window.ShowDialog()
```

### Example 3: Adding MEP System Integration

**Original Code:**

```python
def get_mechanical_equipment():
    doc = __revit__.ActiveUIDocument.Document
    collector = FilteredElementCollector(doc)
    equipment = collector.OfCategory(BuiltInCategory.OST_MechanicalEquipment)
    return list(equipment)
```

**Inline Edit Instruction:**

> "Extend this to include connected ducts, calculate airflow, and group by system type"

**Result:**

```python
def get_mechanical_equipment_with_systems():
    """Get mechanical equipment with connected MEP systems and airflow data."""
    doc = __revit__.ActiveUIDocument.Document
    collector = FilteredElementCollector(doc)
    equipment = collector.OfCategory(BuiltInCategory.OST_MechanicalEquipment).WhereElementIsNotElementType()
  
    equipment_data = []
  
    for equip in equipment:
        try:
            equip_info = {
                'element': equip,
                'name': equip.Name,
                'type': equip.get_Parameter(BuiltInParameter.ELEM_TYPE_PARAM).AsValueString(),
                'connected_ducts': [],
                'airflow': 0,
                'system_type': None
            }
          
            # Get connected ducts
            connectors = equip.MEPModel.ConnectorManager.Connectors
            for connector in connectors:
                if connector.Domain == Domain.DomainHvac:
                    for ref_connector in connector.AllRefs:
                        if ref_connector.Owner.Category.Id.IntegerValue == int(BuiltInCategory.OST_DuctCurves):
                            equip_info['connected_ducts'].append(ref_connector.Owner)
          
            # Calculate total airflow
            flow_param = equip.get_Parameter(BuiltInParameter.RBS_DUCT_FLOW_PARAM)
            if flow_param and flow_param.HasValue:
                equip_info['airflow'] = flow_param.AsDouble()
          
            # Get system type
            system_param = equip.get_Parameter(BuiltInParameter.RBS_SYSTEM_NAME_PARAM)
            if system_param and system_param.HasValue:
                equip_info['system_type'] = system_param.AsString()
          
            equipment_data.append(equip_info)
          
        except Exception as e:
            output.print(f"Error processing equipment {equip.Id}: {e}")
            continue
  
    # Group by system type
    grouped_equipment = {}
    for equip in equipment_data:
        system_type = equip['system_type'] or 'Unassigned'
        if system_type not in grouped_equipment:
            grouped_equipment[system_type] = []
        grouped_equipment[system_type].append(equip)
  
    return grouped_equipment
```

## 🎨 Advanced Inline Edit Techniques

### 1. **Iterative Refinement**

Use multiple inline edits to progressively improve code:

```python
# Step 1: Basic function
def process_elements():
    pass

# Inline Edit 1: "Add basic element collection"
# Inline Edit 2: "Add filtering by category"
# Inline Edit 3: "Add parameter extraction"
# Inline Edit 4: "Add error handling and logging"
```

### 2. **Context-Aware Modifications**

Cursor understands your project context:

```python
# Inline Edit: "Make this compatible with Revit 2019-2024"
# Cursor knows to use version-appropriate API calls

# Inline Edit: "Add support for linked models"
# Cursor understands Revit linking patterns
```

### 3. **Domain-Specific Transformations**

```python
# Inline Edit: "Convert this to use Revit units consistently"
# Inline Edit: "Add BIM 360 compatibility"
# Inline Edit: "Make this work with both metric and imperial units"
```

## 🔧 Best Practices for Inline Edit

### 1. **Be Specific in Instructions**

- ❌ "Make this better"
- ✅ "Add input validation and user-friendly error messages"

### 2. **Use Domain Language**

- ❌ "Add database stuff"
- ✅ "Add parameter synchronization with Revit shared parameters"

### 3. **Specify Constraints**

- ❌ "Add error handling"
- ✅ "Add error handling that shows user-friendly dialogs and logs to pyRevit output"

### 4. **Consider Context**

```python
# Instead of: "Add caching"
# Use: "Add caching for element collections to improve performance in large models"
```

## 🚀 Terminal Integration

Inline Edit also works in the terminal for command-line operations:

### PowerShell/Command Prompt

```bash
# Select command and use Inline Edit:
# "Make this command work for both Debug and Release builds"

# Original:
dotnet build MyRevitAddin.csproj

# After Inline Edit:
dotnet build MyRevitAddin.csproj -c Debug && dotnet build MyRevitAddin.csproj -c Release
```

### Python Scripts

```python
# Inline Edit: "Add command line argument parsing for input file path"

# Original:
input_file = "default.xlsx"

# Result:
import argparse

parser = argparse.ArgumentParser(description='Process BIM data from Excel')
parser.add_argument('--input', '-i', required=True, help='Input Excel file path')
parser.add_argument('--output', '-o', default='output.xlsx', help='Output Excel file path')
args = parser.parse_args()

input_file = args.input
output_file = args.output
```

## 🎯 Common BIM Development Use Cases

### 1. **API Version Compatibility**

```python
# Inline Edit: "Make this work with both Revit 2022 and 2024 API changes"
```

### 2. **Performance Optimization**

```python
# Inline Edit: "Optimize this for large models with 10,000+ elements"
```

### 3. **User Interface Enhancement**

```python
# Inline Edit: "Add progress bar and cancel button to this long-running operation"
```

### 4. **Data Validation**

```python
# Inline Edit: "Add comprehensive validation for MEP connector data"
```

### 5. **Internationalization**

```python
# Inline Edit: "Make all user messages localizable and add support for metric/imperial units"
```

## 🔍 Troubleshooting Inline Edit

### Common Issues

#### 1. **Ambiguous Instructions**

- **Problem**: "Add validation"
- **Solution**: "Add validation for required parameters and numeric ranges"

#### 2. **Context Missing**

- **Problem**: Changes don't match project patterns
- **Solution**: Ensure Project Rules in .cursor/rules/ include your coding standards

#### 3. **Large Selections**

- **Problem**: Inline Edit modifies too much code
- **Solution**: Select smaller, focused code blocks

#### 4. **Complex Transformations**

- **Problem**: Multiple requirements in one instruction
- **Solution**: Break into multiple sequential inline edits

### Best Results Tips

1. **Select Relevant Context**: Include enough surrounding code for context
2. **Use Precise Language**: Be specific about BIM/Revit terminology
3. **Verify Results**: Always review generated code before committing
4. **Iterate**: Use multiple small edits rather than one large transformation

## 🎓 Practice Exercises

### Exercise 1: Error Handling

Take any simple Revit API function and use Inline Edit to add comprehensive error handling.

### Exercise 2: MVVM Conversion

Convert a procedural pyRevit script to MVVM pattern using Inline Edit.

### Exercise 3: Performance Optimization

Use Inline Edit to optimize element collection code for large models.

### Exercise 4: MEP Integration

Add MEP system awareness to a basic element processing function.

---

Ready to combine Inline Edit with other Cursor features? Next, let's explore how Tab completion and Agent Mode work together for powerful BIM development workflows.

**Next**: [Agent Mode Deep Dive](../hands-on/agent-coding-demo.md) - Autonomous AI development sessions
