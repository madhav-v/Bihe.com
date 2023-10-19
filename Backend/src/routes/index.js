const app = require("express").Router();
const authRoutes = require("./auth.routes");

app.use("/auth", authRoutes);

module.exports = app;
