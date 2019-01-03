"use-strict";
const express = require("express");
const router = express.Router();
const holiday = require("../controllers/holiday");

router.get("/", holiday.findAll);

router.post("/", holiday.create);

router.get("/:id", holiday.find);

router.put("/:id", holiday.update);

router.delete("/:id", holiday.delete);

module.exports = router;
