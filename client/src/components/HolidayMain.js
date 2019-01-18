import React, { Component } from "react";
import PropTypes from "prop-types";

import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";

const styles = theme => ({
    card: {
        background: "#383C45",
        borderRadius: 3,
        border: 0,
        color: "white",
        height: 120,
        width: 200,
        justifyContent: "center",
        margin: theme.spacing.unit * 4,
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    paper: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    title: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
        paddingTop: "2rem",
    },
    gridList: {
        flexWrap: "nowrap",
    },
});

class HolidayMain extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.paper} elevation={5}>
                <GridList className={classes.gridList} cols={4}>
                    <CardActionArea href="holidays/approval">
                        <Card className={classes.card}>
                            <Typography className={classes.title}>Waiting for approval</Typography>
                        </Card>
                    </CardActionArea>
                    <CardActionArea href="holidays/all">
                        <Card className={classes.card}>
                            <Typography className={classes.title}>Current Employee Holidays</Typography>
                        </Card>
                    </CardActionArea>
                    <CardActionArea href="holidays/book">
                        <Card className={classes.card}>
                            <Typography className={classes.title}>Book Holiday</Typography>
                        </Card>
                    </CardActionArea>
                    <CardActionArea href="holidays/allowance">
                        <Card className={classes.card}>
                            <Typography className={classes.title}>Allowance Break Down</Typography>
                        </Card>
                    </CardActionArea>
                </GridList>
            </Paper>
        );
    }
}

HolidayMain.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HolidayMain);
