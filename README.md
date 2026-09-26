# Software Packaging Lab

## Task 1 - Define Application Dependencies

### Overview

This project explores fundamental software packaging concepts used in DevOps. The first task focuses on defining application dependencies using Node.js and npm.

### Project Structure

```text
software-packaging-lab/
├── node_modules/
├── package.json
├── package-lock.json
├── src/
│   └── server.js
└── README.md

Dependencies

The application uses Express as a direct dependency.

It was installed using:

npm install express

This added Express to package.json and created package-lock.json.

Direct Dependency

A direct dependency is a package explicitly required by the application.

In this project:

Application
    ↓
Express

Express is therefore a direct dependency.

Transitive Dependencies

A transitive dependency is a package required by another dependency.

Express depends on additional npm packages, which npm resolves and installs automatically.

Therefore, the dependency structure can be represented as:

Application
    ↓
Express
    ↓
Express dependencies
    ↓
Additional dependencies
package.json

package.json contains the project's metadata, scripts and direct dependencies.

The project includes:

"dependencies": {
  "express": "^5.2.1"
}

The start script is:

"start": "node src/server.js"
package-lock.json

package-lock.json records the resolved dependency tree and package versions.

It helps make dependency installation more consistent and reproducible across different environments.

The lockfile also contains package integrity information used to verify downloaded packages.

Application

The application is located in:

src/server.js

It creates a simple Express web server that listens on port 3000 by default.

The application also supports the PORT environment variable:

const PORT = process.env.PORT || 3000;

This allows the port to be configured externally rather than hard-coded.

Testing

The application was started with:

npm start

The application reported:

Server running on port 3000

The application was then tested using:

curl http://localhost:3000

The response was:

Software Packaging Lab is running!

This verified that the Express dependency was installed correctly and that the application could use it successfully.

Key Concepts Learned
Software dependency
Direct dependency
Transitive dependency
npm
package.json
package-lock.json
node_modules
Dependency tree
Dependency integrity
npm scripts
Environment variables
Application verification
Reproducibility


Task 2 - Dependency Installation, Updates and Security
Objective

Practise dependency installation and management using npm, understand reproducible installations, check for outdated packages and audit dependencies for security vulnerabilities.

npm install

npm install installs the dependencies defined by the project's package configuration.

The command used during the project was:

npm install express

This installed Express and its dependency tree into node_modules/, added Express to package.json and generated package-lock.json.

npm install is commonly used during development when adding or managing dependencies.

npm install --dry-run

The following command was used to preview an installation without applying changes:

npm install --dry-run

The result was:

up to date

This demonstrated that npm found the existing dependency installation consistent with the project configuration.

--dry-run is useful for previewing package-management operations before making changes.

npm ci

The project was then installed using:

npm ci

The result was:

added 68 packages, and audited 69 packages

npm ci means Clean Install.

It is designed for clean and reproducible dependency installations and is particularly useful in automated CI/CD environments.

Unlike a normal development installation, npm ci relies on the existing package-lock.json to reproduce the locked dependency tree.

Conceptually:

Git repository
      ↓
package.json + package-lock.json
      ↓
npm ci
      ↓
Clean dependency installation
      ↓
node_modules/

This helps ensure that a CI/CD environment installs the dependency tree defined by the project rather than unexpectedly resolving a different dependency set.

npm audit

The project's dependencies were checked for known security vulnerabilities using:

npm audit

The result was:

found 0 vulnerabilities

This means npm reported no known vulnerabilities in the project's current dependency tree at the time of the audit.

Dependency auditing is important because third-party packages form part of an application's software supply chain.

npm outdated

The following command was used to check whether dependencies had newer versions available:

npm outdated

No output was returned, indicating that npm found no outdated packages under the current dependency configuration.

npm update

npm update can be used to update dependencies within the version ranges permitted by package.json.

It was not necessary to run it in this task because npm outdated reported no outdated dependencies.

Avoiding unnecessary updates also prevents introducing unrelated dependency changes into the project.

Dependency Management Summary
Command	Purpose
npm install	Install or manage project dependencies
npm install --dry-run	Preview an installation without applying changes
npm ci	Perform a clean, reproducible installation using the lockfile
npm audit	Check dependencies for known security vulnerabilities
npm outdated	Check for available dependency updates
npm update	Update dependencies within permitted version ranges
Task 2 Results

The current project dependency state is:

Direct dependency: Express
Version: 5.2.1
Security vulnerabilities: 0
Outdated packages: None
Task 2 Outcome

The project demonstrated dependency installation, clean dependency reproduction, dependency auditing and update checking using npm.

These practices are important in DevOps because applications need reliable and secure dependency management across development, testing and CI/CD environments.


## Task 3: Application Metadata and Semantic Versioning

### Objective

Configure application metadata and apply Semantic Versioning (MAJOR.MINOR.PATCH) to the Node.js project.

### Application Metadata

The project metadata is defined in `package.json`. The following fields were configured:

* **Name:** `software-packaging-lab`
* **Description:** Describes the purpose of the application and the packaging concepts demonstrated.
* **Keywords:** Added relevant terms including Node.js, Express, software packaging, DevOps, and semantic versioning.
* **Type:** `commonjs`
* **Start script:** `node src/server.js`

The `package.json` file was validated using:

```bash
node -e "JSON.parse(require('fs').readFileSync('package.json')); console.log('package.json is valid JSON')"
```

Validation confirmed that the file contains valid JSON.

### Semantic Versioning

Semantic Versioning uses the format:

```text
MAJOR.MINOR.PATCH
```

The project initially used version `1.0.0`.

A PATCH release was then created using:

```bash
npm version patch
```

This changed the application version from:

```text
1.0.0 → 1.0.1
```

A PATCH increment is appropriate for a backward-compatible bug fix or maintenance release that does not introduce breaking changes or a new feature requiring a MINOR version increment.

The command also automatically:

1. Updated the version in `package.json`.
2. Updated the project version recorded in `package-lock.json`.
3. Created a Git commit for version `1.0.1`.
4. Created the Git tag `v1.0.1`.

The release was published to GitHub using:

```bash
git push --follow-tags
```

### Versioning Strategy

The project follows the following Semantic Versioning convention:

| Version component | Purpose                                      | Example         |
| ----------------- | -------------------------------------------- | --------------- |
| MAJOR             | Breaking or incompatible changes             | `1.0.0 → 2.0.0` |
| MINOR             | Backward-compatible new functionality        | `1.0.0 → 1.1.0` |
| PATCH             | Backward-compatible bug fixes or maintenance | `1.0.0 → 1.0.1` |

### Application Version vs Dependency Version

The application's version and its dependency versions serve different purposes.

The application version is:

```text
software-packaging-lab: 1.0.1
```

The Express dependency is specified as:

```json
"express": "^5.2.1"
```

`1.0.1` identifies a release of this application, while `^5.2.1` specifies an acceptable version range for the Express dependency.

### Verification

The release was verified using Git:

```bash
git log --oneline -3
git tag
```

The Git history showed the version commit and the `v1.0.1` tag.

The working tree was clean and the commit and tag were successfully pushed to GitHub.

### Evidence

Task 3 evidence is available in:

```text
screenshots/task-3-versioning.png
```

### Outcome

Application metadata was configured and the project successfully adopted Semantic Versioning. Version `1.0.1` was created, tagged, and published to the GitHub repository.



## Task 4: Environment-Specific Configuration

### Objective

Separate environment-specific configuration from the core application code so that the same application can be deployed to different environments without modifying the application itself.

### Environment Configuration

The application reads configuration values from environment variables:

- `NODE_ENV` identifies the deployment environment.
- `PORT` determines the network port used by the application.

The application uses default values when these variables are not supplied:

```javascript
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

Environment configuration templates were created for development and staging:

config/development.env.example
config/staging.env.example

Development configuration:

NODE_ENV=development
PORT=3000

Staging configuration:

NODE_ENV=staging
PORT=4000
Verification

The same application was executed using different environment variables.

Development
NODE_ENV=development PORT=3000 npm start

Result:

Server running on port 3000 in development environment

The application was then verified with:

curl http://localhost:3000

Result:

Software Packaging Lab is running!
Staging
NODE_ENV=staging PORT=4000 npm start

Result:

Server running on port 4000 in staging environment

The application was then verified with:

curl http://localhost:4000

Result:

Software Packaging Lab is running!
Configuration Strategy

The application code remains unchanged between environments. Only the environment variables change.

Environment	NODE_ENV	PORT
Development	development	3000
Staging	staging	4000

This demonstrates deployment flexibility because the same application can operate with different environment-specific settings without modifying its source code.

Evidence

Screenshot:

screenshots/task-4-configuration.png

The screenshot shows the staging application running on port 4000 and the successful HTTP request using curl.


## Task 5 — Create a Distributable Artifact

### Objective

Create a distributable package of the Node.js application that can be transferred and installed in another environment.

### Packaging Method

The application was packaged using npm's native packaging mechanism:

```bash
npm pack


Before creating the final artifact, the package contents were previewed with:

npm pack --dry-run

A .npmignore file was used to exclude development and assessment files such as:

node_modules/
screenshots/
Git metadata
.env files
existing .tgz artifacts
Generated Artifact

The final distributable package is:

dist/software-packaging-lab-1.0.1.tgz

The artifact was inspected with:

tar -tzf software-packaging-lab-1.0.1.tgz

The final package contains:

package/README.md
package/config/development.env.example
package/config/staging.env.example
package/package.json
package/src/server.js

The generated artifact is approximately 4.2 KB.

Outcome

A clean, portable Node.js package was successfully created. The package contains the application source, package metadata, environment configuration examples, and documentation, while excluding screenshots, development dependencies, Git files, and environment secrets.

Evidence

Screenshot:

screenshots/task-5-build.png


## Task 6 — Verify Packaged Application

### Objective

Verify that the distributable artifact created in Task 5 can be deployed and executed successfully in separate development and staging environments.

### Development Environment

The packaged artifact was extracted into a clean temporary environment:

```bash
mkdir -p /tmp/software-packaging-dev
tar -xzf ~/software-packaging-lab/dist/software-packaging-lab-1.0.1.tgz -C /tmp/software-packaging-dev --strip-components=1
cd /tmp/software-packaging-dev

Dependencies were installed using:

npm install

The application was then started with development-specific configuration:

NODE_ENV=development PORT=3000 npm start

The application reported:

Server running on port 3000 in development environment

The application was verified using:

curl http://localhost:3000

Response:

Software Packaging Lab is running!
Staging Environment

The same distributable artifact was extracted into a separate staging environment:

mkdir -p /tmp/software-packaging-staging
tar -xzf ~/software-packaging-lab/dist/software-packaging-lab-1.0.1.tgz -C /tmp/software-packaging-staging --strip-components=1
cd /tmp/software-packaging-staging

Dependencies were installed using:

npm install

The application was started with staging-specific configuration:

NODE_ENV=staging PORT=4000 npm start

The application reported:

Server running on port 4000 in staging environment

The application was verified using:

curl http://localhost:4000

Response:

Software Packaging Lab is running!
Verification Result

The same software-packaging-lab-1.0.1.tgz artifact was successfully deployed and executed in both environments.

Environment	Port	Verification
Development	3000	Successful
Staging	4000	Successful

This demonstrates that the packaged application can be transferred to a clean environment, have its dependencies installed, and run with environment-specific configuration.

Evidence

Screenshot:

screenshots/task-6-packaged-app.png


## Task 7 — Security Audit of Dependencies

### Objective

Audit the application's third-party dependencies for known security vulnerabilities and check whether any dependencies require updates.

### Security Audit

The dependency tree was audited using:

```bash
npm audit

Result:

found 0 vulnerabilities

No known vulnerabilities were reported in the installed dependency tree at the time of the audit.

Dependency Verification

The project's top-level dependency was verified using:

npm list --depth=0

Result:

software-packaging-lab@1.0.1
└── express@5.2.1

The project was also checked for outdated dependencies using:

npm outdated

No outdated dependencies were reported.

Security Result

The dependency audit completed successfully with no known vulnerabilities reported. The project also had no outdated dependencies reported by npm at the time of verification.

Dependency security is important because third-party packages form part of the application's software supply chain.

Evidence

Screenshot:

screenshots/task-7-security-audit.png


## Testing and Validation

Automated testing was added using Node.js's built-in `node:test` framework.

### Test Configuration

The `package.json` test script runs:

```bash
npm test

This executes the test suite using:

node --test
Test Coverage

The test in test/server.test.js validates the actual Express application by:

Starting the Express application on an automatically assigned port.
Sending a GET / HTTP request.
Verifying that the HTTP status code is 200.
Verifying that the expected response is returned.
Closing the test server after execution.
Test Execution

Command:

npm test

Result:

✔ GET / returns the expected response
ℹ tests 1
ℹ pass 1
ℹ fail 0

The automated test completed successfully with zero failures.

Testing Outcome

The test confirms that the packaged application's main HTTP endpoint responds correctly and provides automated validation that can be executed consistently during development or CI/CD.

Evidence:

test/server.test.js
npm test execution
screenshots/testing.png


## Artifact Integrity Verification

The distributable package is verified using a SHA-256 checksum.

### Generate Checksum

```bash
sha256sum dist/software-packaging-lab-1.0.1.tgz > dist/software-packaging-lab-1.0.1.tgz.sha256

Generated SHA-256 checksum:

f8fe4e8c5cda1d1ec94436b6fcdf25d1e1f6aa877a1e4bdcfdbef4d3865432f0
Verify Artifact

The artifact was verified using:

sha256sum -c dist/software-packaging-lab-1.0.1.tgz.sha256

Verification result:

dist/software-packaging-lab-1.0.1.tgz: OK

A successful OK result confirms that the packaged artifact matches the recorded SHA-256 checksum and has not changed since the checksum was generated.

Evidence:

dist/software-packaging-lab-1.0.1.tgz
dist/software-packaging-lab-1.0.1.tgz.sha256
SHA-256 verification output


## Python Packaging Support

To demonstrate multi-language packaging, a Python package was added under `python-package/`.

The Python project uses the modern `pyproject.toml` configuration standard with setuptools as its build backend.

### Python Package Metadata

The package is named:

```text
software-packaging-demo

Version:

1.0.0
Python Testing

The package was validated using:

cd python-package
python3 test_package.py

Result:

Python package test passed
Python Build

An isolated Python virtual environment was used for the build:

python3 -m venv .venv
source .venv/bin/activate
python -m pip install build

The package was built using:

python -m build

The build successfully generated:

python-package/dist/software_packaging_demo-1.0.0.tar.gz
python-package/dist/software_packaging_demo-1.0.0-py3-none-any.whl
Artifact Verification

The generated wheel was inspected using:

python -m zipfile -l dist/software_packaging_demo-1.0.0-py3-none-any.whl

The wheel contains the Python package and standard distribution metadata including METADATA, WHEEL, and RECORD.

This Python implementation demonstrates packaging concepts across more than one programming language, complementing the primary Node.js packaging implementation.
