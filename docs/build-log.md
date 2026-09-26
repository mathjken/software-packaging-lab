# Build and Verification Log

This document records the main packaging, testing, artifact generation, and verification activities performed for the Software Packaging Lab.

## 1. Dependency Installation

Command:

```bash
npm ci

Result:

added 68 packages, and audited 69 packages
found 0 vulnerabilities
2. Automated Testing

Command:

npm test

Test framework:

Node.js built-in node:test

Result:

✔ GET / returns the expected response
ℹ tests 1
ℹ pass 1
ℹ fail 0
3. Package Generation

Command:

npm pack

Distributable artifact:

dist/software-packaging-lab-1.0.1.tgz

The generated archive was inspected using:

tar -tzf dist/software-packaging-lab-1.0.1.tgz

The final package contains the application source, configuration examples, package metadata, and README.

4. Packaged Application Verification

The generated artifact was extracted into separate temporary environments.

Development
NODE_ENV=development PORT=3000 npm start

Application result:

Server running on port 3000 in development environment

Endpoint verification:

curl http://localhost:3000

Result:

Software Packaging Lab is running!
Staging
NODE_ENV=staging PORT=4000 npm start

Application result:

Server running on port 4000 in staging environment

Endpoint verification:

curl http://localhost:4000

Result:

Software Packaging Lab is running!
5. Security Audit

Command:

npm audit

Result:

found 0 vulnerabilities

Dependency status was also checked using:

npm outdated

No outdated dependencies were reported.

6. Artifact Integrity

SHA-256 checksum was generated using:

sha256sum dist/software-packaging-lab-1.0.1.tgz > dist/software-packaging-lab-1.0.1.tgz.sha256

Recorded checksum:

f8fe4e8c5cda1d1ec94436b6fcdf25d1e1f6aa877a1e4bdcfdbef4d3865432f0

Verification command:

sha256sum -c dist/software-packaging-lab-1.0.1.tgz.sha256

Result:

dist/software-packaging-lab-1.0.1.tgz: OK
7. Verification Summary
Area	Result
Dependencies	Installed successfully
Automated tests	1 passed, 0 failed
Package generation	Successful
Development verification	Successful
Staging verification	Successful
Security audit	0 vulnerabilities
Artifact checksum	SHA-256 verified
Artifact integrity	Confirmed
Evidence

Screenshots supporting the build and verification process are stored in:

screenshots/

Relevant evidence includes:

testing.png
artifact-integrity.png
task-5-build.png
task-6-packaged-app.png
task-7-security-audit.png
