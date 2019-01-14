import { FETCH_EMPLOYEES, NEW_EMPLOYEES, DELETE_EMPLOYEES } from "../actions/types";
import uuid from "uuid";

const initialState = {
    employees: [
        { id: uuid(), firstName: "Bob", lastName: "Dylan", email: "bob.dylan@company.com" },
        { id: uuid(), firstName: "Dave", lastName: "Batista", email: "dave.batista@company.com" },
        { id: uuid(), firstName: "John", lastName: "Doe", email: "john.doe@company.com" },
        { id: uuid(), firstName: "blue", lastName: "blah", email: "blue.blah@company.com" },
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEES:
            return {
                ...state,
            };
        case NEW_EMPLOYEES:
            return {
                ...state,
                employees: [action.payload, ...state.employees],
            };
        case DELETE_EMPLOYEES:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.payload),
            };
        default:
            return state;
    }
}
