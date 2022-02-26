import axios from 'axios';
import { runPostRequest, runPutRequest } from 'services/httpInvoker'
export const ADD = 'ADD';
export const FETCH = 'FETCH';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';

export const addTest = (newTest) => {
    return async (dispatch, getState) => {
        console.log('posting...');
        const response = await runPostRequest('http://localhost:4200/tests', { newTest: newTest });
        const _id = await response.data;
        console.log("added ", _id);
        dispatch({ type: ADD, newTest: { _id, ...newTest } })
    }
}

export const updateTest = (newTest, id) => {
    return async (dispatch) => {
        console.log('puting...');
        const response = await runPutRequest('http://localhost:4200/tests', { newTest: newTest, id: id });
        const _id = await response;
        console.log("updated ", _id);
        dispatch({ type: UPDATE, newTest: { _id, ...newTest }, id: id })
    }
}

export const fetchTests = () => {
    return async (dispatch, getState) => {
        const response = await axios.get(`http://localhost:4200/tests`);
        const responseData = await response.data;
        dispatch({ type: FETCH, newTest: responseData })
    }
}

