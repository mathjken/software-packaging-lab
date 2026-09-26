# Software Packaging Demo

A small Python package demonstrating modern Python software packaging using `pyproject.toml`, setuptools, source distributions, and wheels.

## Build

Create an isolated build environment and install the Python build tool:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install build

Build the package:

python -m build

The build generates:

Source distribution (.tar.gz)
Python wheel (.whl)
Version

Current package version:

1.0.0

The package follows Semantic Versioning.

Test

Run:

python3 test_package.py

Expected result:

Python package test passed
