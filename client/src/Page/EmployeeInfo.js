import React, { Component } from "react";
import EmployeeData from "../components/EmployeeData";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class EmployeeDataPage extends Component {
    render() {
        return (
            <div className="EmployeeDataPage">
                <Container>
                    <EmployeeData />
                </Container>
            </div>
        );
    }
}

export default EmployeeDataPage;
