import NavLinkItem from "../components/navLinkItem";
import { GradientBorder } from "UIKit";
import React from "react";
import './QuestionsView.css';
import CreateTestForm from "./createTestForm";
const TestsView = () => {
    return (
        <div className="QuestionView">
         <div className="container">
            <GradientBorder to="left" bottom >
                <ul display="row">
                    <NavLinkItem to="/app/qweezes/qweezes">Test Details    </NavLinkItem>
                    <NavLinkItem to="">Manage Questions </NavLinkItem>
                </ul>
            </GradientBorder>
         </div>
         <div className="questions-view-outlet-container">
         <CreateTestForm />
         </div>
        </div>
    )
}
export default TestsView;