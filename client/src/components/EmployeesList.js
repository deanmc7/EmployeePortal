import React, { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";

import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import { fetchEmployees, deleteEmployee } from "../actions/employeeActions";

const styles = theme => ({
    tableRow: {
        cursor: "pointer",
    },
    tableRowHover: {
        "&:hover": {
            backgroundColor: theme.palette.grey[200],
        },
    },
});

class EmployeesList extends Component {
    componentDidMount() {
        this.props.fetchEmployees();
    }

    DeleteEmployee(id) {
        this.props.deleteEmployee(id);
    }

    DisplayEmployeeInfo(id) {
        window.location = `/employees/${id}`;
    }

    render() {
        const { classes } = this.props;
        const { employees } = this.props.employees;
        return (
            <Paper elevation={5}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">First Name</TableCell>
                            <TableCell align="left">Last Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employees.map(employee => {
                            return (
                                <TableRow
                                    key={employee._id}
                                    onClick={this.DisplayEmployeeInfo.bind(this, employee._id)}
                                    className={classNames(classes.tableRowHover, classes.tableRow)}
                                >
                                    <TableCell component="th" scope="row">
                                        <IconButton
                                            aria-label="Delete"
                                            onClick={this.DeleteEmployee.bind(this, employee._id)}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                        {employee._id}
                                    </TableCell>
                                    <TableCell align="left">{employee.firstName}</TableCell>
                                    <TableCell align="left">{employee.lastName}</TableCell>
                                    <TableCell align="left">{employee.email}</TableCell>
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
    classes: PropTypes.object.isRequired,
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
)(withStyles(styles)(EmployeesList));
