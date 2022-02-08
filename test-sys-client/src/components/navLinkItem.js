import {Box} from 'UIKit';
import {NavLink} from 'react-router-dom';
const NavLinkItem = (props) => {
    return (
        <li><NavLink to={props.to}><Box>{props.children}</Box></NavLink></li>
    )
}
export default NavLinkItem;