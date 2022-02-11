import Line from "UIKit/Layouts/Line";
const RadioButton = ({ list, selected, onChange }) => {
    const renderListOptions = () => {
        return list.map(item => <RadioItem key={item.id} id={item.id} value={item.value} isSelected={item.id === selected} onChange={onChange}/>)
    };
    return (
        <div>
            <ul>
                {renderListOptions()}
            </ul>
        </div>
    )
}
const RadioItem = ({ id, value, isSelected, onChange }) => {
    return (
        <li key={id} style={{ margin: " 10px" }}>
            <Line justify="evenly">
                <div onClick={() => { onChange(id) }}>
                    <i className={isSelected ? "fas fa-circle" : "far fa-circle"}></i>
                </div>
                <div >{value}</div>
            </Line>
        </li>)
}
export default RadioButton;