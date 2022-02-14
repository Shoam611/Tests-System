import NavLinkItem from "../components/navLinkItem";
import { GradientBorder } from "UIKit";
import React, { useState } from "react";
import './QuestionsView.css';
import CreateTestForm from "./test-form/createTestForm";
import QuestionsForTest from "./test-form/questionsForTest";
const TestsView = () => {
    const [testData, setTestData] = useState('');
    const [currentStep, setCurrentStep] = useState(0);

    const makeRequest = () => {
        console.log('Form Submitted', testData);
    }

    const handleNextStep = (newData, final = false) => {
        setTestData((prev) => ({ ...prev, ...newData }));

        if (final) {
            makeRequest();
            return;
        }

        setCurrentStep(prev => prev + 1);
    }
    const handlePrevStep = (newData) => {
        setTestData((prev) => ({ ...prev, ...newData }));
        setCurrentStep(prev => prev - 1);
    }
    const steps = [
        <CreateTestForm next={handleNextStep} data={testData} />
        , <QuestionsForTest prev={handlePrevStep} next={handleNextStep} data={testData} />
    ]

    return (
        <div className="QuestionView">
            <div className="container">
                <GradientBorder to="left" bottom >
                    <ul display="row">
                        <NavLinkItem to="/app/qweezes/create">Test Details</NavLinkItem>
                        <NavLinkItem to="/app/qweezes/addQuestions">Manage Questions</NavLinkItem>
                    </ul>
                </GradientBorder>
            </div>
            <div className="questions-view-outlet-container">
                {steps[currentStep]}
            </div>
        </div>
    )
}
export default TestsView;