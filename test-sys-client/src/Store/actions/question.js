import axios from 'axios';
import { runPostRequest } from 'services/htttpInvoker'
export const ADD = 'ADD';
export const FETCH = 'FETCH';
export const DELETE = 'DELETE';

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
        const topic=getState().topic.topic;
        console.log('topic: ',topic.name);
        const response = await axios.get(`http://localhost:4200/questions?oneOrMany=many&skip=0&take=20&topic=${topic.name}`);
        const responseData = await response.data;
        dispatch({ type: FETCH, newQuestions: responseData })
    }
}