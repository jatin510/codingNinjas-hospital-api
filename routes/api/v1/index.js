const route = require("express").Router();

route.get("/", (req, res) => res.sendsend("inside v1"));

// doctors route
route.use("/doctors", require("./doctors"));

// patients route
route.use("/patients", require("./patients"));

// reports
route.use("/reports", require("./reports"));

module.exports = route;
