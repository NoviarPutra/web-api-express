const express = require("express");
const {
  createNewUser,
  loginUser,
  findAllUsers,
} = require("../api/controllers/users.controllers");
const router = express.Router();

router.post("/register", createNewUser);
router.get("/list", findAllUsers);
router.post("/login", loginUser);

module.exports = router;
