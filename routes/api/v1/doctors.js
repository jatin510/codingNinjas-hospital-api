const route = require("express").Router();
const doctorController = require("../../../controllers/doctor_controller");
const Doctor = require("../../../models/doctor");

route.get("/", async (req, res) => {
  const doctor = await Doctor.find({});

  return res.json({
    doctor,
  });
});

route.post("/register", doctorController.register);

route.post("/login", doctorController.login);

module.exports = route;
