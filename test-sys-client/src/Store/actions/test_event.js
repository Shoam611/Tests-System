import { runPostRequest, runPutRequest } from 'services/httpInvoker';
export const ADD = 'ADDUSER';
export const SETINITIALS = 'SETSETINITIALS';
export const SUBMITRECORD = 'SUBMITRECORD';
export const UPDATERECORD = 'UPDATEEVENT';

export const setInitial = (user, testId) => {
    return async (dispatch, getState) => {
        const users = getState().users.users;
        let temp = compareUsers(user, users);
        let _id = '';
        if (!temp) {
            const response = await runPostRequest('http://localhost:4200/users', { newUser: user });
            _id = await response;
            dispatch({ type: ADD, newUser: { ...temp, _id } });
        } else {
            addTest(temp, user);
            const id = temp._id;
            _id = await runPutRequest('http://localhost:4200/users', { newUser: temp, id });
        }
        dispatch({ type: SETINITIALS, initial: { user: { ...temp, _id }, testId: testId } });
    }
}

export const updateQuestion = (question_id, selectedAnswersIndexes) => {
    return (dispatch, getState) => {
        dispatch({ type: UPDATERECORD, question_id, selectedAnswersIndexes });
    }
}

export const submitRecord = (userId, testId, score) => {
    return async (dispatch, getState) => {
        const questionRecord = getState().testRecord.questionRecords;
        const recordForServer = { questions: questionRecord, userId: userId, testId: testId, score: score };
        await runPostRequest("http://localhost:4200/testRecords", { newTestReport: recordForServer });

        dispatch({ type: SUBMITRECORD });
    }
}
const compareUsers = (user, array) => array.find(u => u.email.toLowerCase() === user.email.toLowerCase() || u.phoneNumber === user.phoneNumber);

const addTest = (temp, user) => {
    if (!temp.testsIds.includes(user.testsIds)) {
        temp.testsIds = [...temp.testsIds, user.testsIds];
    }
    return temp;
}