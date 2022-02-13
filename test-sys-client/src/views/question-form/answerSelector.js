import { useState,useEffect } from "react";
import {Line,Input,Btn ,Rows , RadioButton} from 'UIKit';
const AwnsersSelector = props => {

    const getId = () =>{return props.list.length > 0 ? props.list.at(-1).id : 1 ;}
    const [list] = useState(props.list);

    return (
        <Rows>
            <Btn i="plus" onClick={props.onAddingAwnser} />
            <RadioButton selected={props.selected} onChange={props.onChange} list={list}  />
            <hr />
        </Rows>
    )
}
export default AwnsersSelector