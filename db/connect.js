const mongoose = require("mongoose");

const connectionString = `mongodb+srv://tanvirlaravel:SifA4lmTmc54sHxM@cluster0.dig3zsv.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority`;

mongoose
  .connect(connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connect to db...`);
  })
  .catch((err) => {
    console.log(err);
  });
