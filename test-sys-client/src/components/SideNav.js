import React ,{ useState } from "react";
import { NavLink } from "react-router-dom"
import AnimateHeight from 'react-animate-height';
import { Box, Line, Icon } from "UIKit";
import './SideNav.css'
const SideNav = (props) => {
    return (
        <div className='SideNav'>
            <NavLinkLists>
                <NavLinkListItem title={"Manage questions"}>
                    <NavLinkItem to="/app/questions">Add a question </NavLinkItem>
                    <NavLinkItem to="/app/tests">Edit questions    </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Qweezes"} className="">
                    <NavLinkItem to="/app/questions">Create new qweez</NavLinkItem>
                    <NavLinkItem to="/app/tests">Edit quweezes       </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Topics"}>
                    <NavLinkItem to="/app/questions">Add a new topic</NavLinkItem>
                    <NavLinkItem to="/app/tests">Edit topics        </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Reports"}>
                    <NavLinkItem to="/app/questions">Generate report by qweez </NavLinkItem>
                    <NavLinkItem to="/app/tests">Generate report by respondent</NavLinkItem>
                    <NavLinkItem to="/app/default">Questions statistics </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Account"}>
                    <NavLinkItem to="/app/questions"> Login form fields </ NavLinkItem>
                    <NavLinkItem to="/app/tests">Account details      </NavLinkItem>
                    <NavLinkItem to="/app/default">Customize language     </NavLinkItem>
                    <NavLinkItem to="/app/default">UI Customization    </NavLinkItem>
                </NavLinkListItem>
                < NavLinkListItem title={"Manage Administrators"}>
                    <NavLinkItem to="/app/questions">Manage admin permissions         </NavLinkItem>
                    <NavLinkItem to="/app/tests">Create and activate new administartor</NavLinkItem>
                </NavLinkListItem>
            </NavLinkLists>
        </div>
    )
}

export const NavLinkLists = props =>{
    return (
        <ul className='gradient-box'>
            {props.children}
        </ul>
    )
}
export const NavLinkListItem = (props) => {
    const [isDisplay, setIsDisplay] = useState(false);
    const [height, setHeight] = useState(0);
    const [togggleIconClass, setTogggleIconClass] = useState('toggle-icon-right')
    
    const handleDisplay = () => {
        setIsDisplay(!isDisplay);
        setHeight(!isDisplay ? 'auto' : 0);
        setTogggleIconClass(isDisplay ? 'toggle-icon-right' : 'toggle-icon-down');
    }
    return (
        <li>
            <Box onClick={handleDisplay} className={props.className ? props.className : ' '}>
                <Line justify="between" >
                    <a href='#' className="heading">{props.title}</a>
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
export const NavLinkItem = (props) => {
    return (
        <li><NavLink to={props.to}><Box>{props.children}</Box></NavLink></li>
    )
}
export default SideNav