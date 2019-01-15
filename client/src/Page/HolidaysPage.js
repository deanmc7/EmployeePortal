import React, { Component } from "react";
import HolidayMain from "../components/HolidayMain";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class HolidaysPage extends Component {
    render() {
        return (
            <div className="HolidayPage">
                <Container>
                    <HolidayMain />
                </Container>
            </div>
        );
    }
}

export default HolidaysPage;
