import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";

const { ENV, DEV_ORIGIN, PROD_ORIGIN, PORT } = process.env;

const ALLOW_ORIGIN =
  ENV === "DEV" ? DEV_ORIGIN : ENV === "PROD" ? PROD_ORIGIN : null;

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: ALLOW_ORIGIN,
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("message", "Hola papus :v");

  socket.on("message", (message) => {
    console.log(message);
  })
  
});

server.listen(PORT, () => console.log(`>> Server on PORT ${PORT} <<`));
