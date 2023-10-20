const app = require("express").Router();
const authRoutes = require("./auth.routes");
const profileRoutes = require("./profile.routes");
const chatRoutes = require("./chat.routes");

app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/chat", chatRoutes);

module.exports = app;
