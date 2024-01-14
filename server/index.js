import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("https://bulls-and-cows-server.vercel.app", (req, res) => {
  res.header(
    "Acces-Control-Allow-Origin",
    "https://bulls-and-cows-server.vercel.app"
  );
  res.send("Hola");
});

app.listen(PORT, () => console.log(`>> Server on PORT ${PORT} <<`));
