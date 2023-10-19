const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  // Personal Details
  fullName: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  religion: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  caste: {
    type: String,
    required: true,
  },
  maritalStatus: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  physicalDisability: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  smokeOrDrink: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },

  // Family Details
  familyType: {
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
  gotra: {
    type: String,
    required: true,
  },
  parentalStatus: {
    type: String,
    required: true,
  },
  familyAddress: {
    type: String,
    required: true,
  },
  nativePlace: {
    type: String,
    required: true,
  },
  motherTongue: {
    type: String,
    required: true,
  },

  // Educational Details
  educationalDegree: {
    type: String,
    required: true,
  },
  subject: {
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

  // User Preferences
  preference: {
    minAge: {
      type: Number,
      required: true,
    },
    maxAge: {
      type: Number,
      required: true,
    },
    minHeight: {
      type: String,
      required: true,
    },
    maxHeight: {
      type: String,
      required: true,
    },
    preferredMaritalStatus: {
      type: String,
      required: true,
    },
    preferredReligion: {
      type: String,
      required: true,
    },
    preferredCaste: {
      type: String,
      required: true,
    },
    preferredEducation: {
      type: String,
      required: true,
    },
    preferredOccupation: {
      type: String,
      required: true,
    },
    preferredSubject: {
      type: String,
      required: true,
    },
    preferredAnnualIncome: {
      type: String,
      required: true,
    },
    preferredSector: {
      type: String,
      required: true,
    },
    preferredMotherTongue: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const ProfileModel = mongoose.model("Profile", ProfileSchema);

module.exports = ProfileModel;
