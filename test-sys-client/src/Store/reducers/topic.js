import { FETCH } from '../actions/topic';
const initialState = {
    topic:{}
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH: return{...state,topic:action.newTopic}
        default:return state;
    }
}
export default reducer;