const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // registration_no: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
