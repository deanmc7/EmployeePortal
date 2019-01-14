import React, { Component } from "react";
import EmployeeList from "../components/EmployeesList";
import EmployeeModal from "../components/EmployeeModal";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";

class EmployeeListPage extends Component {
    render() {
        return (
            <div className="EmployeeListPage">
                <Container>
                    <EmployeeModal />
                    <EmployeeList />
                </Container>
            </div>
        );
    }
}

export default EmployeeListPage;
