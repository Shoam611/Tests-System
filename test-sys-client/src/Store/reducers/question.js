//import Enumerable from 'node-enumerable';
import { ADD, FETCH, DELETE } from "Store/actions/question";
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
        case DELETE: break;

        default: return state;
    }
}
export default reducer;