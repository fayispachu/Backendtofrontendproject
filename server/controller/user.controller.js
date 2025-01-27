const { User } = require("../models/user.model");

const nihadData = (req, res) => {
  res.json(User.Nihad);
};

const gijoData = (req, res) => {
  res.json(User.Gijo);
};

const hariDada = (req, res) => {
  res.json(User.Hari);
};

module.exports = { nihadData, gijoData, hariDada };
