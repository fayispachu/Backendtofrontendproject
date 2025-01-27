const express = require("express");

const app = express();
const port = 4000;

const cors = require("cors");

const {
  nihadData,
  gijoData,
  hariDada,
} = require("./controller/user.controller");


app.use(cors());

app.get("/api/nihad", nihadData);
app.get("/api/gijo", gijoData);
app.get("/api/hari", hariDada);

app.listen(port, () => {
  console.log("Example server running on http://localhost:4000");
});
