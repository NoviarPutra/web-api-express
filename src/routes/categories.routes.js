const express = require("express");
const {
  findAll,
  createNew,
} = require("../api/controllers/categories.controllers");
const router = express.Router();

router.post("/create", createNew);
router.get("/list", findAll);

module.exports = router;
