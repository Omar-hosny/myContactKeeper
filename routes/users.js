const express = require("express");

const router = express.Router();

// @route  POST api/users
// @desc   Register user
// access  puplic
router.post("/", (req, res) => {
  res.send("register user ..");
});

module.exports = router;
