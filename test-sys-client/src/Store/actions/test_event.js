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

export const submitRecord = (userId, testId, questions, pickedAnswers) => {
    return async (dispatch, getState) => {
        console.log('submitted');
        const questionRecord = getState().testRecord.questionRecords;
        const score = calcScore(questions, pickedAnswers);
        const recordForServer = { questions: questionRecord, userId: userId, testId: testId, score: score };
        const response = await runPostRequest("http://localhost:4200/testRecords", { newTestReport: recordForServer });
        console.log(response);
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

const calcScore = (questions, pickedAnswers) => {
    let score = 100;
    let answers = [];
    let subtract = 100 / questions.length;
    for (let i = 0; i < questions.length; i++) {
        for (let j = 0; j < pickedAnswers.length; j++) {
            if (questions[i]._id === pickedAnswers[j].questionId) {
                if (questions[i].correctAnswerIds) {
                    const result = questions[i].correctAnswerIds.map(a => pickedAnswers[j].selectedAnswersIds.some(ab => a === ab.id));
                    if (result.every(r => r === true)) {
                        pickedAnswers[j].wasRight = true;
                        answers.push(true);
                    }
                    else {
                        pickedAnswers[j].wasRight = false;
                        answers.push(false);
                    }
                }
            }
        }
    }
    answers.forEach(element => (
        element === true ? '' : score -= subtract
    ))
    return score;
}