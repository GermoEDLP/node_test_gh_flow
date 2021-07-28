const { Router } = require("express");
const { getInfo } = require("./constrollers/user.controller");

const router = Router();

router.get("/", getInfo);

// ruta get /user que retorne un ususario
router.get("/user", (req, res) => {
  res.json({
    message: "Hola usuario",
  });
});

module.exports = router;
