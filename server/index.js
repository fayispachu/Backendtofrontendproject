const express = require("express");

const app = express();
const port = 4000;

const cors = require("cors");
app.use(cors());

const { userRouter } = require("./router/userRouter");

// const {
//   nihadData,
//   gijoData,
//   hariDada,
// } = require("./controller/user.controller");

app.use("/api/user", userRouter);

// app.get("/api/user/nihad", nihadData);
// app.get("/api/user/gijo", gijoData);
// app.get("/api/user/hari", hariDada);

app.listen(port, () => {
  console.log("Example server running on http://localhost:4000");
});
