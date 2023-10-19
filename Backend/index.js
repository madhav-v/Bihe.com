const http = require("http");
const express = require("express");
const app = express();
const routes = require("./src/routes");
const cors = require("cors");
require("./src/config/mongoose.config");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/api/v1", routes);

const server = http.createServer(app);

app.use(cors());
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

server.listen(3005, "localhost", (err) => {
  if (err) {
    console.log("Error listening to the port");
  } else {
    console.log("Server is listening to the port");
    console.log("Press CTRL+C to disconnect the server");
  }
});
