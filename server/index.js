import express from "express";
import cors from "cors"

const app = express();
const PORT = process.env.PORT;
const ACCESS_ORIGIN = process.env.ACCESS_ORIGIN

app.use()

app.get("/", (req, res) => {
  res.header(
    "Acces-Control-Allow-Origin",
    ACCESS_ORIGIN
  );
  res.send("Hola");
});

app.listen(PORT, () => console.log(`>> Server on PORT ${PORT} <<`));
