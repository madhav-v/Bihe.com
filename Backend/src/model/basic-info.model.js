const mongoose = require("mongoose");

const BasicSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    caste: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    maritalStatus: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    physicalDisability: {
      type: String,
      required: true,
    },
    smokeOrDrink: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BasicModel = mongoose.model("Basic", BasicSchema);

module.exports = BasicModel;
