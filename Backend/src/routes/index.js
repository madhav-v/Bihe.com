const app = require("express").Router();
const authRoutes = require("./auth.routes");
const profileRoutes = require("./profile.routes");

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

module.exports = app;
