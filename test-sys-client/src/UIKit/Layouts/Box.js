import "./Box.css";

const Box = (props) => {
    return (
        <div className="Box" onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default Box;