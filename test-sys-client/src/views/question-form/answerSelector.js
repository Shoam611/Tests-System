import { useState,useEffect } from "react";
import {Line,Input,Btn ,Rows , RadioButton , Checkbox} from 'UIKit';
// import Checkbox from "UIKit/Elements/Checkbox";
const AwnsersSelector = props => {

    const renderSelector = () => {
        switch(props.questionType)
        {
            case 1: return <RadioButton selected={props.selected} onChange={props.onChange} list={props.list}  /> ;
            case 2: return <Checkbox /*selected={props.selected}*/ onChange={props.onChange} list={props.list}  /> ;
        }
    }
    return (
        <Rows>
            <Btn i="plus" onClick={props.onAddingAwnser} />
           {renderSelector()}
            {/* {props.questionType===1 &&
            <RadioButton selected={props.selected} onChange={props.onChange} list={props.list}  /> }
            {props.questionType===2 &&
            <Checkbox selected={props.selected} onChange={props.onChange} list={props.list}  /> } */}
            <hr />
        </Rows>
    )
}
export default AwnsersSelector