const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema(
  {
    name: {type: String, minlength: [2, "Name Too Short (2 chars min)"], required: [true, "Name Required"]},
    position: {type: String, default: "crew member"},
    dateofstart: {type: String, default: "00/00/00"},
    agreedhours: {type: Number, default: 0},
    mobile: Number,
    email: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employees", employeeSchema);