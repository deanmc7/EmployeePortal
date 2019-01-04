import { FETCH_EMPLOYEES, NEW_EMPLOYEES, DELETE_EMPLOYEES } from "./types";

export const fetchEmployees = () => {
    return {
        type: FETCH_EMPLOYEES,
    };
};

export const newEmployee = () => {};

export const deleteEmployee = () => {};
