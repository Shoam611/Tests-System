import { Outlet } from "react-router-dom";

const DefaultView = () => {
    return (
        <div>
            <h2>In navigation test view</h2> 
            <hr />
            <Outlet />
        </div>
    )
}
export default DefaultView;