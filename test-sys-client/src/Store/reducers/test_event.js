import { FETCH, DELETE, UPDATE, SET } from "Store/actions/test_event";
import QuestionRecord from "models/questionRecord";
const initialState = {
    questionRecords: [],
    user: {},
    testTaken: '',
    score: NaN,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET:
            const temp = state;
            temp.user = { ...action.user, updatedAt: new Date().toISOString() };
            return { ...state, questionRecords: temp };

        case UPDATE: return state;
        // case FETCH:
        //     if (action.newQuestionReports) {
        //         return { ...state, questionRecords: action.newQuestionReports };
        //     }
        //     else
        //         return state;
        default: return state;
    }
}
export default reducer;