const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "lab execution" });
});
app.listen(2000, () => console.log("server is up and running on port 2000"));