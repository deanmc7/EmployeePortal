import { combineReducers } from "redux";
import employeeReducer from "./EmployeeReducer";
import holidaysReducer from "./HolidaysReducer";

export default combineReducers({
    employees: employeeReducer,
    holidays: holidaysReducer,
});
