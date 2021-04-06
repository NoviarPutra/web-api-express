require("dotenv").config();
const express = require("express");
const {
  createNewUser,
  loginUser,
  getAllUsers,
} = require("../api/controllers/users.controllers");
const router = express.Router();

router.post("/register", createNewUser);
router.get("/list", getAllUsers);
router.post("/login", loginUser);

module.exports = router;
