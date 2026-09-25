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
