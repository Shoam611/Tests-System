import { Box } from 'UIKit';
import { NavLink } from 'react-router-dom';
import './navLinkItem.css' 
const NavLinkItem = (props) => {
    return (
        <li>
            <NavLink to={props.to} className={({ isActive }) => {const name = isActive ? "active" : " ";return name} }>
                <Box>
                    {props.children}
                </Box>
            </NavLink>
        </li>
    )
}
export default NavLinkItem;