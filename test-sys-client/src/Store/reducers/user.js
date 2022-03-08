import { ADD, FETCH, DELETE, UPDATE } from "Store/actions/user";
const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const usersTemp = state.users;
            usersTemp.push(action.newUser);
            return { ...state, users: usersTemp }

        case FETCH:
            if (action.newUser) {
                return { ...state, users: action.newUser }
            }
            return state;

        case UPDATE:
            const temp = state.users;
            const newUsers = temp.filter(u => u._id !== action.id);
            newUsers.push({ ...action.newUser, _id: action.id, updatedAt: new Date().toISOString() });
            return { ...state, users: newUsers }

        case DELETE: break;
        default: return state;
    }
}

export default reducer;