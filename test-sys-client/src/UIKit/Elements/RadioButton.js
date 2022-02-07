import { useState } from "react";
import Line from "UIKit/Layouts/Line";



const RadioButton = props => {

//const[selectedId,setSelectedId] =useState(undefined);


const renderListOptions = () => {
    //console.log(list)
    return <ul>
        {
        props.value.map(item  => 
            renderRadioItem(item.id,
                            item.value,
                            item.id===props.selected)
                )}
    </ul>
}
const renderRadioItem = (id,value,isSelected) => {
    return(
        <li key={id} onClick={()=>{props.onChange(id)}}>
            <Line justify="between">
            
                {
                    isSelected?
                    <i className="fas fa-circle"></i>:
                    <i className="far fa-circle"></i>
                }
              
            <p>{value}</p>
            </Line>
        </li>
    )
}
return (
    <div>
        {renderListOptions()}
    </div>
)


}

export default RadioButton;