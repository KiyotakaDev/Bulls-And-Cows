import express from "express";
import cors from "cors";

const { ENV, DEV_ORIGIN, PROD_ORIGIN } = process.env;

const app = express();
const PORT = process.env.PORT;

const ALLOW_ORIGIN =
  ENV === "DEV" ? DEV_ORIGIN : ENV === "PROD" ? PROD_ORIGIN : null;

// app.use(cors({
//   origin: ALLOW_ORIGINS,
//   credentials: true
// }))

app.get("/", (req, res) => {
  res.header("Allow-Control-Access-Origin", ALLOW_ORIGIN);
  res.send("Server is running well :D");
});

app.listen(PORT, () => console.log(`>> Server on PORT ${PORT} <<`));
