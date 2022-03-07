import { FETCH, DELETE, UPDATE, SET } from "Store/actions/test_record";
const initialState = {
    questionRecords: [],
    user: {},
    testTaken: '',
    score: NaN
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case SET:

        case FETCH:
            
            return state;

        case DELETE: return state;

        case UPDATE:
            
        default: return state;
    }
}
export default reducer;