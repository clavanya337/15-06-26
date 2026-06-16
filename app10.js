const http = require("node:http");
const path = require("node:path");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Hello world" });
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"));
});

const server = http.createServer(app);

server.listen(2000, () => {
    console.log("Server is ready to handle requests...");
});