import { useEffect } from "react";
import Line from "UIKit/Layouts/Line";
const RadioButton = ({ list, selected, onChange }) => {

    const renderListOptions = () => {
        return list.map(item => <RadioItem  key={item.id} 
                                            id={item.id} 
                                            render={item.render} 
                                            isSelected={item.id === selected} 
                                            onChange={onChange}/>)
    };
    return (
        <div>
            <ul>
                {renderListOptions()}
            </ul>
        </div>
    )
}
const RadioItem = ({ id, render, isSelected, onChange }) => {
    return (
        <li key={id} style={{ margin: " 10px" }}>
            <Line justify="evenly">
                <div onClick={() => { onChange(id) }}>
                    <i className={isSelected ? "fas fa-circle" : "far fa-circle"}></i>
                </div>
                <div >{render}</div>
            </Line>
        </li>)
}
export default RadioButton;