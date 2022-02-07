import { Link, Outlet } from "react-router-dom";

const DefaultView = () => {
    return (
        <div>
            <h2>In App Overview</h2> 
            <ul>
                <li>
                    <Link to="/test">to navigation test view</Link>
                </li>
                <li>
                    <Link to="/app">to app view</Link>
                </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
export default DefaultView;