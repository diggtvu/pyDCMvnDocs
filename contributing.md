# Contributing to pyDCMvn

We welcome contributions to pyDCMvn! This document provides guidelines for contributing to the project.

## Getting Started

### Prerequisites

- Python 3.7 or higher
- Git
- pip

### Setting up Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/pyDCMvn.git
   cd pyDCMvn
   ```

3. **Create a virtual environment**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. **Install development dependencies**:
   ```bash
   pip install -e ".[dev]"
   ```

5. **Set up pre-commit hooks**:
   ```bash
   pre-commit install
   ```

## Development Workflow

### Creating a Branch

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
```

### Making Changes

1. Write your code following the project's coding standards
2. Add tests for new functionality
3. Update documentation as needed
4. Ensure all tests pass

### Testing

Run the test suite:

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=pyDCMvn --cov-report=html

# Run specific test file
pytest tests/test_dicom_reader.py
```

### Code Quality

We use several tools to maintain code quality:

```bash
# Format code with black
black pyDCMvn/

# Sort imports with isort
isort pyDCMvn/

# Lint with flake8
flake8 pyDCMvn/

# Type checking with mypy
mypy pyDCMvn/
```

## Coding Standards

### Python Style Guide

- Follow [PEP 8](https://www.python.org/dev/peps/pep-0008/)
- Use [Black](https://black.readthedocs.io/) for code formatting
- Maximum line length: 88 characters
- Use type hints where appropriate

### Naming Conventions

- Functions and variables: `snake_case`
- Classes: `PascalCase`
- Constants: `UPPER_SNAKE_CASE`
- Private methods: `_leading_underscore`

### Documentation

- Use Google-style docstrings
- Include examples in docstrings where helpful
- Update README.md for significant changes

Example docstring:

```python
def enhance_contrast(image_array, method='clahe', **kwargs):
    """Enhance image contrast using various methods.
    
    Args:
        image_array (numpy.ndarray): Input image array.
        method (str): Enhancement method ('clahe', 'histogram', 'adaptive').
        **kwargs: Additional method-specific parameters.
    
    Returns:
        numpy.ndarray: Enhanced image array.
    
    Raises:
        ProcessingError: If enhancement fails.
    
    Example:
        >>> import pyDCMvn
        >>> enhanced = pyDCMvn.enhance_contrast(image, method='clahe')
    """
```

## Types of Contributions

### Bug Reports

When reporting bugs, please include:

- Python version
- pyDCMvn version
- Operating system
- Minimal code example that reproduces the issue
- Full error traceback

### Feature Requests

For new features:

- Describe the use case
- Explain why it would be valuable
- Provide examples of how it would be used
- Consider backward compatibility

### Code Contributions

We welcome:

- Bug fixes
- New features
- Performance improvements
- Documentation improvements
- Test coverage improvements

## Vietnamese Healthcare Standards

When contributing features related to Vietnamese healthcare:

- Follow Vietnamese Ministry of Health guidelines
- Ensure compliance with local regulations
- Include appropriate Vietnamese language support
- Test with Vietnamese character sets
- Document Vietnamese-specific functionality

## Testing Guidelines

### Writing Tests

- Write tests for all new functionality
- Use descriptive test names
- Include both positive and negative test cases
- Test edge cases and error conditions

Example test structure:

```python
import pytest
import pyDCMvn

class TestDicomReader:
    def test_load_valid_dicom_file(self):
        """Test loading a valid DICOM file."""
        dataset = pyDCMvn.load_dicom('tests/data/valid.dcm')
        assert dataset is not None
        assert hasattr(dataset, 'PatientName')
    
    def test_load_invalid_file_raises_error(self):
        """Test that loading invalid file raises appropriate error."""
        with pytest.raises(pyDCMvn.DicomReadError):
            pyDCMvn.load_dicom('tests/data/invalid.txt')
```

### Test Data

- Use anonymized test data only
- Include various DICOM modalities if possible
- Keep test files small
- Document test data sources

## Documentation

### API Documentation

- Document all public functions and classes
- Include parameter types and descriptions
- Provide usage examples
- Document exceptions that can be raised

### User Documentation

- Update getting started guide for new features
- Add examples to the examples page
- Update API reference
- Include screenshots for UI features

## Submitting Changes

### Pull Request Process

1. **Ensure all tests pass**:
   ```bash
   pytest
   ```

2. **Check code quality**:
   ```bash
   black --check pyDCMvn/
   flake8 pyDCMvn/
   mypy pyDCMvn/
   ```

3. **Update documentation** if needed

4. **Create pull request** with:
   - Clear description of changes
   - Reference to related issues
   - Screenshots for UI changes
   - Breaking changes noted

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] New tests added for new functionality
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes (or properly documented)
```

## Release Process

### Version Numbers

We follow [Semantic Versioning](https://semver.org/):

- MAJOR: Incompatible API changes
- MINOR: New functionality (backward compatible)
- PATCH: Bug fixes (backward compatible)

### Release Checklist

1. Update version number
2. Update CHANGELOG.md
3. Create release notes
4. Tag release
5. Build and upload to PyPI

## Community Guidelines

### Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please:

- Be respectful and considerate
- Use inclusive language
- Focus on constructive feedback
- Help others learn and grow

### Getting Help

- Check existing issues and documentation first
- Ask questions in GitHub discussions
- Join our community chat (if available)
- Attend community meetings (if scheduled)

## Recognition

Contributors will be:

- Listed in CONTRIBUTORS.md
- Mentioned in release notes for significant contributions
- Invited to join the core team for sustained contributions

## License

By contributing to pyDCMvn, you agree that your contributions will be licensed under the MIT License.

## Contact

- **Project Maintainer**: Your Name (your.email@example.com)
- **GitHub Issues**: [pyDCMvn Issues](https://github.com/yourusername/pyDCMvn/issues)
- **Discussions**: [pyDCMvn Discussions](https://github.com/yourusername/pyDCMvn/discussions)

Thank you for contributing to pyDCMvn! 🎉
