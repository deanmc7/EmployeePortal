"use-strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: String,
    lastName: String,
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
