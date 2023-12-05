const express = require("express");
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}/`);
});
