import { Link } from "react-router-dom"
import { Toggler } from "UIKit"
const SideNav = (props) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <div>
                <Toggler title={"Manage questions"}>
                    <ul>
                        <li><Link to="/app/questions">Add a question</Link> </li>
                        <li><Link to="/app/tests">Remove a question</Link> </li>
                        <li><Link to="/app/default">Remove a question</Link> </li>
                    </ul>
                </Toggler>
            </div>
            <div>
                <Toggler title={"Manage Tests"}>
                    <ul>
                        <li>Add a tests</li>
                        <li>Edit tests</li>
                    </ul>
                </Toggler>
            </div>
            <div>
                <Toggler title={"Manage questions"}>
                    <ul>
                        <li>Add a question</li>
                        <li>Edit a question</li>
                    </ul>
                </Toggler>
            </div>
        </div>
    )
}
export default SideNav