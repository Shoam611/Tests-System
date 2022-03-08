import axios from 'axios';
import { runPostRequest, runPutRequest } from 'services/httpInvoker';
export const ADD = 'ADDUSER';
export const SET = 'SETQUESTIONRECORD';
export const FETCH = 'FETCHQUESTIONRECORD';
export const DELETE = 'DELETEQUESTIONRECORD';
export const UPDATE = 'UPDATEQUESTIONRECORD';

export const setUser = (user) => {
    return async (dispatch, getState) => {
        const users = getState().users.users;
        let temp = compareUsers(user, users);
        if (!temp) {
            const response = await runPostRequest('http://localhost:4200/users', { newUser: user });
            const _id = await response;
            dispatch({ type: ADD, newUser: { ...temp, _id } });
        }
        addTest(temp, user);
        const id = temp._id;
        const _id = await runPutRequest('http://localhost:4200/users', { newUser: temp, id });
        dispatch({ type: SET, user: { ...temp, _id } });
    }
}

export const fetchCurrentUser = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`http://localhost:4200/users`);
        dispatch({ type: FETCH, newUser: response.data });
    }
}

const compareUsers = (user, array) => array.find(u => u.email.toLowerCase() === user.email.toLowerCase() || u.phoneNumber === user.phoneNumber);

const addTest = (temp, user) => {
    if (!temp.testsIds.includes(user.testsIds)) {
        temp.testsIds = [...temp.testsIds, user.testsIds];
    }
    return temp;
}

