const express = require("express");

const app = express();

//Middleware
app.use("/posts", () => {
  console.log("This is a middleware running");
});

//ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on posts");
});

//LISTENING
app.listen(3000);
