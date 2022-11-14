const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

const port = 3000;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", (req, res) => {
  console.log(req.body);
  //todo: connect to db and save user data
  res.status(200).json({
    status: true,
    msg: "user created successfully",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
