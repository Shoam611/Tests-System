import { FETCH, DELETE, UPDATE, SET } from "Store/actions/test_record";
const initialState = {
    questionRecords: [
        {
            questions: [],
            user: {},
            testTaken: '',
            score: NaN
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET:
            const temp = state;
            temp.user.splice(0, 0, { ...action.user, updatedAt: new Date().toISOString() });
            return { ...state, questionRecords: temp };

        case FETCH:
            if (action.newQuestionReports) {
                return { ...state, questionRecords: action.newQuestionReports };
            }
            else
                return state;

        case DELETE: return state;

        case UPDATE: return state;

        default: return state;
    }
}
export default reducer;