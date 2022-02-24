import { useReducer } from "react";
import Line from "UIKit/Layouts/Line";
const RadioButton = ({ list }) => {
    const [_, forceUpdate] = useReducer(x => x + 1, 0);
    const onSelectionChanged =(id)=>{
        list.forEach(element => {
            element.isSelected = (id===element.id)
        });
        forceUpdate();
    }
    const renderListOptions = () => {
        return list.map(item => <RadioItem  key={item.id} 
                                            id={item.id} 
                                            render={item.render} 
                                            isSelected={item.isSelected} 
                                            onChange={onSelectionChanged}/>)
    };
    return (
        <div>
            <ul>
                {renderListOptions()}
            </ul>
        </div>
    )
}
const RadioItem = ({ id, render, onChange,isSelected }) => {

    const onSelectionChangedHandler = () => {
        onChange(id);
    }

    return (
        <li key={id} style={{ marginTop:"10px"}}>
            <Line justify="start">
                <div onClick={onSelectionChangedHandler}>
                    <i className={isSelected ? "fas fa-circle" : "far fa-circle"}></i>
                </div>
                <div >{render}</div>
            </Line>
        </li>)
}
export default RadioButton;