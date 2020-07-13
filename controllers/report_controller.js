const Report = require("../models/report");

module.exports.status = async (req, res) => {
  try {
    console.log("report with status");
    let report = await Report.find({ status: req.params.status })
      .populate({
        path: "Patient",
        select: "name address phone",
      })
      .populate({
        path: "doctor",
        select: "name _id",
      });

    if (report && report.length != 0) {
      return res.status(200).json({
        message: `List of all reports with status ${req.params.status}`,
        reports: report,
      });
    } else {
      return res.status(409).json({
        message: `No report with status : ${req.params.status}`,
      });
    }
  } catch (err) {
    console.log("Catch error status report ", err);

    return res.status(500).json({
      message: "Intenal Server Error",
    });
  }
};
