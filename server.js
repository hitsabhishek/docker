const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json({
    message: "Dockerized Node Apprr",
    author: "Abhishek",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on portd${PORT}`);
});
