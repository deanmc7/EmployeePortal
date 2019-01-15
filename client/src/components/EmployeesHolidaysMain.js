import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import uuid from "uuid";

// import { connect } from "react-redux";
// import { fetchEmployees } from "../actions/employeeActions";

const styles = theme => ({});

class EmployeesHolidaysMain extends Component {
    state = {
        holidays: [
            {
                id: uuid(),
                employee: { id: uuid(), firstName: "Bob", lastName: "Dylan", email: "bob.dylan@company.com" },
                year: 2019,
                entitlement: 150,
                amountUsed: 10,
            },
            {
                id: uuid(),
                employee: { id: uuid(), firstName: "Dave", lastName: "Batista", email: "dave.batista@company.com" },
                year: 2019,
                entitlement: 150,
                amountUsed: 97,
            },
        ],
    };

    // componentDidMount() {
    //     this.props.fetchEmployees();
    // }

    render() {
        const { classes } = this.props;
        const { holidays } = this.state;

        return (
            <Paper className={classes.paper} elevation={5}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">First Name</TableCell>
                            <TableCell align="left">Last Name</TableCell>
                            <TableCell align="left">Holiday Allowance</TableCell>
                            <TableCell align="left">Used</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {holidays.map(holiday => {
                            return (
                                <TableRow key={holiday.employee.id}>
                                    <TableCell align="left">{holiday.employee.firstName}</TableCell>
                                    <TableCell align="left">{holiday.employee.lastName}</TableCell>
                                    <TableCell align="left">{holiday.entitlement}</TableCell>
                                    <TableCell align="left">{holiday.amountUsed}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

EmployeesHolidaysMain.propTypes = {
    classes: PropTypes.object.isRequired,
};

// const mapStateToProps = state => ({
//     employees: state.employees,
// });
// todo: default connect(mapStateToProps,{ fetchEmployees })
export default withStyles(styles)(EmployeesHolidaysMain);
