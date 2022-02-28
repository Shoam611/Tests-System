import { ADD, FETCH, DELETE, UPDATE } from "Store/actions/user";
const initialState = {
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            const users = state.users;
            users.push(action.newUser);
            return { ...state, users: users }

        case FETCH:
            if (action.newUser) {
                return { ...state, users: action.newUser }
            }
            return state;

        case UPDATE:
            const newUsers = state.users;
            newUsers.filter(u => u._id !== action.id);
            newUsers.push({ ...action.newUser, _id: action.id, updatedAt: new Date().toISOString() });
            return { ...state, users: newUsers }

        case DELETE: break;
        default: return state;
    }
}

export default reducer;