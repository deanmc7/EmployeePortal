"use-strict";
const express = require("express");
const router = express.Router();
const employees = require("../controllers/employee");

router.get("/", employees.findAll);

router.get("/:id", employees.findOne);

router.post("/", employees.create);

router.put("/:id", employees.update);

router.delete("/:id", employees.delete);

module.exports = router;
