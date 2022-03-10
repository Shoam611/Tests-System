import { SETINITIALS, SUBMITRECORD, UPDATERECORD } from "Store/actions/test_event";
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
            return { ...state, testTaken: action.initial.testId, user: { ...action.initial.user, updatedAt: new Date().toISOString() } };

        case UPDATERECORD:
            const tempArray = state.questionRecords;
            const element = (tempArray.find(qr => qr.questionId === action.questionIndex));

            if (element) {
                element.selectedAnswersIds = action.selectedAnswersIndexes;
                return { ...state, questionRecords: tempArray };
            }
            else {
                const questionRecord = new QuestionRecord(action.question_id, action.selectedAnswersIndexes);
                tempArray.push(questionRecord);
                return { ...state, questionRecords: tempArray };
            }

        case SUBMITRECORD:
            return {
                questionRecords: [],
                user: {},
                testTaken: '',
                score: NaN,
            }

        default: return state;
    }
}
export default reducer;