"use-strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    employee: [{ type: Schema.Types.ObjectId, required: true, ref: "employee" }],
    holidays: [{ type: Schema.Types.ObjectId, required: true, ref: "holiday" }],
    dateFrom: [{ type: Date, required: true }],
    dateTo: [{ type: Date, required: true }],
    request: [{ type: Number, required: true }],
});

module.exports = booking = mongoose.model("booking", BookingSchema);
