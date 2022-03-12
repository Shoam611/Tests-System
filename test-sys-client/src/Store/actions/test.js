import axios from 'axios';
import { runPostRequest, runPutRequest } from 'services/httpInvoker'
export const ADD = 'ADDTEST';
export const FETCH = 'FETCHTEST';
export const DELETE = 'DELETETEST';
export const UPDATE = 'UPDATETEST';

export const addTest = (newTest) => {
    return async (dispatch) => {
        const response = await runPostRequest('http://localhost:4200/tests', { newTest: newTest });
        const _id = await response;
        dispatch({ type: ADD, newTest: { ...newTest, _id } })
    }
}

export const fetchTests = () => {
    return async (dispatch, getState) => {
        const topic = getState().topic.topic;
        const response = await axios.get(`http://localhost:4200/tests?topic=${topic._id}`);
        const responseData = await response.data;
        dispatch({ type: FETCH, newTest: responseData })
    }
}

export const updateTest = (newTest, id) => {
    return async (dispatch) => {
        await runPutRequest('http://localhost:4200/tests', { newTest, id });
        dispatch({ type: UPDATE, newTest, id });
    }
}