import express from "express";
import http from "http";
import { Server as SocketServer } from "socket.io";
import controller from "./controllers/handleClientMessage.js";

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

io.on("connection", socket => controller(socket));

server.listen(PORT, () => console.log(`>> Server on PORT ${PORT} <<`));
