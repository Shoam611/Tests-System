import NavLinkItem from "../components/navLinkItem";
import { GradientBorder } from "UIKit";
import React from "react";
import './QuestionsView.css';
import CreateQuestionForm from "./createQuestionForm";

const QuestionsView = () => {
    return (
        <div className="QuestionView">
         <div className="container">
            <GradientBorder to="left" bottom >
                <ul display="row">
                    <NavLinkItem to="/app/questions/questions">Add a question </NavLinkItem>
                    <NavLinkItem to="/app/questions/edit">Edit questions    </NavLinkItem>
                    <NavLinkItem to="/app/reports/statistics">Add a question </NavLinkItem>
                    <NavLinkItem to="/app/questions/edit">Edit questions    </NavLinkItem>
                    <NavLinkItem to="/app/questions/questions">Edit questions    </NavLinkItem>
                    <NavLinkItem to="/app/questions/edit">Edit questions    </NavLinkItem>
                </ul>
            </GradientBorder>
         </div>
         <div className="questions-view-outlet-container">
         <CreateQuestionForm />
         </div>
        </div>
    )
}
export default QuestionsView;