import axios from "axios";
import { FETCH_ALL_HOLIDAYS } from "../actions/types";

export const fetchAllHolidays = () => dispatch => {
    //dispatch(setHolidaysLoading());
    axios.get("/holidays/all").then(res =>
        dispatch({
            type: FETCH_ALL_HOLIDAYS,
            payload: res.data,
        })
    );
};
