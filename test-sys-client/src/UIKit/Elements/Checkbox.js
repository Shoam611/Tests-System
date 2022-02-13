import { useState } from "react";
import Line from "UIKit/Layouts/Line";

import './Checkbox.css'
const Checkbox = props =>{
//const [isSelected,setIsSelected] = useState(!!props.checked );

const onSelectionHandler = () => {
  //  setIsSelected(!isSelected);
    //props.onCklick(!isSelected)
    props.onCklick()
}
const renderCheckBox = () =>{
    return  props.value?
            <i className="fas fa-check-square"></i> :
            <i className="far fa-check-square"></i>
}
    return (
        <div className="CheckBox"  onClick = {onSelectionHandler} >
        <Line justify="start" >
           <div className="iconContainer">
           {renderCheckBox()}        
        </div>
            <p>{props.content}</p>
        </Line>
        </div>
    )
}

export default Checkbox;