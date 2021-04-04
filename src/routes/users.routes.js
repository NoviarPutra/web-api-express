const express = require("express");
const {
  createNewUser,
  loginUser,
} = require("../api/controllers/users.controllers");
const router = express.Router();

router.post("/register", createNewUser);
router.post("/login", loginUser);

module.exports = router;
