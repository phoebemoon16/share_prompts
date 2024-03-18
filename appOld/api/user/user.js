const express = require("express");
const app = express();

app.get("/api/user", (req, res) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Sam" },
  ];
  res.json(users);
});

app.listen(3000, () => {
  console.log("port 3000");
});
