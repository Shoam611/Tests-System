import './SideNav.css';
import {GradientBorder} from 'UIKit';
import NavLinkListItem from './NavLinkListItem'
import NavLinkItem from './navLinkItem'
const SideNav = () => {


    return (
        <div className='SideNav'>
            <GradientBorder right >
                <NavLinkListItem title={"Manage questions"} domain="/app/questions">
                    <NavLinkItem to="/app/questions/questions">Add a question </NavLinkItem>
                    <NavLinkItem to="/app/questions/Edit">Edit questions    </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Qweezes"} className="">
                    <NavLinkItem to="/app/questions/questions">Create new qweez</NavLinkItem>
                    <NavLinkItem to="/app/tests">Edit quweezes       </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Topics"}>
                    <NavLinkItem to="/app/questions/questions">Add a new topic</NavLinkItem>
                    <NavLinkItem to="/app/tests">Edit topics        </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Reports"}>
                    <NavLinkItem to="/app/questions/questions">Generate report by qweez </NavLinkItem>
                    <NavLinkItem to="/app/tests">Generate report by respondent</NavLinkItem>
                    <NavLinkItem to="/app/default">Questions statistics </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Account"}>
                    <NavLinkItem to="/app/questions/questions"> Login form fields </ NavLinkItem>
                    <NavLinkItem to="/app/tests">Account details      </NavLinkItem>
                    <NavLinkItem to="/app/default">Customize language     </NavLinkItem>
                    <NavLinkItem to="/app/default">UI Customization    </NavLinkItem>
                </NavLinkListItem>
                < NavLinkListItem title={"Manage Administrators"}>
                    <NavLinkItem to="/app/questions/questions">Manage admin permissions         </NavLinkItem>
                    <NavLinkItem to="/app/tests">Create and activate new administartor</NavLinkItem>
                </NavLinkListItem>
            </GradientBorder>
        </div>
    )
}
export default SideNav