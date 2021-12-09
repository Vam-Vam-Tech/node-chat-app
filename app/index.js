const http = require("http");
const socketIo = require("socket.io");
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//server
const server = http.createServer(app);
const io = socketIo(server);

//static
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/style.css", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/style.css"));
});

app.get("/script.js", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/script.js"));
});

//routes
app.use("/hello", (req, res) => {
  res.send("Hello");
});

io.on("connection", (socket) => {
  socket.on("user_connected_to_server", (data) => {
    io.emit("user_connected", { name: data.name });
  });

  socket.on("send_message", (data) => {
    io.emit("brocast_message", { data: data });
  });
});

//env PORT
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
