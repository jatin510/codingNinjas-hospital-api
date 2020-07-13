const Doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");

// doctor register
module.exports.register = async (req, res) => {
  try {
    // check password
    if (req.body.password != req.body.confirm_password) {
      return res.status(400).json({
        message: "password not match",
      });
    }

    // check the given e-mail already exist
    let doctor = await Doctor.findOne({ phone: req.body.phone });

    if (doctor) {
      // doctor already exist
      console.log(doctor);
      return res.status(400).json({ message: "Doctor already already exist" });
    } else {
      // create new doctor
      await Doctor.create(req.body);

      return res.status(200).json({
        message: "New Doctor registered",
      });
    }
  } catch (err) {
    console.log("Error in user registration ", err);

    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};

module.exports.login = async (req, res) => {
  try {
    // check if doctor is registered
    let doctor = await Doctor.findOne({ phone: req.body.phone });

    if (!doctor || doctor.password != req.body.password) {
      return res.status(422).json({ message: "Invalid username or password" });
    }

    console.log("logged in");

    return res.status(200).json({
      message: "Sign in successfull",
      data: {
        token: jwt.sign(doctor.toJSON(), "covid19", { expiresIn: "11000000" }),
      },
    });
  } catch (err) {
    console.log(`Error doctor login , ${err}`);

    return res.json(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};
