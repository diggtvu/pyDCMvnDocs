# Getting Started with pyDCMvn

Welcome to pyDCMvn! This guide will help you get started with using our Python DICOM library.

## Prerequisites

- Python 3.7 or higher
- pip package manager

## Installation

### From PyPI (Recommended)

```bash
pip install pyDCMvn
```

### From Source

```bash
git clone https://github.com/diggtvu/pyDCMvnDocs.git
cd pyDCMvn
pip install -e .
```

## Basic Usage

### Loading DICOM Files

```python
import pyDCMvn

# Load a single DICOM file
dataset = pyDCMvn.load_dicom('path/to/your/file.dcm')

# Load multiple DICOM files from a directory
datasets = pyDCMvn.load_dicom_directory('path/to/dicom/folder')
```

### Accessing DICOM Data

```python
# Access patient information
patient_name = dataset.PatientName
patient_id = dataset.PatientID
study_date = dataset.StudyDate

# Access image data
image_array = dataset.pixel_array
image_shape = image_array.shape

print(f"Patient: {patient_name}")
print(f"Image dimensions: {image_shape}")
```

### Processing Images

```python
# Apply basic image processing
processed_image = pyDCMvn.enhance_contrast(image_array)
filtered_image = pyDCMvn.apply_filter(image_array, filter_type='gaussian')

# Normalize image values
normalized = pyDCMvn.normalize_image(image_array)
```

### Saving DICOM Files

```python
# Modify dataset
dataset.PatientName = "New Patient Name"
dataset.pixel_array = processed_image

# Save the modified dataset
pyDCMvn.save_dicom(dataset, 'output/modified_file.dcm')
```

## Vietnamese Healthcare Integration

pyDCMvn includes special features for Vietnamese healthcare standards:

```python
# Validate Vietnamese patient ID format
is_valid = pyDCMvn.validate_vn_patient_id(patient_id)

# Format names according to Vietnamese conventions
formatted_name = pyDCMvn.format_vn_patient_name(patient_name)

# Convert encoding for Vietnamese text
encoded_text = pyDCMvn.encode_vietnamese_text(text)
```

## Error Handling

```python
try:
    dataset = pyDCMvn.load_dicom('file.dcm')
except pyDCMvn.DicomReadError as e:
    print(f"Error reading DICOM file: {e}")
except pyDCMvn.InvalidFormatError as e:
    print(f"Invalid DICOM format: {e}")
```

## Next Steps

- Read the [API Reference](api-reference.html) for detailed function documentation
- Check out [Examples](examples.html) for more complex use cases
- Learn about [Contributing](contributing.html) to the project

## Support

If you encounter any issues or have questions:

- Check our [GitHub Issues](https://github.com/diggtvu/pyDCMvnDocs/issues)
- Read the [FAQ](faq.html)
- Contact us at support@pydcmvn.com
