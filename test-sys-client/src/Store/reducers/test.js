// import Enumerable from 'node-enumerable';
import { ADD, FETCH, DELETE, UPDATE } from "Store/actions/test";
const initialState = {
    tests: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:

            const tests = state.tests;
            tests.push(action.newTest)
            return { ...state, tests: tests }

        case FETCH:
            if (action.newTest) {

                return { ...state, tests: action.newTest }
            }
            return state;

        case UPDATE:
            const testing = state.tests;
            if (action.newTest) {
                const foundTest = testing.find(test => test._id === action.id);
                const indexOfTest = testing.indexOf(foundTest);
                testing.splice(indexOfTest, 1);
                testing.push({ ...action.newTest, updatedAt: new Date().toISOString() });
                return { ...state, tests: testing }
            }
            return state;
        case DELETE: break;

        default: return state;
    }
}

export default reducer;