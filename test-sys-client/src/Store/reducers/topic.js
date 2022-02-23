import { FETCH } from "Store/actions/topic";
const initialState = {
    topic:{}
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'FETCHTOPIC' : return{...state,topic:action.newTopic}
        default:return state;
    }
}
export default reducer;