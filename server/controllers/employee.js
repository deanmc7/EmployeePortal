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

exports.create = (req, res) => {
    const newEmployee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    });

    newEmployee.save().then(employee => {
        res.json(employee);
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
