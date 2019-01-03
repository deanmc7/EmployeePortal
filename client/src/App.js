import React, { Component } from "react";
import EmployeeList from "./components/EmployeesList";
import AppNavBar from "./components/AppNavBar";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppNavBar />
                <Container>
                    <EmployeeList />
                </Container>
            </div>
        );
    }
}

export default App;
