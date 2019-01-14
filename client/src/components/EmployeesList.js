import React, { Component } from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import { connect } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../actions/employeeActions";

import PropTypes from "prop-types";

class EmployeesList extends Component {
    componentDidMount() {
        this.props.fetchEmployees();
    }

    DeleteEmployee(id) {
        this.props.deleteEmployee(id);
    }

    render() {
        const { employees } = this.props.employees;
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map(employee => {
                            return (
                                <TableRow key={employee._id}>
                                    <TableCell component="th" scope="row">
                                        <IconButton
                                            aria-label="Delete"
                                            onClick={this.DeleteEmployee.bind(this, employee._id)}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                        {employee._id}
                                    </TableCell>
                                    <TableCell align="right">{employee.firstName}</TableCell>
                                    <TableCell align="right">{employee.lastName}</TableCell>
                                    <TableCell align="right">{employee.email}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

EmployeesList.propTypes = {
    fetchEmployees: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    employees: state.employees,
});

export default connect(
    mapStateToProps,
    { fetchEmployees, deleteEmployee }
)(EmployeesList);
