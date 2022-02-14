export const ADD = 'ADD';
export const FETCH = 'FETCH';
export const DELETE = 'DELETE';

export const addQuestion = (newQuestion) => {
    return async (dispatch, getState) => {
        //can use axios here to push a product to the server
        // const response = await fetch(
        //     'url from .env',
        //     {
        //         method: 'POST',
        //         headers: { 'Content-Type': 'aplication/json'},
        //         body: JSON.stringify(newQuestion)
        //     }
        // );
        // const responseData = await response.json();
        dispatch({ type: ADD, newQuestion })
    }
}

export const fetchQuestions = (/*range: from - to*/) =>{
    return (dispatch,getState) =>{
        dispatch({type:FETCH})
    }
}