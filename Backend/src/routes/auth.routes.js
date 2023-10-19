const app = require("express").Router();
const authCtrl = require("../controllers/auth.controller");

app.post("/login", authCtrl.login);
app.post("/register", authCtrl.register);
app.post("/forget-password", authCtrl.forgetPassword);
app.post("/password-reset", authCtrl.resetPassword);
app.delete("/delete-user/:id", authCtrl.deleteUser);

module.exports = app;
