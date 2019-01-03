"use-strict";
const router = require("express").Router();
const homeCont = require("../controllers/home");

router.get("/", homeCont.home);

module.exports = router;
