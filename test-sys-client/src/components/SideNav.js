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
                    <NavLinkItem to="/app/questions/questions">New Question </NavLinkItem>
                    <NavLinkItem to="/app/questions/edit">Edit a Questions    </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Qweezes"}>
                    <NavLinkItem to="/app/qweezes/create/form">Create a Qweez</NavLinkItem>
                    <NavLinkItem to="/app/qweezes/edit">Edit Qweezes      </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Topics"}>
                    <NavLinkItem to="/app/topics/topics">Add New Topic</NavLinkItem>
                    <NavLinkItem to="/app/topics/edit">Edit Topics </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Reports"}>
                    <NavLinkItem to="/app/reports/qweezes"> Generate Report by Qweez </NavLinkItem>
                    <NavLinkItem to="/app/reports/respondant">Generate Report by Respondent</NavLinkItem>
                    <NavLinkItem to="/app/reports/statistics">Questions Statistics </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Account"}>
                    <NavLinkItem to="/app/accounts/fields">  Login Form Fields </ NavLinkItem>
                    <NavLinkItem to="/app/accounts/details"> Account Details      </NavLinkItem>
                    <NavLinkItem to="/app/accounts/lang">    Customize Language     </NavLinkItem>
                    <NavLinkItem to="/app/accounts/ui">      UI Customization    </NavLinkItem>
                </NavLinkListItem>
                < NavLinkListItem title={"Manage Administrators"}>
                    <NavLinkItem to="/app/admin/permissions">Manage Admin Permissions         </NavLinkItem>
                    <NavLinkItem to="/app/admin/annount">Create And Activate New Administartor</NavLinkItem>
                </NavLinkListItem>
            </GradientBorder>
        </div>
    )
}
export default SideNav