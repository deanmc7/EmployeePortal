import { FETCH_EMPLOYEES, NEW_EMPLOYEES, DELETE_EMPLOYEES } from "../actions/types";
import uuid from "uuid";

const initialState = {
    employees: [
        { id: uuid(), firstName: "Bob", lastName: "Dylan", email: "bob.dylan@company.com" },
        { id: uuid(), firstName: "Dave", lastName: "Batista", email: "dave.batista@company.com" },
        { id: uuid(), firstName: "John", lastName: "Doe", email: "john.doe@company.com" },
    ],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEES:
            return {
                ...state,
            };
        case NEW_EMPLOYEES:
        case DELETE_EMPLOYEES:
        default:
            return state;
    }
}
