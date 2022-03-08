import { runPostRequest } from 'services/httpInvoker'
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
            dispatch({ type: ADD, newUser: { ...user, _id } });
            temp = { ...user, _id }
        }
        console.log(temp);
        dispatch({ type: SET, user: temp });
    }
}

const compareUsers = (user, array) => array.find(u => u.email.toLowerCase() === user.email.toLowerCase() || u.phoneNumber === user.phoneNumber);

