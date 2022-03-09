import { SETINITIALS, ADDRECORD, EDITRECORD } from "Store/actions/test_event";
import QuestionRecord from "models/questionRecord";

const initialState = {
    questionRecords: [],
    user: {},
    testTaken: '',
    score: NaN,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SETINITIALS:
            const temp = state;
            temp.testTaken = action.initial.testId;
            temp.user = { ...action.initial.user, updatedAt: new Date().toISOString() };
            return { ...state, questionRecords: temp };

        case ADDRECORD:
            return state;

        case EDITRECORD:
            return state;

        default: return state;
    }
}
export default reducer;