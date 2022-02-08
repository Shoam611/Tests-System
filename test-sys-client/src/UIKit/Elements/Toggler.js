import './Toggler.css'
import { useState } from "react";
import { Line, Box,Icon } from "UIKit";
import AnimateHeight from 'react-animate-height';

const Toggler = props => {
    const [isDisplay, setIsDisplay] = useState(false);
    const [height, setHeight] = useState(0);
    const [togggleIconClass, setTogggleIconClass] = useState('toggle-icon-right')
    const handleDisplay = () => 
    {
        setIsDisplay(!isDisplay);
        setHeight(!isDisplay ? 'auto' : 0);
        setTogggleIconClass(isDisplay ? 'toggle-icon-right' : 'toggle-icon-down');
    }
    return (
        < >
            <Box onClick={handleDisplay} className={props.className?props.className:' '}>
                <Line justify="between" >
                    <h3 href='#' className="heading">{props.title}</h3>
                    <div className={togggleIconClass}> <Icon i="chevron-right" /></div>
                </Line>
            </Box>
            <AnimateHeight duration={300} height={height}>
                {props.children}
            </AnimateHeight>
        </>
    )
}

export default Toggler;