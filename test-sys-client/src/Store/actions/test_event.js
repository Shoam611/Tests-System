import axios from 'axios';
import { runPostRequest, runPutRequest } from 'services/httpInvoker';
//--
export const ADD = 'ADDUSER';
export const SET = 'SETQUESTIONRECORD';
export const FETCH = 'FETCHQUESTIONRECORDS';
export const DELETE = 'DELETEQUESTIONRECORDS';
export const UPDATE = 'UPDATEQUESTIONRECORDS';
//---
//new Actions
export const SETINITIALS = 'SETSETINITIALS';
export const ADDRECORD='ADDRECORD';
export const EDITRECORD = 'EDITRECORD';

export const setUser = (user) => {
    return async (dispatch, getState) => {
        const users = getState().users.users;
        let temp = compareUsers(user, users);
        let _id = '';
        if (!temp) {
            const response = await runPostRequest('http://localhost:4200/users', { newUser: user });
            _id = await response;
            dispatch({ type: ADD, newUser: { ...temp, _id } });
        } else {
            addTest(temp, user);
            const id = temp._id;
            _id = await runPutRequest('http://localhost:4200/users', { newUser: temp, id });
        }
        dispatch({ type: SET, user: { ...temp, _id } });
    }
}

const compareUsers = (user, array) => array.find(u => u.email.toLowerCase() === user.email.toLowerCase() || u.phoneNumber === user.phoneNumber);

const addTest = (temp, user) => {
    if (!temp.testsIds.includes(user.testsIds)) {
        temp.testsIds = [...temp.testsIds, user.testsIds];
    }
    return temp;
}

export const updateQuestion =()=>{

}

const calcScore =() => {

}