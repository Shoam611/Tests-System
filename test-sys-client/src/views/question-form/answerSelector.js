import { useState,useEffect } from "react";
import {Line,Input,Btn ,Rows , RadioButton} from 'UIKit';
const AwnsersSelector = props => {

    return (
        <Rows>
            <Btn i="plus" onClick={props.onAddingAwnser} />
            <RadioButton selected={props.selected} onChange={props.onChange} list={props.list}  />
            <hr />
        </Rows>
    )
}
export default AwnsersSelector