import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { fetchSingleEmployee } from "../actions/employeeActions";

const styles = theme => ({
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    text: {
        margin: 10,
        fontSize: 24,
    },
});

class EmployeeData extends Component {
    componentDidMount() {
        var pageURL = window.location.href;
        var employeeId = pageURL.substr(pageURL.lastIndexOf("/") + 1);

        this.props.fetchSingleEmployee(employeeId);
    }

    render() {
        const { employees } = this.props.employees;
        const { classes } = this.props;
        return (
            <Paper className={classes.paper} elevation={5}>
                <Grid container justify="left" alignItems="left">
                    <Avatar
                        alt={employees.firstName + " " + employees.lastName}
                        //src="../static/images/avatar.png"
                        className={classes.bigAvatar}
                    />
                    <Typography className={classes.text}>
                        ID: {employees._id}
                        <br />
                        Name: {employees.firstName + " " + employees.lastName}
                        <br />
                        Address: TODO
                        <br />
                        Email: {employees.email}
                    </Typography>
                </Grid>
            </Paper>
        );
    }
}

const mapStateToProps = state => ({
    employees: state.employees,
});

EmployeeData.propTypes = {
    classes: PropTypes.object.isRequired,
    fetchSingleEmployee: PropTypes.func.isRequired,
    employees: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    { fetchSingleEmployee }
)(withStyles(styles)(EmployeeData));
