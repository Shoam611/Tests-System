import { SETINITIALS, ADDRECORD, UPDATERECORD } from "Store/actions/test_event";
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
            return { ...state, testTaken: temp.testTaken, user: temp.user };

        case ADDRECORD:
            return state;

        case UPDATERECORD:
            const tempArray = state.questionRecords;
            const element = (tempArray.find(qr => qr.questionId === action.questionIndex));

            if (element) {
                element.selectedAnswersIds = action.selectedAnswersIndexes;
                return { ...state, questionRecords: tempArray };
            }
            else {
                const questionRecord = new QuestionRecord(action.questionIndex, action.selectedAnswersIndexes);
                tempArray.push(questionRecord);
                return { ...state, questionRecords: tempArray };
            }

        default: return state;
    }
}
export default reducer;