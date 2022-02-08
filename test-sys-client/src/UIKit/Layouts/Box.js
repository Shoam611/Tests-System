import "./Box.css";

const Box = (props) => {
    return (
        <div className="Box" {...props}>
            {props.children}
        </div>
    )
}

export default Box;