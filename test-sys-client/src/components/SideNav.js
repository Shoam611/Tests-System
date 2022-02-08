import './SideNav.css'
import { Link } from "react-router-dom"
import { Toggler ,Box} from "UIKit"
const SideNav = (props) => {
    return (
        <div className='SideNav'>
            <div className='gradient-box'>

            <ul>
                <li>
                    <Toggler title={"Manage questions"}>
                        <ul> 
                            <li><Box> <Link to="/app/questions">Add a question</Link></Box></li>
                            <li><Box><Link to="/app/tests">Edit questions</Link></Box></li>
                        </ul>
                    </Toggler>
                </li>
                <li>
                    <Toggler title={"Manage Qweezes"}>
                        <ul>
                            <li><Box><Link to="/app/questions">Create new qweez</Link></Box> </li>
                            <li><Box><Link to="/app/tests">Edit quweezes</Link>       </Box>   </li>
                        </ul>
                    </Toggler>
                </li>
                <li>
                    <Toggler title={"Manage Topics"}>
                        <ul>
                            <li><Box><Link to="/app/questions">Add a new topic</Link> </Box></li>
                            <li><Box><Link to="/app/tests">Edit topics</Link>         </Box>  </li>
                        </ul>
                    </Toggler>
                </li>
                <li>
                    <Toggler title={"Reports"}>
                        <ul>
                            <li><Box><Link to="/app/questions">Generate report by qweez</Link> </Box></li>
                            <li><Box><Link to="/app/tests">Generate report by respondent</Link> </Box></li>
                            <li><Box><Link to="/app/default">Questions statistics</Link> </Box></li>
                        </ul>
                    </Toggler>
                </li>
                <li>
                    <Toggler title={"Manage Account"}>
                        <ul>
                            <li><Box><Link to="/app/questions">Login form fields</Link> </Box></li>
                            <li><Box><Link to="/app/tests">Account details</Link> </Box></li>
                            <li><Box><Link to="/app/default">Customize language</Link> </Box></li>
                            <li><Box><Link to="/app/default">UI Customization</Link> </Box></li>
                        </ul>
                    </Toggler>
                </li>
                <li>
                    <Toggler title={"Manage Administrators"}>
                        <ul>
                            <li><Box><Link to="/app/questions">Manage admin permissions         </Link> </Box>          </li>
                            <li><Box><Link to="/app/tests">Create and activate new administartor</Link> </Box> </li>
                        </ul>
                    </Toggler>
                </li>
            </ul>
            </div>
        </div>
    )
}
export default SideNav