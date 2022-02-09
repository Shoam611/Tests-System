import './GradientBorder.css'
const GradientBorder = props =>{

    return (
        <div className={`gradient-box`}  
            right={props.right || props.all ? '' : undefined } 
            bottom={props.bottom || props.all  ? '' : undefined} 
            left={props.left || props.all  ? '' : undefined} 
            top={props.top || props.all  ? '' : undefined} 
            to={props.to}>
            {props.children}

        </div>
    )
}

export default GradientBorder