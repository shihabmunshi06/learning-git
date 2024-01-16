//jshint esversion:6

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

const https = require("https");

app.listen(3000, function () {
  console.log("server started at port 3000");
});

app.post("/", function (req, res) {
  res.send("thanks for posting");
  console.log(req.body);
});

app.get("/", function (req, res) {
  const url = "";
  https.get(url, function (response) {
    response.on("data", function (data) {
      var jsonData = JSON.parse(response);
      console.log(jsonData);
    });
  });

  res.send("Hello");
});

app.get("/contact", function (req, res) {
  res.send("this is a contact page");
});
