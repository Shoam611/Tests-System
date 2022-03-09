import { runPostRequest, runPutRequest } from 'services/httpInvoker';
export const ADD = 'ADDUSER';
export const SETINITIALS = 'SETSETINITIALS'; // testId and user
export const ADDRECORD = 'ADDEVENT'; // on first adding
export const UPDATERECORD = 'UPDATEEVENT'; // replace with new one everytime

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

export const updateQuestion = (questionIndex, selectedAnswersIndexes) => {
    return (dispatch, getState) => {
        dispatch({ type: UPDATERECORD, questionIndex, selectedAnswersIndexes });
    }
}

const calcScore = () => {
    // calc method: 100 / number of questions with wasRight value === true;
}
const compareUsers = (user, array) => array.find(u => u.email.toLowerCase() === user.email.toLowerCase() || u.phoneNumber === user.phoneNumber);

const addTest = (temp, user) => {
    if (!temp.testsIds.includes(user.testsIds)) {
        temp.testsIds = [...temp.testsIds, user.testsIds];
    }
    return temp;
}