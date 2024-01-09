const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Welcome to MERN course");
});

app.get("/register", function (req, res) {
  res.status(200).send("Welcome to Registration Page");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});
