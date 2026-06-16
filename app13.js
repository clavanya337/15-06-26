const express = require("express");
const app = express();

app.use(express.json());

const users = [
    { id: 1, name: "abc" },
    { id: 2, name: "xyz" },
    { id: 3, name: "pqr" }
];

app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);

    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.status(200).json(user);
});

app.listen(2000, () => {
    console.log("Server is running on port 2000");
});