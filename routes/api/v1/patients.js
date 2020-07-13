const route = require("express").Router();
const patientController = require("../../../controllers/patient_controller");
const Patient = require("../../../models/patient");
const passport = require("passport");

route.get("/", async (req, res) => {
  console.log("patients get");
  const patient = await Patient.find({});
  return res.send(patient);
});

route.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  patientController.register
);
route.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  patientController.createReport
);
route.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  patientController.allReports
);

module.exports = route;
