import { ADD,FETCH,DELETE } from "Store/actions/question";
const initialState = {
    questions:[]
}

export default (state=initialState,action) =>{
    
    switch(action.type)
    {
        case ADD: 
        
        const questions =state.questions;
        questions.push(action.newQuestion)
        return {...state,questions:questions }
        
        case FETCH : /* */
        // if(action.range fit for questions,range)
        // {
        // } else askServer();
        return state;
        case DELETE :  break;
       
        default:return state;
    }
}