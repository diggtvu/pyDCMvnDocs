# pyDCMvn

Welcome to pyDCMvn - A Python library for DICOM data processing in Vietnam.

## Overview

pyDCMvn is a comprehensive Python library designed to handle DICOM (Digital Imaging and Communications in Medicine) files with specific focus on Vietnamese healthcare standards and requirements.

## Features

- 🏥 DICOM file reading and writing
- 🇻🇳 Vietnamese healthcare standard compliance
- 📊 Medical image processing capabilities
- 🔧 Easy-to-use API
- 📚 Comprehensive documentation

## Quick Start

```python
import pyDCMvn

# Load a DICOM file
dcm = pyDCMvn.load_dicom("path/to/file.dcm")

# Process the data
processed = pyDCMvn.process(dcm)

# Save the result
pyDCMvn.save_dicom(processed, "output.dcm")
```

## Installation

```bash
pip install pyDCMvn
```

## Documentation

Visit our [documentation site](https://diggtvu.github.io/pyDCMvnDocs) for detailed guides and API reference.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Author**: Your Name
- **Email**: your.email@example.com
- **GitHub**: [pyDCMvn](https://github.com/diggtvu/pyDCMvnDocs)
