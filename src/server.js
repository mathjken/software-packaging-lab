const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

app.get("/", (req, res) => {
    res.send("Software Packaging Lab is running!");
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT} in ${NODE_ENV} environment`);
    });
}

module.exports = app;
