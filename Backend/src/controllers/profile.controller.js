const profileSvc = require("../services/profile.service");
const UserModel = require("../model/user.model");
const ProfileModel = require("../model/profile.model");
class ProfileController {
  createProfile = async (req, res, next) => {
    try {
      const userId = req.user._id;
      const user = await UserModel.findById(userId).populate("profile");
      console.log(user);
      if (user.profile) {
        throw { status: 400, msg: "User already has a profile." };
      }

      let data = req.body;
      // await profileSvc.validateProfile(data);
      let response = await profileSvc.createProfile(data);
      await UserModel.findByIdAndUpdate(userId, { profile: response._id });
      res.json({
        result: response,
        msg: "Profile Created",
        status: true,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  updateProfile = async (req, res, next) => {
    try {
      let data = req.body;
      let id = req.params.id;
      let profile = await profileSvc.getProfileById(id);
      if (req.file) {
        data.image = req.file.filename;
      } else {
        data.image = profile.image;
      }
      profileSvc.validateProfile(data);
      let response = await profileSvc.updateProfile(id, data);
      res.json({
        result: response,
        msg: "Profile Updated",
        status: true,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  deleteProfile = async (req, res, next) => {
    try {
      let id = req.params.id;
      let response = await profileSvc.deleteProfile(id);
      res.json({
        result: response,
        msg: "Profile Deleted",
        status: true,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  listAllProfile = async (req, res, next) => {
    try {
      let response = await profileSvc.getAllProfiles();
      res.json({
        result: response,
        msg: "Profile Fetched",
        status: true,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
  getProfileById = async (req, res, next) => {
    try {
      let id = req.params.id;
      let response = await profileSvc.getProfileById(id);
      res.json({
        result: response,
        msg: "Profile Fetched",
        status: true,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  createBio = async (req, res, next) => {
    try {
      const bio = req.body.bioData.bio;
      const id = req.user?.id;
      const user = await UserModel.findById(id);
      const profile = await ProfileModel.findById(user.profile);
      if (!bio) {
        throw { status: 404, msg: "Please provide Bio" };
      }
      if (!user.profile) {
        throw { status: 400, msg: "User does not have a profile." };
      }
      if (user.profile) {
        (profile.bio = bio), await profile?.save();
      }

      // const response = await profileSvc.createBio(bio);
      await ProfileModel.findByIdAndUpdate(profile.id, { bio: response._id });
      res.json({
        result: response,
        msg: "Bio Created",
        status: true,
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };
}

const profileCtrl = new ProfileController();
module.exports = profileCtrl;
