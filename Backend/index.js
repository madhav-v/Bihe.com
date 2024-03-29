const http = require("http");
const express = require("express");
const app = express();
const routes = require("./src/routes");
const cors = require("cors");
const expressSession = require("express-session");
const passport = require("passport");
const passportInitialize = require("./src/middleware/passport.middleware");
require("./src/config/mongoose.config");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  expressSession({
    secret: "test123#",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);
app.use(passport.initialize());
app.use(passport.session());
passportInitialize();

app.use("/assets/", express.static(process.cwd() + "/public/"));
app.use("/api/v1", routes);
// app.use("/auth",oAu)
app.use("/", (req, res) => {
  res.send("Hello World");
});
const server = http.createServer(app);

app.use((req, res, next) => {
  next({ status: 404, msg: "Not Found" });
});
app.use((error, req, res, next) => {
  let status = error && error.status ? error.status : 500;
  let msg = error && error.msg ? error.msg : "Internal Server Error..";
  console.log(error);

  res.status(status).json({
    result: null,
    status: false,
    msg: msg,
    meta: null,
  });
});

const serv = server.listen(3005, "localhost", (err) => {
  if (err) {
    console.log("Error listening to the port");
  } else {
    console.log("Server is listening to the port 3005");
    console.log("Press CTRL+C to disconnect the server");
  }
});

const io = require("socket.io")(serv, {
  pingTimeout: 60000,
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  console.log("connected to socket.io");
});
