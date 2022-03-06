import { ADD, FETCH, DELETE, UPDATE } from "Store/actions/test";
const initialState = {
    tests: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD:
            const tests = state.tests;
            tests.push({...action.newTest,updatedAt:new Date().toISOString()})
            return { ...state, tests: tests }

        case FETCH:
            if (action.newTest) {
                return { ...state, tests: action.newTest }
            }
            return state;

        case UPDATE:
            const newTests = state.tests;
            newTests.filter(t => t._id !== action.id);
            newTests.push({ ...action.newTest, _id: action.id, updatedAt: new Date().toISOString() });
            return { ...state, tests: newTests }

        case DELETE: break;
        default: return state;
    }
}

export default reducer;