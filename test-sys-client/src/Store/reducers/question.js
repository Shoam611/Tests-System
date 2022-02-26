//import Enumerable from 'node-enumerable';
import { ADD, FETCH, DELETE, UPDATE } from "Store/actions/question";
const initialState = {
    questions: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:

            const questions = state.questions;
            questions.push(action.newQuestion)
            return { ...state, questions: questions }

        case FETCH:
            if (action.newQuestions) {
                // const questions =Enumerable.create(...questions,action.data).distinctBy(q=>q._id);
                return { ...state, questions: action.newQuestions }
            }
            return state;
        case DELETE: return state;
        case UPDATE:
            const newQuestions = state.questions;
            newQuestions.filter(q => q._id !== action.id);
            newQuestions.push({ ...action.newQuestion, _id:action.id });
            return { ...state, questions: newQuestions }
        default: return state;
    }
}
export default reducer;