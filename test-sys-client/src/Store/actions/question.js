import axios from 'axios';
import { runPostRequest } from 'services/httpInvoker'
export const ADD = 'ADDQUESTION';
export const FETCH = 'FETCHQUESTION';
export const DELETE = 'DELETEQUESTION';
export const UPDATE = 'UPDATEQUESTION';

export const addQuestion = (newQuestion) => {
    return async (dispatch, getState) => {
        console.log('posting...');
        const response = await runPostRequest('http://localhost:4200/questions', { newQuestion: newQuestion });
        const _id = await response.data;
        console.log("added ", _id);
        dispatch({ type: ADD, newQuestion: { _id, ...newQuestion } })
    }
}

export const fetchQuestions = () => {
    return async (dispatch, getState) => {
        const topic = getState().topic.topic;
        const response = await axios.get(`http://localhost:4200/questions?topic=${topic._id}`);
        const responseData = await response.data;
        dispatch({ type: FETCH, newQuestions: responseData })
    }
}

export const updateQuestion = (newQuestion, id) => {
    return async (dispatch) => {
        try {
             await axios.put('http://localhost:4200/questions', { newQuestion, id });
            dispatch({ type: UPDATE, newQuestion, id });
        } catch { console.error('falied sending put request to server'); dispatch({ type: 'x' }) }
    }
}