import React, { Component } from "react";
import uuid from "uuid";

class EmployeesHolidaysMain extends Component {
    state = {
        holidays: [
            { id: uuid(), employeeId: uuid(), year: 2019, entitlement: 150, amountUsed: 10 },
            { id: uuid(), employeeId: uuid(), year: 2019, entitlement: 100, amountUsed: 50 },
            { id: uuid(), employeeId: uuid(), year: 2019, entitlement: 150, amountUsed: 97 },
        ],
    };

    render() {
        return <div />;
    }
}

export default EmployeesHolidaysMain;
