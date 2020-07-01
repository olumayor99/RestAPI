const express = require("express");

const app = express();

app.use(express.json());

//ROUTES
app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

//LISTENING
app.listen(5000, () => {
  console.log(" API running at: http://localhost:5000");
});
