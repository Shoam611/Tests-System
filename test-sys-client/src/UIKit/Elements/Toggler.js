import './Toggler.css'
import { useState } from "react";
import { Btn, Line, Box } from "UIKit";
import AnimateHeight from 'react-animate-height';
import Icon from './Icon';

const Toggler = props => {
    const [isDisplay, setIsDisplay] = useState(false);
    const [height, setHeight] = useState(0);

    const handleDisplay = () => {
        console.log('object');
        setIsDisplay(!isDisplay);
        setHeight(!isDisplay ? 'auto' : 0)
    }
    return (
        <div >
                <Line justify="between">
            <Box onCklick={()=>{handleDisplay();}}>
                    <h3 className="heading">{props.title}</h3>
                    <Icon i={isDisplay ? "sort-up" : "sort-down"} ></Icon>
            </Box>
                </Line>
            <AnimateHeight duration={400} height={height}>
                <div>
                    {props.children}
                </div>
            </AnimateHeight>
        </div>
    )
}

export default Toggler;