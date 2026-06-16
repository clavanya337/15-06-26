const express = require("express");
const app = express();
app.use(express.json());
app.post("/submit", (req, res) => {
    const { name, email } = req.body;
    res.status(200).json({ message: `Data received for ${name} with email ${email}` });
});
app.listen(2000, () => console.log("Server is running on port 2000"));
