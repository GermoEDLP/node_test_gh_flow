const { response } = require("express");

const getInfo = (req, res = response) => {
  res.status(200).json({
    msg: "Hola mundo!",
  });
};

module.exports = { getInfo };
