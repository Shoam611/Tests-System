import "./Input.css";

const Input = (props) => {
    const classes = 'Input ' + props.className;
    return (
        <div className={classes}>
            <input value={props.value}
                onChange={(e) => { props.onChange && props.onChange(e) }}

                type={props.type || 'text'}
                placeholder={props.placeholder}
                min={props.min}
                max={props.max}
                maxLength={props.maxLength} />
        </div>
    )
}

export default Input;