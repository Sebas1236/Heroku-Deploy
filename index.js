const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.redirect('/index.html');
});

app.listen(process.env.PORT || 5000);
