const express = require("express");

const app = express();
const port = 4000;

const cors = require("cors");

app.use(cors());

let Nihad = {
  name: "Nihad",
  age: 23,
  email: "Nihad@gmail.com",
};

let Gijo = {
  name: "Gijo",
  age: 22,
  email: "Gijo@gmail.com",
};

let Hari = {
  name: "Hari",
  age: 25,
  email: "Hari@gmail.com",
};

app.get("/api/nihad", (req, res) => {
  res.json(Nihad);
});
app.get("/api/gijo", (req, res) => {
  res.json(Gijo);
});
app.get("/api/hari", (req, res) => {
  res.json(Hari);
});

app.listen(port, () => {
  console.log("Example server running on http://localhost:4000");
});
