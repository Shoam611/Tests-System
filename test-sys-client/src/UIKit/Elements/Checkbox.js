import {  useState } from "react";
import Line from "UIKit/Layouts/Line";
import Btn from "./Btn";
import './Checkbox.css'
const Checkbox = ({ list, onChange }) => {
    //states  
    //renders
    const onSelctionChanged = (id,value) => {
        list.forEach(item => {
            if(item.id===id) item.isSelected=value;
        });
        console.log(list);
        // onChange(id);
    }
    const renderListOptions = () => {
        return list.map((value) => <CheckboxItem key={value.id}
                                                id={value.id}
                                                selected={value.checked}
                                                onChange={onSelctionChanged}
                                                render={value.render} />);
    }

    return (
        <div >
            <ul>
                {renderListOptions()}
            </ul>
            {/* <Btn onClick={() => { }} /> */}
        </div>
    )
}

const CheckboxItem = props => {

    const [checked, setChecked] = useState(false);
    const onSelectionHandler = () => {
        setChecked(!checked);
        props.onChange(props.id,!checked);
    }
    return (
        <li key={props.id} >
            <Line justify="start" >
                <div className="iconContainer" onClick={() => { onSelectionHandler() }}>
                    <i className={checked ? "fas fa-check-square" : "far fa-check-square"} />
                </div>
                <div>{props.render}</div>
            </Line>
        </li>
    )
}

export default Checkbox;