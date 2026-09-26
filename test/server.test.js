const test = require("node:test");
const assert = require("node:assert");
const app = require("../src/server");

test("GET / returns the expected response", async () => {
    const server = app.listen(0);
    const port = server.address().port;

    try {
        const response = await fetch(`http://localhost:${port}/`);
        const body = await response.text();

        assert.strictEqual(response.status, 200);
        assert.strictEqual(body, "Software Packaging Lab is running!");
    } finally {
        await new Promise((resolve) => server.close(resolve));
    }
});
