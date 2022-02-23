import axios from 'axios';
import { runPostRequest } from 'services/httpInvoker'
export const ADD = 'ADD';
export const FETCH = 'FETCH';
export const DELETE = 'DELETE';

export const addTest = (newTest) => {
    return async (dispatch, getState) => {
        console.log('posting...');
        const response = await runPostRequest('http://localhost:4200/tests', { newTest: newTest });
        const _id = await response.data;
        console.log("added ", _id);
        dispatch({ type: ADD, newTest: { _id, ...newTest } })
    }
}

export const fetchTests = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`http://localhost:4200/tests?oneOrMany=many&skip=0&take=20`);
        const responseData = await response.data;
        dispatch({ type: FETCH, newTest: responseData })
    }
}

