import './GradientBorder.css'
const GradientBorder = props => {

    return (
        <div style={{ margin: '5px' }}>
            <div className={`gradient-box`}
                right={(props.right || props.all) && ''}
                bottom={(props.bottom || props.all) && ''}
                left={(props.left || props.all) && ''}
                top={(props.top || props.all) && ''}
                to={props.to}>
                {props.children}
            </div>
        </div>
    )
}

export default GradientBorder