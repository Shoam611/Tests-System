import React from 'react';
import './SideNav.css';
import { GradientBorder } from 'UIKit';
import NavLinkListItem from './NavLinkListItem'
import NavLinkItem from './navLinkItem'
const SideNav = () => {

    return (
        <div className='SideNav'>
            <GradientBorder right >
                <NavLinkListItem title={"Manage Questions"} >
                    <NavLinkItem to="/questions/questions">New Question </NavLinkItem>
                    <NavLinkItem to="/questions/edit">Edit a Questions    </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Manage Qweezes"}>
                    <NavLinkItem to="/qweezes/create/form">Create a Qweez</NavLinkItem>
                    <NavLinkItem to="/qweezes/edit">Edit Qweezes      </NavLinkItem>
                </NavLinkListItem>
                <NavLinkListItem title={"Reports"}>
                    <NavLinkItem to="/reports/qweezes"> Generate Report by Qweez </NavLinkItem>
                    <NavLinkItem to="/reports/respondant">Generate Report by Respondent</NavLinkItem>
                    <NavLinkItem to="/reports/statistics">Questions Statistics </NavLinkItem>
                </NavLinkListItem>
                {/* <NavLinkListItem title={"Manage Topics"}>
                    <NavLinkItem to="/topics/topics">Add New Topic</NavLinkItem>
                    <NavLinkItem to="/topics/edit">Edit Topics </NavLinkItem>
                </NavLinkListItem> */}
                {/* <NavLinkListItem title={"Manage Account"}>
                    <NavLinkItem to="/accounts/fields">  Login Form Fields </ NavLinkItem>
                    <NavLinkItem to="/accounts/details"> Account Details      </NavLinkItem>
                    <NavLinkItem to="/accounts/lang">    Customize Language     </NavLinkItem>
                    <NavLinkItem to="/accounts/ui">      UI Customization    </NavLinkItem>
                </NavLinkListItem> */}
                {/* < NavLinkListItem title={"Manage Administrators"}>
                    <NavLinkItem to="/admin/permissions">Manage Admin Permissions         </NavLinkItem>
                    <NavLinkItem to="/admin/annount">Create And Activate New Administartor</NavLinkItem>
                </NavLinkListItem> */}
            </GradientBorder>
        </div>
    )
}
export default SideNav