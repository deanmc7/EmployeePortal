"use-strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HolidaySchema = new Schema({
    employee: [{ type: Schema.Types.ObjectId, required: true, ref: "employee" }],
    year: [{ type: Number, required: true }],
    entitlement: [{ type: Number, required: true }],
    amountUsed: [{ type: Number, required: true }],
});

module.exports = holiday = mongoose.model("holiday", HolidaySchema);
