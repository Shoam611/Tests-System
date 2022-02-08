import './NavLinkListItem.css';
import { useState } from "react";
import {Box,Line,Icon} from 'UIKit';
import AnimateHeight from 'react-animate-height';

const NavLinkListItem = (props) => {
    const [isDisplay, setIsDisplay] = useState(false);
    const [height, setHeight] = useState(0);
    const [togggleIconClass, setTogggleIconClass] = useState('toggle-icon-right')
    // const isActive = useActiveChild();
    

    const handleDisplay = () => {
        setIsDisplay(!isDisplay);
        setHeight(!isDisplay ? 'auto' : 0);
        setTogggleIconClass(isDisplay ? 'toggle-icon-right' : 'toggle-icon-down');
    }
    return (
        <li>
            <Box onClick={handleDisplay} className={props.className ? props.className : ' '}>
                <Line justify="between" >
                    <h3 to={props.domain} className="heading">{props.title}</h3>
                    <div className={togggleIconClass}> <Icon i="chevron-right" /></div>
                </Line>
            </Box>
            <AnimateHeight duration={300} height={height}>
                <ul>
                    {props.children}
                </ul>
            </AnimateHeight>
        </li>
    )
}
export default NavLinkListItem