const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Hello world");

    } else if (req.url === "/about") {
        const readStream = fs.createReadStream("about.html");
        res.writeHead(200, { "Content-Type": "text/html" });
        readStream.pipe(res);

    } else if (req.url === "/api/users") {
        const users = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));

    } else {
        res.writeHead(404);
        res.end("No resource found");
    }
});

server.listen(3000);