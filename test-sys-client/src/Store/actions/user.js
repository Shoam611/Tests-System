import axios from 'axios';
import { runPostRequest } from 'services/httpInvoker'
export const ADD = 'ADDTEST';
export const FETCH = 'FETCHTEST';
export const DELETE = 'DELETETEST';
export const UPDATE = 'UPDATETEST';

export const addUser = (newUser) => {
    return async (dispatch, getState) => {
        console.log('posting...');
        const response = await runPostRequest('http://localhost:4200/users', { newUser: newUser });
        const _id = await response.data;
        console.log("added ", _id);
        dispatch({ type: ADD, newUser: { _id, ...newUser } })
    }
}

export const fetchUsers = () => {
    return async (dispatch, getState) => {
        const topic = getState().topic.topic;
        const response = await axios.get(`http://localhost:4200/users?topic=${topic._id}`);
        const responseData = await response.data;
        dispatch({ type: FETCH, newUser: responseData });
    }
}