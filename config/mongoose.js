const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hospital");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "error connection to mongo"));

db.once("open", () => console.log("Successfully connected to mongo"));

module.exports = db;
