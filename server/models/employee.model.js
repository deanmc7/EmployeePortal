"use-strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: [{ type: String, required: true }],
    lastName: [{ type: String, required: true }],
    email: [{ type: String, required: true }],
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
