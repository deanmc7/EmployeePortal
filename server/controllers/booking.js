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
        const newBooking = new Booking({
            employee: req.body.employeeId,
            holidays: holiday._id,
            dateFrom: req.body.dateFrom,
            dateTo: req.body.dateTo,
            request: req.body.request,
        });

        newBooking
            .save()
            .catch(err => {
                console.log(err);
            })
            .then(booking => {
                res.json(booking);
            });
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
