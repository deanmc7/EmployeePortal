"use-strict";

const Booking = require("../models/booking.model");
const Holiday = require("../models/holiday.model");

exports.findAllForOneEmployee = (req, res) => {
    Booking.find({ employee: req.params.id })
        .populate("employee")
        .populate("holidays")
        .then(booking => {
            res.json(booking);
        });
};

exports.findAll = (req, res) => {
    Booking.find()
        .populate("employee")
        .populate("holidays")
        .then(booking => {
            res.json(booking);
        });
};

exports.create = (req, res) => {
    Holiday.findOne({ employee: req.body.employeeId }).then(holiday => {
        const request = Number(req.body.request);
        const currentHolidayUsed = Number(holiday.amountUsed);

        if (request <= currentHolidayUsed) {
            const newBooking = new Booking({
                employee: req.body.employeeId,
                holidays: holiday._id,
                dateFrom: req.body.dateFrom,
                dateTo: req.body.dateTo,
                request: request,
            });
            // [Object: null prototype] { amountUsed: '99' }
            newBooking
                .save()
                .catch(err => {
                    console.log(err);
                })
                .then(booking => {
                    const amountUsed = currentHolidayUsed - request;
                    const holidayUpdate = { amountUsed };
                    console.log(holidayUpdate);
                    Holiday.findOneAndUpdate(holiday._id, holidayUpdate, err => {
                        if (err) {
                            console.log("holiday fail");
                            //res.json({ success: false, error: err });
                        }
                        console.log("holiday succeed");
                        //res.json({ success: true });
                    });
                    res.json(booking);
                });
        } else {
            res.json({ success: false });
        }
    });
};

exports.delete = (req, res) => {
    Booking.findById(req.params.id)
        .then(booking => {
            booking.remove().then(() => {
                res.json({ success: true });
            });
        })
        .catch(err => {
            res.status(404).json({ success: false });
        });
};
