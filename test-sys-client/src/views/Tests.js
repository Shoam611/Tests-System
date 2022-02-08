import { Link, Outlet } from "react-router-dom";

const DefaultView = () => {
    return (
        <div >
            <h2>In navigation test view</h2> 
            <ul>
                <li>
                    <Link to="/test/default"> view </Link>
                </li>
                <li>
                    <Link to="/test/tests">tests view</Link>
                </li>
                <li>
                    <Link to="/test/questions">question view</Link>
                </li>
                <li>
                    <Link to="/">back to admin view</Link>
                </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
export default DefaultView;