# Express.js: Handling Empty or Invalid JSON Request Bodies

This repository demonstrates a common issue in Express.js applications where parsing JSON request bodies fails when the body is empty or contains invalid JSON data, leading to a 400 Bad Request error. The solution involves adding middleware to handle these cases gracefully.

## Bug

The `bug.js` file contains an Express.js application that attempts to parse JSON request bodies using `express.json()`.  However, if the request body is empty or contains invalid JSON, the application throws an error and responds with a 400 Bad Request error.

## Solution

The `bugSolution.js` file demonstrates the solution which uses error handling middleware to gracefully handle these error conditions. The `express.json()` middleware now includes an error handling callback to catch parsing errors and send an appropriate response. This ensures the application handles invalid requests more robustly and does not crash.