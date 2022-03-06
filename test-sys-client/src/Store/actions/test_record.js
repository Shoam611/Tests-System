import axios from 'axios';
export const ADD = 'ADDQUESTIONRECORD';
export const SET = 'SETQUESTIONRECORD';
export const FETCH = 'FETCHQUESTIONRECORD';
export const DELETE = 'DELETEQUESTIONRECORD';
export const UPDATE = 'UPDATEQUESTIONRECORD';

export const setUser = (user) => {
    return async (dispatch) => {
        const users = getState().users.users;
        const temp = compareUsers(user, users);
        if (!temp) {
            const _id = await (await axios.post('http://localhost:4200/user', { user: user })).data;
            dispatch({ type: ADD, newUser: { _id, ...user } });
        }
        dispatch({ type: SET, user: temp });
    }
}

const compareUsers = (user, array) => array.find(u => u.email === user.email);
