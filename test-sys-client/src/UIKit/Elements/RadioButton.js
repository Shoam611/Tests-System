import { useReducer } from "react";
import Line from "UIKit/Layouts/Line";
const RadioButton = ({ list }) => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const onSelectionChanged = (id) => {
        list.forEach(element => {
            element.isSelected = (id === element.id);
            if (element.id === id) {
                element.onChange && element.onChange(element.value, element.isSelected);
            }
        });
        forceUpdate();
    }
    const renderListOptions = () => {
        return list ? list.map(item => <RadioItem key={item.id}
            id={item.id}
            render={item.render}
            isSelected={item.isSelected}
            onChange={onSelectionChanged} />) : null
    };
    return (
        <div>
            <ul>
                {renderListOptions()}
            </ul>
        </div>
    )
}
const RadioItem = ({ id, render, onChange, isSelected }) => {

    const onSelectionChangedHandler = () => {
        onChange(id);
    }

    return (
        <li key={id} style={{ marginTop: "10px" }}>
            <Line >
                <div onClick={onSelectionChangedHandler}>
                    <i className={isSelected ? "fas fa-circle" : "far fa-circle"}></i>
                </div>
                <div style={{ width: '100%' }}>{render}</div>
            </Line>
        </li>)
}
export default RadioButton;