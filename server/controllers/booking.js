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
                    var response, responseText;
                    const amountUsed = currentHolidayUsed - request;
                    const holidayUpdate = { amountUsed };

                    Holiday.findOneAndUpdate(holiday._id, holidayUpdate, err => {
                        if (err) {
                            return res.json({ holidayBooked: false, error: err });
                        }

                        response = JSON.parse('{ "holidayBooked": true }');

                        res.status(200).json({ response, booking });
                    });
                });
        } else {
            res.json({ success: false, error: "Not enough allowance" });
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
