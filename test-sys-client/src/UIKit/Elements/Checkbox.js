import {  useState } from "react";
import Line from "UIKit/Layouts/Line";
import './Checkbox.css'
const Checkbox = ({ list }) => {

    const onSelctionChanged = (id,value) => {
        list.forEach(item => {
            if(item.id===id) item.isSelected=value;
        });
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
        </div>
    )
}

const CheckboxItem = ({onChange,render,id}) => {
    const [checked, setChecked] = useState(false);
    const onSelectionHandler = () => {
        setChecked(!checked);
        onChange(id,!checked);
    }
    return (
        <li key={id} style={{ marginTop:"10px"}}>
            <Line justify="start" >
                <div className="iconContainer" onClick={() => { onSelectionHandler() }}>
                    <i className={checked ? "fas fa-check-square" : "far fa-check-square"} />
                </div>
                <div>{render}</div>
            </Line>
        </li>
    )
}

export default Checkbox;