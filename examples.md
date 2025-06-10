# Examples

This page contains practical examples of using pyDCMvn for various medical imaging tasks.

## Basic DICOM Operations

### Reading and Displaying DICOM Information

```python
import pyDCMvn

# Load a DICOM file
dataset = pyDCMvn.load_dicom('chest_xray.dcm')

# Display basic information
info = pyDCMvn.get_dicom_info(dataset)
print(f"Patient Name: {info['patient_name']}")
print(f"Study Date: {info['study_date']}")
print(f"Modality: {info['modality']}")
print(f"Image Size: {info['image_size']}")
```

### Batch Processing Multiple Files

```python
import os
import pyDCMvn

# Process all DICOM files in a directory
input_dir = 'input_dicoms'
output_dir = 'processed_dicoms'

for filename in os.listdir(input_dir):
    if filename.endswith('.dcm'):
        # Load DICOM file
        filepath = os.path.join(input_dir, filename)
        dataset = pyDCMvn.load_dicom(filepath)
        
        # Process the image
        image = dataset.pixel_array
        enhanced = pyDCMvn.enhance_contrast(image)
        
        # Update dataset with processed image
        dataset.pixel_array = enhanced
        
        # Save processed file
        output_path = os.path.join(output_dir, f"processed_{filename}")
        pyDCMvn.save_dicom(dataset, output_path)
        print(f"Processed: {filename}")
```

## Image Processing Examples

### Contrast Enhancement

```python
import pyDCMvn
import matplotlib.pyplot as plt

# Load DICOM file
dataset = pyDCMvn.load_dicom('low_contrast_image.dcm')
original_image = dataset.pixel_array

# Apply different enhancement methods
clahe_enhanced = pyDCMvn.enhance_contrast(original_image, method='clahe')
histogram_enhanced = pyDCMvn.enhance_contrast(original_image, method='histogram')

# Display results
fig, axes = plt.subplots(1, 3, figsize=(15, 5))
axes[0].imshow(original_image, cmap='gray')
axes[0].set_title('Original')
axes[1].imshow(clahe_enhanced, cmap='gray')
axes[1].set_title('CLAHE Enhanced')
axes[2].imshow(histogram_enhanced, cmap='gray')
axes[2].set_title('Histogram Enhanced')
plt.show()
```

### Image Filtering

```python
import pyDCMvn

# Load noisy image
dataset = pyDCMvn.load_dicom('noisy_image.dcm')
noisy_image = dataset.pixel_array

# Apply different filters
gaussian_filtered = pyDCMvn.apply_filter(noisy_image, 'gaussian', sigma=1.0)
median_filtered = pyDCMvn.apply_filter(noisy_image, 'median', kernel_size=3)
bilateral_filtered = pyDCMvn.apply_filter(noisy_image, 'bilateral', 
                                         sigma_color=75, sigma_space=75)

# Save filtered results
dataset.pixel_array = gaussian_filtered
pyDCMvn.save_dicom(dataset, 'gaussian_filtered.dcm')
```

### Image Normalization

```python
import pyDCMvn
import numpy as np

# Load image with varying intensity ranges
dataset = pyDCMvn.load_dicom('variable_intensity.dcm')
image = dataset.pixel_array

print(f"Original range: {image.min()} - {image.max()}")

# Different normalization methods
minmax_normalized = pyDCMvn.normalize_image(image, method='minmax')
zscore_normalized = pyDCMvn.normalize_image(image, method='zscore')
percentile_normalized = pyDCMvn.normalize_image(image, method='percentile')

print(f"Min-Max normalized: {minmax_normalized.min()} - {minmax_normalized.max()}")
print(f"Z-score normalized: {zscore_normalized.min()} - {zscore_normalized.max()}")
```

## Vietnamese Healthcare Examples

### Patient ID Validation

```python
import pyDCMvn

# Vietnamese patient ID examples
patient_ids = [
    "VN123456789",
    "HN001234567",
    "INVALID_ID",
    "VN987654321"
]

for pid in patient_ids:
    is_valid = pyDCMvn.validate_vn_patient_id(pid)
    print(f"Patient ID {pid}: {'Valid' if is_valid else 'Invalid'}")
```

### Vietnamese Name Formatting

```python
import pyDCMvn

# Format Vietnamese patient names
names = [
    "nguyen van an",
    "TRAN THI BINH",
    "Le Minh Duc"
]

for name in names:
    formatted = pyDCMvn.format_vn_patient_name(name)
    print(f"Original: {name}")
    print(f"Formatted: {formatted}")
    print("---")
```

### Vietnamese Text Encoding

```python
import pyDCMvn

# Handle Vietnamese characters in DICOM
vietnamese_text = "Bệnh viện Đại học Y Hà Nội"
encoded_text = pyDCMvn.encode_vietnamese_text(vietnamese_text)

# Update DICOM dataset with Vietnamese text
dataset = pyDCMvn.load_dicom('example.dcm')
dataset.InstitutionName = encoded_text
pyDCMvn.save_dicom(dataset, 'vietnamese_encoded.dcm')
```

## Advanced Examples

### DICOM Anonymization

```python
import pyDCMvn

# Load DICOM file with patient information
dataset = pyDCMvn.load_dicom('patient_data.dcm')

# Anonymize with default fields
anonymized = pyDCMvn.anonymize_dicom(dataset)

# Anonymize with custom fields
custom_fields = ['PatientName', 'PatientID', 'PatientBirthDate']
custom_anonymized = pyDCMvn.anonymize_dicom(dataset, fields=custom_fields)

# Save anonymized version
pyDCMvn.save_dicom(anonymized, 'anonymized_patient.dcm')
```

### Multi-format Export

```python
import pyDCMvn
from PIL import Image
import cv2

# Load DICOM
dataset = pyDCMvn.load_dicom('medical_image.dcm')

# Convert to different formats
numpy_array = pyDCMvn.convert_pixel_data(dataset, 'numpy')
pil_image = pyDCMvn.convert_pixel_data(dataset, 'pil')
opencv_image = pyDCMvn.convert_pixel_data(dataset, 'opencv')

# Save in different formats
pil_image.save('output.png')
cv2.imwrite('output_cv.jpg', opencv_image)
```

### Series Processing

```python
import pyDCMvn
import os

# Process a DICOM series (multiple slices)
series_dir = 'ct_series'
datasets = pyDCMvn.load_dicom_directory(series_dir)

# Sort by slice location
datasets.sort(key=lambda x: float(x.SliceLocation))

# Process each slice
processed_series = []
for i, dataset in enumerate(datasets):
    image = dataset.pixel_array
    
    # Apply consistent processing
    enhanced = pyDCMvn.enhance_contrast(image)
    filtered = pyDCMvn.apply_filter(enhanced, 'gaussian')
    
    # Update dataset
    dataset.pixel_array = filtered
    processed_series.append(dataset)
    
    print(f"Processed slice {i+1}/{len(datasets)}")

# Save processed series
output_dir = 'processed_series'
os.makedirs(output_dir, exist_ok=True)

for i, dataset in enumerate(processed_series):
    filename = f"slice_{i:03d}.dcm"
    pyDCMvn.save_dicom(dataset, os.path.join(output_dir, filename))
```

## Error Handling Examples

### Robust File Processing

```python
import pyDCMvn
import os

def process_dicom_safely(filepath):
    try:
        # Attempt to load DICOM
        dataset = pyDCMvn.load_dicom(filepath)
        
        # Validate essential fields
        if not hasattr(dataset, 'pixel_array'):
            raise pyDCMvn.InvalidFormatError("No pixel data found")
        
        # Process image
        image = dataset.pixel_array
        processed = pyDCMvn.enhance_contrast(image)
        
        # Save result
        output_path = f"processed_{os.path.basename(filepath)}"
        dataset.pixel_array = processed
        pyDCMvn.save_dicom(dataset, output_path)
        
        return True, "Success"
        
    except pyDCMvn.DicomReadError as e:
        return False, f"Read error: {e}"
    except pyDCMvn.InvalidFormatError as e:
        return False, f"Format error: {e}"
    except pyDCMvn.ProcessingError as e:
        return False, f"Processing error: {e}"
    except Exception as e:
        return False, f"Unexpected error: {e}"

# Process multiple files with error handling
files = ['file1.dcm', 'file2.dcm', 'corrupted.dcm']
for filepath in files:
    success, message = process_dicom_safely(filepath)
    print(f"{filepath}: {message}")
```
