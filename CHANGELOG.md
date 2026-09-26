# Changelog

All notable changes to this project are documented in this file.

The project follows Semantic Versioning (MAJOR.MINOR.PATCH).

## [1.0.1] - 2026-09-26

### Added
- Node.js and Express application.
- Express dependency management using `package.json` and `package-lock.json`.
- Environment-specific configuration for development and staging.
- Distributable `.tgz` package generated using `npm pack`.
- Verification of the packaged application in development and staging environments.
- Dependency security auditing using `npm audit`.

### Documentation
- Documented dependency installation and management.
- Documented semantic versioning.
- Documented environment-specific configuration.
- Documented artifact generation and verification.
- Documented security auditing.

### Security
- Verified project dependencies using `npm audit`.
- Confirmed zero reported vulnerabilities at the time of audit.

## Unreleased

### Added
- Automated application testing using Node.js `node:test`.
- HTTP endpoint validation for `GET /`.
- SHA-256 checksum generation for the distributable artifact.
- SHA-256 integrity verification for the distributable artifact.
- Testing and artifact integrity evidence screenshots.
