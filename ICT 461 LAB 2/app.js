const express = require("express");

const app = express();
const PORT = 3000;

// Middleware for reading JSON request bodies
app.use(express.json());

// Middleware for reading HTML form data
app.use(express.urlencoded({ extended: true }));

// Serve files from the public folder
app.use(express.static("public"));

// HTTP Inspector endpoint
app.all("/inspect", (req, res) => {
    res.json({
        method: req.method,
        path: req.path,
        headers: req.headers,
        body: req.body
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});