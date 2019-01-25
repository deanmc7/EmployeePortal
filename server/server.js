"use-strict";
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const indexRouter = require("./routes/index.route.js");
const employeeRouter = require("./routes/employee.route.js");
const holidayRouter = require("./routes/holiday.route");
const bookingRouter = require("./routes/booking.route");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    err => {
        if (err) {
            console.log("There was an error:\n", err);
        } else {
            console.log("Connected to MongoDB!");
        }
    }
);

app.use("/", indexRouter);
app.use("/employees", employeeRouter);
app.use("/holidays", holidayRouter);
app.use("/bookholiday", bookingRouter);

app.listen(process.env.PORT, () => {
    console.log("Listening on port: " + process.env.PORT);
});
