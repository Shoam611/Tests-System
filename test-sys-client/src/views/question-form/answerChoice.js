import { useState,useEffect } from "react";
import {Line,Input,Btn} from 'UIKit';
const AnswerChoice = props => {
    const [id, setId] = useState();

    useEffect(() => {
        setId(props.id)
    }, []);
    return (
        <Line>
            <Input />
            <Btn i="minus" onClick={() => { props.onRemove(id) }} />
        </Line>
    )
}
export default AnswerChoice