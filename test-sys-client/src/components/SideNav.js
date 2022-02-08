import React from 'react';
import './SideNav.css';
import { GradientBorder } from 'UIKit';
import NavLinkListItem from './NavLinkListItem'
import NavLinkItem from './navLinkItem'
const SideNav = () => {

    return (
        <div className='SideNav'>
            <GradientBorder right >
                <NavLinkListItem title={"Manage questions"} >
                        <NavLinkItem  to="/app/questions/questions">Add a question </NavLinkItem>
                        <NavLinkItem  to="/app/questions/edit">Edit questions    </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Qweezes"} className="">
                        <NavLinkItem to="/app/qweezes/qweezes">Create new qweez</NavLinkItem>
                        <NavLinkItem to="/app/qweezes/edit">Edit quweezes      </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Topics"}>
                    <NavLinkItem to="/app/topics/topics">Add a new topic</NavLinkItem>
                    <NavLinkItem to="/app/topics/edit">Edit topics </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Reports"}>
                    <NavLinkItem to="/app/reports/qweezes"> Generate report by qweez </NavLinkItem>
                    <NavLinkItem to="/app/reports/respondant">Generate report by respondent</NavLinkItem>
                    <NavLinkItem to="/app/reports/statistics">Questions statistics </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Account"}>
                    <NavLinkItem to="/app/accounts/fields">  Login form fields </ NavLinkItem>
                    <NavLinkItem to="/app/accounts/details"> Account details      </NavLinkItem>
                    <NavLinkItem to="/app/accounts/lang">    Customize language     </NavLinkItem>
                    <NavLinkItem to="/app/accounts/ui">      UI Customization    </NavLinkItem>
                </NavLinkListItem>
                < NavLinkListItem title={"Manage Administrators"}>
                    <NavLinkItem to="/app/admin/permissions">Manage admin permissions         </NavLinkItem>
                    <NavLinkItem to="/app/admin/annount">Create and activate new administartor</NavLinkItem>
                </NavLinkListItem>
            </GradientBorder>
        </div>
    )
}
export default SideNav