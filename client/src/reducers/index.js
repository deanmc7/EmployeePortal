import { combineReducers } from "redux";
import employeeReducer from "./EmployeeReducer";

export default combineReducers({
    employees: employeeReducer,
});
