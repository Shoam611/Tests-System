import { ADD, FETCH, DELETE } from "Store/actions/test";
const initialState = {
    tests: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case ADD:

            const tests = state.tests;
            tests.push(action.newTest)
            return { ...state, tests: tests }

        case FETCH:
            if (action.newTest) {
                // const tests =Enumerable.create(...tests,action.data).distinctBy(t=>t._id);
                return { ...state, tests: action.newTest }
            }

            return state;
        case DELETE: break;

        default: return state;
    }
}