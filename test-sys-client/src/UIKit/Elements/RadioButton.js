import { useState } from "react";
import Line from "UIKit/Layouts/Line";
const RadioButton = props => {
    const renderRadioItem = (id, option, isSelected) => {
        return (
            <li key={id} style={{margin:" 10px"}}>
                <Line justify="evenly">
                    <div onClick={() => { props.onChange(id) }}>
                        <i className={isSelected ? "fas fa-circle" : "far fa-circle"}></i>
                    </div>
                    <div >{option}</div>
                </Line>
            </li>
        )
    }
    const renderListOptions = () => {
        return (
            <ul>
                {props.list.map(item => renderRadioItem(item.id, item.value, item.id === props.selected))}
            </ul>
        )
    }
    return (
        <div>
            {renderListOptions()}
        </div>
    )
}

export default RadioButton;