import * as actionTypes from "./actionTypes";
import adminService from "../services/adminService"

export function submitRegistration(values) {
    return {
        type: actionTypes.SUBMIT_REGISTER,
        values
    }
}

export function submitLunchOrder(values) {
    return {
        type: actionTypes.SUBMIT_LUNCH_ORDER,
        values
    }
}

export const adminLogin = ({email, password}) => async dispatch => {
    dispatch({ type: actionTypes.ADMIN_LOGIN_REQUEST, email });

    try {
        let adminEmail = await adminService.login(email, password);
        dispatch({ type: actionTypes.ADMIN_LOGIN_SUCCESS, adminEmail })
    } catch (err) {
        dispatch({ type: actionTypes.ADMIN_LOGIN_FAILURE })
    }
}

export const adminLogout = () => dispatch => {
    dispatch({ type: actionTypes.ADMIN_LOGOUT })
}