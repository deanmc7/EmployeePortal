import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { connect } from "react-redux";
import { fetchAllHolidays } from "../actions/HolidaysActions";

const styles = theme => ({});

class EmployeesHolidaysMain extends Component {
    componentDidMount() {
        this.props.fetchAllHolidays();
    }

    render() {
        const { classes } = this.props;
        const { holidays } = this.props.holidays;
        console.log(holidays);

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
                                <TableRow key={holiday._id}>
                                    <TableCell align="left">{holiday.employee[0].firstName}</TableCell>
                                    <TableCell align="left">{holiday.employee[0].lastName}</TableCell>
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
    fetchAllHolidays: PropTypes.func.isRequired,
    holidays: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    holidays: state.holidays,
});

export default connect(
    mapStateToProps,
    { fetchAllHolidays }
)(withStyles(styles)(EmployeesHolidaysMain));
