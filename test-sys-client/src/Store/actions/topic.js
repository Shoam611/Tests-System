import axios from "axios";
export const FETCH = 'FETCHTOPIC'

export const fetchTopic = () =>{
    return async (dispatch,getState) =>{
        const newTopic = await (await axios.get('http://localhost:4200/topic')).data;
        dispatch({type:FETCH,newTopic});
    }
}