const Patient = require("../models/patient");
const Report = require("../models/report");
const Doctor = require("../models/doctor");

// patient register
module.exports.register = async (req, res) => {
  try {
    // user schema
    let patient = await Patient.findOne({ phone: req.body.phone });

    if (!patient) {
      // create a patient
      let patient = await Patient.create(req.body);

      return res.status(200).json({
        message: "New Patient Registered",
        patientId: patient._id,
      });
    } else {
      return res.status(409).json({
        // patient already registered
        message: "Patient/ mobile is already registered",
      });
    }
  } catch (err) {
    console.log("Catch Patient Register", err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// create report
module.exports.createReport = async (req, res) => {
  try {
    let patient = await Patient.findById(req.params.id);

    if (patient) {
      // if patient is present

      let doctor = await Doctor.findById(req.body.doctor);

      console.log("doctor", doctor);

      // TODO
      let data = {
        doctor: req.body.doctor,
        patient: req.params.id,
        status: req.body.status,
        date: req.body.date,
      };

      let report = await Report.create(data);
      patient.reports.push(report);

      patient.save();

      return res.status(200).json({
        message: "Patient Report Created",
      });
    } else {
      return res.status(409).json({
        message: "patient is not registered",
      });
    }
  } catch (err) {
    console.log("catch create report error : ", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

// create all report
module.exports.allReports = async (req, res) => {
  try {
    let patient = await Patient.findById(req.params.id).populate({
      path: "reports",
      populate: { path: "doctor", select: "name _id" },
    });

    if (patient) {
      return res.status(200).json({
        message: `Report of ${patient.name}`,
        reports: patient.reports,
      });
    } else {
      return res.status(409).json({
        message: "The patient is not registered",
      });
    }
  } catch (err) {
    console.log("catch all report ", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
