import SUBMIT_LUNCH_ORDER from "./actionTypes";

export default function lunchOrderReducer(state = {}, action) {
    switch (action.type) {
        case SUBMIT_LUNCH_ORDER:
            return {
                user: action.values,
                ...state
            }
        default:
            return state;
    }
}