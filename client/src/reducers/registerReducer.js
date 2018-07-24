import SUBMIT_REGISTER from "./actionTypes";

export default function registerReducer(state = {}, action) {
    switch (action.type) {
    case SUBMIT_REGISTER:
        console.log(action)
        return {
            user: action.values,
            ...state
        }
    default:
        return state;
    }
}