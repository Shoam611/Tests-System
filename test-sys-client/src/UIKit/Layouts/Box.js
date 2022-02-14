import "./Box.css";

const Box = (props) => {
    return (
        <div className={`Box ${props.className?props.className:' '}`} onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default Box;