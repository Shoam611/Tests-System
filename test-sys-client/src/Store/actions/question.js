;import axios from 'axios'
export const ADD = 'ADD';
export const FETCH = 'FETCH';
export const DELETE = 'DELETE';

export const addQuestion = (newQuestion) => {
    return async (dispatch, getState) => {
        const response = axios.post('http://localhost:9200/questions',newQuestion);
        const resStatus = await response.status
        if(resStatus.toString()[0]!='2')
        {
            throw new Error('failed to post new question');
        }
        const responseData = await response.json();
        dispatch({ type: ADD, newQuestion })
    }
}

export const fetchQuestions = (/*range: from - to*/) =>{
    return (dispatch,getState) =>{
        dispatch({type:FETCH})
    }
}