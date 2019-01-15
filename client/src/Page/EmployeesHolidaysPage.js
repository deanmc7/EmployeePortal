import React, { Component } from "react";
import EmployeesHolidaysMain from "../components/EmployeesHolidaysMain";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class EmployeesHolidaysPage extends Component {
    render() {
        return (
            <div className="EmployeesHolidaysPage">
                <Container>
                    <EmployeesHolidaysMain />
                </Container>
            </div>
        );
    }
}

export default EmployeesHolidaysPage;
