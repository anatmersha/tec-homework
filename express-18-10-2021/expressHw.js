const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// express_1
app.get("/name", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'name.html'));
});

// express_1.5
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
app.listen(port);