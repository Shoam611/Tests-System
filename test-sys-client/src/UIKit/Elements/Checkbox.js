import { useEffect, useState } from "react";
import Line from "UIKit/Layouts/Line";
import './Checkbox.css'
const Checkbox = ({ list }) => {

    const onSelctionChanged = (id, value) => {
        list.forEach(item => {
            if (item.id === id) {
                item.isSelected = value;
                item.onChange(item.value, value);
            }
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

const CheckboxItem = ({ onChange, render, id, selected }) => {
    const [checked, setChecked] = useState(selected);
    const [toRender, setRender] = useState(render);

    const onSelectionHandler = () => {
        setChecked(!checked);
        onChange(id, !checked);
        setRender({ ...render, props: { ...render.props, className: !checked ? 'active' : '' } });
    }
    return (
        <li key={id} style={{ marginTop: "10px" }}>
            <Line>
                <div className="iconContainer" onClick={() => { onSelectionHandler() }}>
                    <i className={checked ? "fas fa-check-square" : "far fa-check-square"} />
                </div>
                <div>{toRender}</div>
            </Line>
        </li>
    )
}

export default Checkbox;