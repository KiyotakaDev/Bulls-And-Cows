import express from "express";
import cors from "cors";
import http from "http";
import { Socket } from "socket.io";

const { ENV, DEV_ORIGIN, PROD_ORIGIN } = process.env;
const PORT = process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = new Socket(server);

const ALLOW_ORIGIN =
  ENV === "DEV" ? DEV_ORIGIN : ENV === "PROD" ? PROD_ORIGIN : null;

app.use(
  cors({
    origin: ALLOW_ORIGIN,
    credentials: true,
  })
);

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.emit("message", "Hola papus :v");
  
});

server.listen(PORT, () => console.log(`>> Server on PORT ${PORT} <<`));
