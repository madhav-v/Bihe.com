const mongoose = require("mongoose");

const EducationSchema = mongoose.Schema(
  {
    educationalDegree: {
      type: String,
      required: true,
    },
    college: {
      type: String,
      required: true,
    },
    occupation: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    annualIncome: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const EducationModel = mongoose.model("Education", EducationSchema);
module.exports = EducationModel;
