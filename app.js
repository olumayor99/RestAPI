const express = require("express");

const app = express();

//ROUTES
app.get("/", (req, res) => {
  res.send("We are home");
});

//LISTENING
app.listen(3000);
