const express = require("express");
const { createNew } = require("../api/controllers/products.controllers");
const router = express.Router();

router.post("/create", createNew);

module.exports = router;
