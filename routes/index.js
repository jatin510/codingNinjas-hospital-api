const express = require("express");
const route = express.Router();

route.use("/api", require("./api"));

module.exports = route;
