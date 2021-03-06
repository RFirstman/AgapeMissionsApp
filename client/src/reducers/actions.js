import * as actionTypes from "./actionTypes";
import adminService from "../services/adminService"
import userService from "../services/userService";
import groupService from "../services/groupService";
import { jobSiteService } from "../services/jobSiteService";

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

export const adminLogin = ({ email, password }) => async dispatch => {
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

export const addUser = ({ firstName, lastName }) => async dispatch => {
    dispatch({ type: actionTypes.ADD_USER });

    try {
        await userService.createUser(firstName, lastName);
        dispatch({ type: actionTypes.ADD_USER_FAILURE });
    } catch (err) {
        //console.log(err);
        dispatch({ type: actionTypes.ADD_USER_FAILURE })
    }
}

export const addGroup = (userIds, jobSiteIds, number) => async dispatch => {
    dispatch({ type: actionTypes.ADD_GROUP });

    try {
        await groupService.createGroup(userIds, jobSiteIds, number);
        dispatch({ type: actionTypes.ADD_GROUP_SUCCESS });
    } catch (err) {
        dispatch({ type: actionTypes.ADD_GROUP_FAILURE });
    }
}

export const approveUsers = (userIds) => async dispatch => {
    dispatch({ type: actionTypes.APPROVE_USER });

    try {
        await userService.approveUsers(userIds);
        dispatch({ type: actionTypes.APPROVE_USER_SUCCESS });
    } catch (err) {
        dispatch({ type: actionTypes.APPROVE_USER_FAILURE });
    }
}

export const addJobSite = ({ name, address, city, state, zip, phone }) => async dispatch => {
    dispatch({ type: actionTypes.ADD_JOBSITE });
    
    try {
        await jobSiteService.createJobSite({ name, address, city, state, zip, phone: phone.replace(/\D/g, "")});
        dispatch({ type: actionTypes.ADD_JOBSITE_SUCCESS })
    } catch(err) {
        dispatch({ type: actionTypes.ADD_JOBSITE_FAILURE })
    }
}