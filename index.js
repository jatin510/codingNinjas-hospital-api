const express = require("express");
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");

const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Hello"));

app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) return console.log("Error in running server ", err);

  console.log(`Server is running on http://localhost:${port}`);
});
