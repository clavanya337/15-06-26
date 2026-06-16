const http = require("node:http");
function myHandler(req, res) {
    
}
const server = http.createServer(myHandler);
server.listen(2000, () => console.log("Server is ready.."));