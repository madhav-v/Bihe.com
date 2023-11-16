const mongoose = require("mongoose");

const FamilySchema = mongoose.Schema(
  {
    familyType: {
      type: String,
      required: true,
    },
    familyValue: {
      type: String,
      required: true,
    },
    numberOfSiblings: {
      type: Number,
      required: true,
    },
    numberOfFamilyMembers: {
      type: Number,
      required: true,
    },
    familyAddress: {
      type: String,
      required: true,
    },
    motherTongue: {
      type: String,
      required: true,
    },
    gotra: {
      type: String,
      required: true,
    },
    nativePlace: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const FamilyModel = mongoose.model("Family", FamilySchema);
module.exports = FamilyModel;
