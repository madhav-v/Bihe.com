const router = require("express").Router();
const authCheck = require("../middleware/auth.middleware");
const uploader = require("../middleware/uploader.middleware");
const profileCtrl = require("../controllers/profile.controller");

const uploadPath = (req, res, next) => {
  req.uploadPath = "./public/profile/";
  next();
};

router
  .route("/")
  .get(authCheck, profileCtrl.listAllProfile)
  .post(
    authCheck,
    uploadPath,
    uploader.single("image"),
    profileCtrl.createProfile
  );

router
  .route("/:id")
  .put(
    authCheck,
    uploadPath,
    uploader.single("image"),
    profileCtrl.updateProfile
  )
  .delete(authCheck, profileCtrl.deleteProfile)
  .get(authCheck, profileCtrl.getProfileById);

module.exports = router;
