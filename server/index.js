import express from "express";
import cors from "cors"

const app = express();
const PORT = process.env.PORT;
const ALLOW_ORIGINS = process.env.ALLOW_ORIGINS

app.use(cors({
  origin: ALLOW_ORIGINS,
  credentials: true
}))

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(PORT, () => console.log(`>> Server on PORT ${PORT} <<`));
