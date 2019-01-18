import axios from "axios";
import { FETCH_EMPLOYEES, NEW_EMPLOYEES, DELETE_EMPLOYEES, EMPLOYEES_LOADING, FETCH_SINGLE_EMPLOYEE } from "./types";

export const fetchEmployees = () => dispatch => {
    dispatch(setEmployeesLoading());
    axios.get("/employees").then(res =>
        dispatch({
            type: FETCH_EMPLOYEES,
            payload: res.data,
        })
    );
};

export const fetchSingleEmployee = id => dispatch => {
    axios.get(`/employees/${id}`).then(res =>
        dispatch({
            type: FETCH_SINGLE_EMPLOYEE,
            payload: res.data,
        })
    );
};

export const newEmployee = employee => dispatch => {
    axios.post("/employees", employee).then(res =>
        dispatch({
            type: NEW_EMPLOYEES,
            payload: res.data,
        })
    );
};

export const deleteEmployee = id => dispatch => {
    axios.delete(`/employees/${id}`).then(res =>
        dispatch({
            type: DELETE_EMPLOYEES,
            payload: id,
        })
    );
};

export const setEmployeesLoading = () => {
    return {
        type: EMPLOYEES_LOADING,
    };
};
