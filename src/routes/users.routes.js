const express = require("express");
const { createNewUser } = require("../api/controllers/users.controllers");
const router = express.Router();

router.post("/register", createNewUser);

module.exports = router;
