const ProfileModel = require("../model/profile.model");
const Joi = requure("joi");
class ProfileService {
  validateProfile = async (data) => {
    try {
      let schema = Joi.object({
        fullName: Joi.string().required(),
        height: Joi.string().required(),
        religion: Joi.string().required(),
        sex: Joi.string().required(),
        caste: Joi.string().required(),
        maritalStatus: Joi.string().required(),
        dateOfBirth: Joi.date().required(),
        physicalDisability: Joi.string().required(),
        address: Joi.string().required(),
        smokeOrDrink: Joi.boolean().required(),

        familyType: Joi.string().required(),
        numberOfSiblings: Joi.number().required(),
        numberOfFamilyMembers: Joi.number().required(),
        gotra: Joi.string().required(),
        parentalStatus: Joi.string().required(),
        familyAddress: Joi.string().required(),
        nativePlace: Joi.string().required(),
        motherTongue: Joi.string().required(),

        educationalDegree: Joi.string().required(),
        subject: Joi.string().required(),
        college: Joi.string().required(),
        occupation: Joi.string().required(),
        sector: Joi.string().required(),
        annualIncome: Joi.number().required(),
        companyName: Joi.string().required(),

        preference: Joi.object({
          minAge: Joi.number().required(),
          maxAge: Joi.number().required(),
          minHeight: Joi.number().required(),
          maxHeight: Joi.number().required(),
          preferredMaritalStatus: Joi.string().required(),
          preferredReligion: Joi.string().required(),
          preferredCaste: Joi.string().required(),
          preferredEducation: Joi.string().required(),
          preferredOccupation: Joi.string().required(),
          preferredSubject: Joi.string().required(),
          preferredAnnualIncome: Joi.number().required(),
          preferredSector: Joi.string().required(),
          preferredMotherTongue: Joi.string().required(),
        }).required(),
      });
      let response = schema.validate(data);
      if (response.error) {
        let msg = response.error.details[0].message;
        throw { status: 400, msg: msg };
      }
      return response.value;
    } catch (exception) {
      throw exception;
    }
  };
  createProfile = async (profile) => {
    try {
      const profileModel = new ProfileModel(profile);
      const createdProfile = await profileModel.save();
      return createdProfile;
    } catch (error) {
      throw error;
    }
  };

  getProfileById = async (profileId) => {
    try {
      const profile = await ProfileModel.findById(profileId);
      return profile;
    } catch (error) {
      throw error;
    }
  };

  getProfiles = async () => {
    try {
      const profiles = await ProfileModel.find();
      return profiles;
    } catch (error) {
      throw error;
    }
  };

  updateProfile = async (profileId, profile) => {
    try {
      const profileModel = new ProfileModel(profile);
      const updatedProfile = await ProfileModel.findByIdAndUpdate(
        profileId,
        profileModel,
        {
          new: true,
        }
      );
      return updatedProfile;
    } catch (error) {
      throw error;
    }
  };

  deleteProfile = async (profileId) => {
    try {
      await ProfileModel.findByIdAndDelete(profileId);
      return;
    } catch (error) {
      throw error;
    }
  };
}

const profileSvc = new ProfileService();
module.exports = profileSvc;
