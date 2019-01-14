import { FETCH_EMPLOYEES, NEW_EMPLOYEES, DELETE_EMPLOYEES } from "./types";

export const fetchEmployees = () => {
    return {
        type: FETCH_EMPLOYEES,
    };
};

export const newEmployee = employee => {
    return {
        type: NEW_EMPLOYEES,
        payload: employee,
    };
};

export const deleteEmployee = id => {
    return {
        type: DELETE_EMPLOYEES,
        payload: id,
    };
};
