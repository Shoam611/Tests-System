import './GradientBorder.css'
const GradientBorder = props =>{

    return (
        <ul className={`gradient-box`}  
                                        right={props.right || props.all ? '' : undefined } 
                                        bottom={props.bottom || props.all  ? '' : undefined} 
                                        left={props.left || props.all  ? '' : undefined} 
                                        top={props.top || props.all  ? '' : undefined}
                                        >
            {props.children}
        </ul>
    )
}

export default GradientBorder