import * as actions from "./actionTypes";

export function submitRegistration(values) {
    return {
        type: actions.SUBMIT_REGISTER,
        values
    }
}

export function submitLunchOrder(values) {
    return {
        type: actions.SUBMIT_LUNCH_ORDER,
        values
    }
}