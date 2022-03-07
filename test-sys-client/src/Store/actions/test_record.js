import axios from 'axios';
export const ADD = 'ADDUSER';
export const SET = 'SETQUESTIONRECORD';
export const FETCH = 'FETCHQUESTIONRECORD';
export const DELETE = 'DELETEQUESTIONRECORD';
export const UPDATE = 'UPDATEQUESTIONRECORD';

export const setUser = (user) => {
    return async (dispatch, getState) => {
        const users = getState().users.users;
        console.log('user >', users);
        const temp = compareUsers(user, users);
        if(users === undefined || temp === undefined){
            return false;
        }
        if (!temp) {
            const _id = await (await axios.post('http://localhost:4200/user', { user: user })).data;
            dispatch({ type: ADD, newUser: { _id, ...user } });
            return true;
        }
        dispatch({ type: SET, user: temp });
        return true;
    }
}

const compareUsers = (user, array) => {
    const temp = array.find(u => u.email.toLowerCase() === user.email.toLowerCase() || u.phoneNumber === user.phoneNumber);
    console.log('inside of comparing',temp);
}
