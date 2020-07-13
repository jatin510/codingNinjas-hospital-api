const route = require("express").Router();

const reportContoller = require("../../../controllers/report_controller");
const Report = require("../../../models/report");

route.get("/", async (req, res) => {
  console.log("patients get");
  const patient = await Report.find({});
  //   return res.json(patient);

  return res.json({ message: "patients get all report", patient });
});

route.get("/:status", reportContoller.status);

module.exports = route;
