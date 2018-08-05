import { ADMIN_LOGIN_REQUEST, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE, ADMIN_LOGOUT } from "./actionTypes";

const initialState = { loggedIn: false, loggingIn: false }

export default function adminReducer(state = initialState, action) {
    switch (action.type) {
        case ADMIN_LOGIN_REQUEST:
            return {
                loggingIn: true,
                email: action.email
            }
        case ADMIN_LOGIN_SUCCESS:
            return {
                loggingIn: false,
                loggedIn: true,
                email: action.email
            }
        case ADMIN_LOGIN_FAILURE:
            return {}
        case ADMIN_LOGOUT:
            return { loggedIn: false, loggingIn: false }
        default:
            return state;
    }
}