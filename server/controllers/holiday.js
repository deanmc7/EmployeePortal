"use-strict";

// Holiday Model
const Holiday = require("../models/holiday.model");

exports.findAll = (req, res) => {
    Holiday.find()
        .populate("employee")
        .then(holiday => {
            res.json(holiday);
        });
};

exports.find = (req, res) => {
    Holiday.find({ employee: req.params.id })
        .populate("employee")
        .then(holiday => {
            res.json(holiday);
        });
};

exports.create = (req, res) => {
    const newHoliday = new Holiday({
        employee: req.body.employeeId,
        year: req.body.year,
        entitlement: req.body.entitlement,
        amountUsed: req.body.amountUsed,
    });

    newHoliday.save().then(holiday => {
        res.json(holiday);
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const update = req.body;
    console.log(update);
    Holiday.findOneAndUpdate(id, update, err => {
        if (err) {
            return res.json({ success: false, error: err });
        }
        return res.json({ success: true });
    });
};

exports.delete = (req, res) => {
    Holiday.findById(req.params.id)
        .then(holiday => {
            holiday.remove().then(() => {
                res.json({ success: true });
            });
        })
        .catch(err => {
            res.status(404).json({ success: false });
        });
};
