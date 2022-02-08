import './Toggler.css'
import { useState } from "react";
import { Btn, Line, Box } from "UIKit";
import AnimateHeight from 'react-animate-height';
import Icon from './Icon';

const Toggler = props => {
    const [isDisplay, setIsDisplay] = useState(false);
    const [height, setHeight] = useState(0);
    const [togggleIconClass, setTogggleIconClass] = useState('toggle-icon-right')
    const handleDisplay = () => {
        setIsDisplay(!isDisplay);
        setHeight(!isDisplay ? 'auto' : 0);
        setTogggleIconClass(isDisplay ? 'toggle-icon-right' : 'toggle-icon-down');
    }
    return (
        <div className='Toggler'>
            <Box onClick={handleDisplay}>
                <Line justify="between">
                    <h3 className="heading">{props.title}</h3>
                    <div className={togggleIconClass}>
                        <Icon i="chevron-right" />
                    </div>
                </Line>
            </Box>
            <AnimateHeight duration={300} height={height}>
                <div>
                    {props.children}
                </div>
            </AnimateHeight>
        </div>
    )
}

export default Toggler;