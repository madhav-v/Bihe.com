const express = require("express");
const passport = require("passport");
const UserModel = require("../model/user.model");

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    message: "Unauthorized user",
  });
});

router.get("/google/callback", async (req, res, next) => {
  passport.authenticate("google", async (err, user) => {
    if (err) {
      return next(err);
    }

    const newUser = await UserModel.findOne(user.email);
    if (newUser) {
      console.log(newUser._id);
    //   const token = generate_access_token(newUser);
    //   res.cookie("simotapp_jwtToken", token);
      res.cookie("simotapp_isLoggedIn", true);
      res.cookie("simotapp_roles", newUser.role);
      res.cookie("simotapp_UserId", newUser._id.toString());
      res.redirect(`${process.env.CLIENT_URL}`);
      next();
    }

    console.log(newUser, "ma ho");
  })(req, res, next);
});

// Remove the Facebook routes if not needed

module.exports = router;
