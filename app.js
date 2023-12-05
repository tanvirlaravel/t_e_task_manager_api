const express = require("express");
const app = express();
const port = 3000;
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

// middleware
app.use(express.json());
app.use("/api/v1/tasks", tasks);

app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

const start = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server running on http://127.0.0.1:${port}/`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
