"use-strict";

// Employee Model
const Employee = require("../models/employee.model");

exports.findAll = (req, res) => {
    Employee.find()
        .sort({ name: -1 })
        .then(employees => {
            res.json(employees);
        });
};

exports.findOne = (req, res) => {
    Employee.findById(req.params.id).then(employee => {
        res.json(employee);
    });
};

exports.create = (req, res) => {
    const newEmployee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });

    newEmployee.save().then(employee => {
        res.json(employee);
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    const update = req.body;
    Employee.findOneAndUpdate(id, update, err => {
        if (err) {
            return res.json({ success: false, error: err });
        }
        return res.json({ success: true });
    });
};

exports.delete = (req, res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            employee.remove().then(() => {
                res.json({ success: true });
            });
        })
        .catch(err => {
            res.status(404).json({ success: false });
        });
};
