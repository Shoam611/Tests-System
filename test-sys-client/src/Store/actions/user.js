import axios from 'axios';
import { runPostRequest } from 'services/httpInvoker'
export const ADD = 'ADDUSER';
export const FETCH = 'FETCHUSER';
export const DELETE = 'DELETEUSER';
export const UPDATE = 'UPDATEUSER';

export const addUser = (newUser) => {
    return async (dispatch, getState) => {
        const response = await runPostRequest('http://localhost:4200/users', { newUser: newUser });
        const _id = await response;
        dispatch({ type: ADD, newUser: {...newUser, _id } })
    }
}

export const fetchUsers = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`http://localhost:4200/users`);
        dispatch({ type: FETCH, newUsers: response.data });
    }
}