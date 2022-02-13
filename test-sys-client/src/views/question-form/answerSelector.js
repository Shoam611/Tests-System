import { useState,useEffect } from "react";
import {Line,Input,Btn ,Rows , RadioButton} from 'UIKit';
const AwnsersSelector = props => {
    const onRemove = (id) => {
        const index = list.indexOf(list.find(i => i.id === id))
        if (index >= 0) { list.splice(index, 1); }
    }
    const [list] = useState(props.list);
    // const onChange = (newAwnserIndex) => { setSelectedAwnser(newAwnserIndex);props.onChange(newAwnserIndex); }
    return (
        <Rows>
            <Btn i="plus" />
            <RadioButton selected={props.selected} onChange={props.onChange} list={list}  />
            <hr />
        </Rows>
    )
}
export default AwnsersSelector