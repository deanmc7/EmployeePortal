import React, { Component } from "react";
import EmployeeList from "./components/EmployeesList";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <EmployeeList />
            </div>
        );
    }
}

export default App;
