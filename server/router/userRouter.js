const express = require("express");
const {
  nihadData,
  gijoData,
  hariDada,
} = require("../controller/user.controller");

const userRouter = express.Router();

userRouter.get("/nihad", nihadData);
userRouter.get("/gijo", gijoData);
userRouter.get("/hari", hariDada);

module.exports = { userRouter };
