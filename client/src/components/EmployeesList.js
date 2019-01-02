import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Paper from "@material-ui/core/Paper";

import Fab from "@material-ui/core/Fab";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";

import uuid from "uuid";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto",
    },
    table: {
        minWidth: 700,
    },
    Fab: {
        position: "relative",
    },
});

class EmployeesList extends Component {
    state = {
        employees: [
            { id: uuid(), firstName: "Bob", lastName: "Dylan", email: "bob.dylan@company.com" },
            { id: uuid(), firstName: "Dave", lastName: "Batista", email: "dave.batista@company.com" },
            { id: uuid(), firstName: "John", lastName: "Doe", email: "john.doe@company.com" },
        ],
    };

    render() {
        const { employees } = this.state;
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
                                <TableRow key={employee.id}>
                                    <TableCell component="th" scope="row">
                                        <IconButton aria-label="Delete">
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                        {employee.id}
                                    </TableCell>
                                    <TableCell align="right">{employee.firstName}</TableCell>
                                    <TableCell align="right">{employee.lastName}</TableCell>
                                    <TableCell align="right">{employee.email}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
                <Fab size="small" color="secondary" aria-label="Add" style={{ justifyContent: "center" }}>
                    <AddIcon />
                </Fab>
            </Paper>
        );
    }
}

export default withStyles(styles)(EmployeesList);
