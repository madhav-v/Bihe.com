const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrpyt");
const userSvc = require("../services/user.service");
const mailSvc = require("../services/mailing.service");

class AuthController {
  register = async (req, res, next) => {
    try {
      let registerData = req.body;
      userSvc.validateData(registerData);
      let user = await userSvc.registerUser(registerData);
      if (user) {
        let mailMsg = `Dear ${registerData.name},<br/>
        Your account has been successfully registered.<br/>
        Regards<br/>
        No-Reply,Admin
        `;
        await mailSvc.sendMail(
          registerData.email,
          "Registration Success",
          mailMsg
        );
      }
      res.json({
        status: 200,
        msg: "User Registered Successfully",
        user: user,
      });
    } catch (exception) {
      next(exception);
    }
  };
  login = async (req, res, next) => {
    try {
      let payload = req.body;
      if (!payload.email || !payload.password) {
        next({ status: 400, msg: "Credentials Required" });
      }
      let userDetail = await userSvc.getUserByEmail(payload.email);
      if (!userDetail) {
        next({ status: 400, msg: "User not found" });
        return;
      }
      if (userDetail.password !== payload.password) {
        next({ status: 400, msg: "Invalid Credentials" });
        return;
      }
      let token = jwt.sign({ id: userDetail._id }, process.env.JWT_SECRET, {
        expiresIn: 86400,
      });

      res.json({
        status: 200,
        msg: "Login Success",
        user: userDetail,
        token: token,
      });
    } catch (exception) {
      next(exception);
    }
  };
  forgetPassword = async (req, res, next) => {
    try {
      const { email } = req.body;
      if (!email) {
        throw { status: 400, msg: "Email is required" };
      }
      const user = await userSvc.getUserByEmail(email);
      if (!user) {
        throw { status: 404, msg: "User not found" };
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: 86400,
      });
      const mailMsg = `Dear ${user.name},<br/>
      Please click on the link below to reset your password.<br/>
      <a href="${process.env.BASE_URL}/reset-password/${token}">Reset Password</a><br/>
      Regards<br/>
      No-Reply,Admin
      `;
      await mailSvc.sendMail(email, "Reset Password", mailMsg);
      res.json({
        status: 200,
        msg: "Reset password link has been sent to your email",
      });
    } catch (exception) {
      next(exception);
    }
  };
  resetPassword = async (req, res, next) => {
    try {
      const { password, token } = req.body;
      if (!password || !token) {
        throw { status: 400, msg: "All fields are required" };
      }
      if (password.length < 6) {
        throw {
          status: 400,
          msg: "Password should be at least 8 characters long",
        };
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded) {
        throw { status: 400, msg: "Invalid Token" };
      }
      const user = await userSvc.getUserById(decoded.id);
      if (!user) {
        throw { status: 404, msg: "User not found" };
      }
      user.password = password;
      await userSvc.updateUser({ password: password }, user);
      res.json({
        status: 200,
        msg: "Password updated successfully",
      });
    } catch (exception) {
      next(exception);
    }
  };
  deleteUser = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!id) {
        throw { status: 400, msg: "User id is required" };
      }
      const user = await userSvc.getUserById(id);
      if (!user) {
        throw { status: 404, msg: "User not found" };
      }
      await userSvc.deleteUser(id);
      res.json({
        status: 200,
        msg: "User deleted successfully",
      });
    } catch (exception) {
      next(exception);
    }
  };
}

const authCtrl = new AuthController();
module.exports = authCtrl;
