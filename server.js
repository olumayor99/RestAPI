const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/tasks");

const app = express();

app.use(express.json());

app.use("/api/tasks", taskRoutes);

//ROUTES
app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

mongoose
  .connect(
    "mongodb+srv://olumayor99:scorer99@cluster0.1dfwd.mongodb.net/tasks?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    app.listen(5000, () => {
      console.log(" API running at: http://localhost:5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });

//mongodb+srv://olumayor99:<password>@cluster0.1dfwd.mongodb.net/<dbname>?retryWrites=true&w=majority
