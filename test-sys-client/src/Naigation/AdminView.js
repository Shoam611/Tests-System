import { NavLink, Outlet } from "react-router-dom";

const DefaultView = () => {
    return (
        <div>
            <h2>In App Overview</h2> 
            <ul>
                <li>
                    <NavLink to="/test">to navigation test view</NavLink>
                </li>
                <li>
                    <NavLink to="/app">to app view</NavLink>
                </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
export default DefaultView;