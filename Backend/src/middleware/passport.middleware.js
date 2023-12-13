const passport = require("passport");
const { Strategy } = require("passport-google-oauth20");
const UserModel = require("../model/user.model");
const dotenv = require("dotenv");
dotenv.config();

const clientId = process.env.CLIENT_ID || "";
const clientSecret = process.env.CLIENT_SECRET || "";

const passportInitialize = () => {
  passport.use(
    new Strategy(
      {
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
      },
      async function (accessToken, refreshToken, profile, cb) {
        console.log(profile);
        const existUser = await UserModel.findOne({
          email: profile["_json"].email,
        });

        console.log(existUser, "owowowo");
        console.log(profile);

        if (existUser) {
          cb(null, profile);
        } else {
          console.log(profile);
          const data = {
            name: profile["_json"].name,
            email: profile["_json"].email,
            profileImageUrl: profile["_json"].picture,
          };
          const user = new UserModel(data);
          console.log(user, "naya");
          await user.save();
          console.log(user);
          cb(null, profile);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = passportInitialize;
