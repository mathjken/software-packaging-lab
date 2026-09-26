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
