"use-strict";
const express = require("express");
const router = express.Router({ mergeParams: false });
const booking = require("../controllers/booking");

router.post("/", booking.create);

router.get("/", booking.findAll);

router.get("/:id", booking.findAllForOneEmployee);

//router.put("/:id", booking.update);

router.delete("/:id", booking.delete);

module.exports = router;
