"use-strict";
const express = require("express");
const router = express.Router();
const employees = require("../controllers/employee");

router.get("/", employees.findAll);

router.post("/", employees.create);

router.delete("/:id", employees.delete);

module.exports = router;
