import { useEffect, useState } from "react";
import Line from "UIKit/Layouts/Line";
import Btn from "./Btn";
import './Checkbox.css'
const Checkbox = ({ list, onChange }) => {
    const [selecteds, setSelecteds] = useState([]);

    const onSelectionChanged = (id, value) => {
        const temp = selecteds;
        temp.find(item => item.id === id).checked = value;
        setSelecteds(temp)
    }
    const onItemMounted = (id) => { selecteds.push({ id, checked: false }); }
    const onItemDelete = (id) =>{
        setSelecteds(selecteds.filter(item=>item.id!==id))
    }
    const renderListOptions = () => {
        return list.map((value, index) => (
            <CheckboxItem key={value.id}
                id={value.id}
                onChange={onSelectionChanged}
                onMounted={onItemMounted}
                onUnmounted={onItemDelete}
                render={value.render} />
        ));
    }
    return (
        <div className="CheckBox">
            <ul>
                {renderListOptions()}
            </ul>
            <Btn onClick={() => { console.log(selecteds); }} />
        </div>
    )
}
const CheckboxItem = props => {

    //state
    const [checked, setChecked] = useState(false);
    //effects
    useEffect(() => {
        props.onMounted(props.id);
        return () => { console.log(props.id); props.onUnmounted(props.id, false) }
    },[])
    //handlers
    const onSelectionHandler = () => {
        setChecked(!checked);
        props.onChange(props.id,!checked);
    }
    //renders
    const renderCheckBox = () => <i className={checked ? "fas fa-check-square" : "far fa-check-square"} />
    return (
        <li key={props.id} >
            <Line justify="start" >
                <div className="iconContainer" onClick={onSelectionHandler}>
                    {renderCheckBox()}
                </div>
                <div>{props.render}</div>
            </Line>
        </li>
    )
}

export default Checkbox;