"use-strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = new Schema({
    id: Number,
    firstName: String,
    lastName: String
})

module.exports = mongoose.model("employee", EmployeeSchema);