import express from "express";

const app = express();
const PORT = process.env.PORT;

app.get("https://bulls-and-cows-server.vercel.app/", (req, res) => {
  res.send("Hola")
})

app.listen(PORT, () => console.log(`>> Server on PORT ${PORT} <<`));
