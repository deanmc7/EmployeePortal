import {
    FETCH_EMPLOYEES,
    NEW_EMPLOYEES,
    DELETE_EMPLOYEES,
    EMPLOYEES_LOADING,
    FETCH_SINGLE_EMPLOYEE,
} from "../actions/types";

const initialState = {
    employees: [],
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEES:
            return {
                ...state,
                employees: action.payload,
                loading: false,
            };
        case NEW_EMPLOYEES:
            return {
                ...state,
                employees: [action.payload, ...state.employees],
            };
        case DELETE_EMPLOYEES:
            return {
                ...state,
                employees: state.employees.filter(employee => employee._id !== action.payload),
            };
        case EMPLOYEES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case FETCH_SINGLE_EMPLOYEE:
            return {
                ...state,
                employees: action.payload,
            };
        default:
            return state;
    }
}
