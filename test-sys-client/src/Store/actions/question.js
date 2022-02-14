export const ADD = 'ADD';
export const FETCH = 'FETCH';
export const DELETE = 'DELETE';

export const addQuestion= (newQuestion) => {
    return (dispatch)=>{
        dispatch({type:ADD,newQuestion})
    }
}