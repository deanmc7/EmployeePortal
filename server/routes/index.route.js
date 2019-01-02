"use-strict";
const routes = require("express").Router();
const homeCont = require("../controllers/home");
const employeeCont = require("../controllers/employee");

routes.get("/", homeCont.home);

module.exports = routes;
