import NavLinkItem from "../components/navLinkItem";
import { GradientBorder } from "UIKit";
import React, { useState } from "react";
import './QuestionsView.css';
import CreateTestForm from "./createTestForm";
import QuestionsForTest from "./questionsForTest";
import {
    Route, Routes,
} from "react-router-dom";
const TestsView = () => {
    const [testData, setTestData] = useState('');
    return (
        <div className="QuestionView">
            <div className="container">
                <GradientBorder to="left" bottom >
                    <ul display="row">
                        {/* <NavLinkItem to="/app/qweezes/create">Test Details    </NavLinkItem>
                        <NavLinkItem to="/app/qweezes/addQuestions">Manage Questions </NavLinkItem> */}
                        <Routes>
                            <Route path="create" element={< CreateTestForm />}>Test Details</Route>
                            <Route path="addQuestions" element={< QuestionsForTest />}>Manage Questions</Route>
                        </Routes>
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