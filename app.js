const express = require("express");

const app = express();
const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    res.send("CI/CD Demo App Running Successfully!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});