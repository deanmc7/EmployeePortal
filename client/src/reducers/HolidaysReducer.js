import { FETCH_ALL_HOLIDAYS } from "../actions/types";

const initialState = {
    holidays: [],
    loading: false,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALL_HOLIDAYS:
            return {
                ...state,
                holidays: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
