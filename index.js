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

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.email.includes("chandan")) {
    res.status(200).send({
      status: true,
      data: {
        dob: "06/03/1983",
        fullName: "Chandan Naresh",
        email: "chandan@gmail.com",
        mobileNo: "8080811145",
      },
      msg: "login success",
    });
  } else {
    res.status(200).send({
      status: false,
      data: null,
      msg: "invalid credentials",
    });
  }
});

app.post("/register", (req, res) => {
  console.log(req.body);
  //todo: connect to db and save user data

  res.status(501).json({
    status: false,
    msg: "failed to create account. pls contact system admin",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
