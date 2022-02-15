import NavLinkItem from "../../components/navLinkItem";
import { Btn, GradientBorder } from "UIKit";
import React, { useState } from "react";
import useInput from "hooks/useInput";
import './QuestionsView.css';
import CreateTestForm from "./createTestForm";
import QuestionsForTest from "./questionsForTest";


const TestsView = () => {
    //states
    const [testData, setTestData] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [testType, setTestType] = useState(0);
    const [lang, setLang] = useState(0);
    const [toShowMistakes, setToShowMistakes] = useState(false);
    
    const fields = {
        step_1_fields:{
            Manager_email: useInput(),
            Test_name: useInput(),
            Passing_grade: useInput(),
            Test_header: useInput(),
            Text_msgOnSuccess: useInput(),
            Text_msgOnFailure: useInput(),
            Email_succSub: useInput(),
            Email_succBody: useInput(),
            Email_failSub: useInput(),
            Email_failBody: useInput(),
            testType,
            lang,
            toShowMistakes,
            topic: 'def-topic',
        },
        step_2_fields:{

        }
    }

    // const makeRequest = () => {
    //     console.log('Form Submitted', testData);
    // }
    
    //handlers
    const handleNextStep = () => {
        setCurrentStep(prev => prev + 1);
    }
    const handlePrevStep = () => {
        setCurrentStep(prev => prev - 1);
    }
    const testTypeChangedHandler = (e) => {
        setTestType(e);
    }
    const langChangedHandler = (e) => {
        setLang(e);
    }
    const toShowChangedHandler = (e) => {
        setToShowMistakes(!e);
    }
    
    //views
    const steps = [
          <CreateTestForm next={handleNextStep} onTestTypeChange={testTypeChangedHandler} onLangChange={langChangedHandler} onToShowChange={toShowChangedHandler} data={testData} {...fields.step_1_fields} />
        , <QuestionsForTest prev={handlePrevStep} next={handleNextStep} data={testData} />
    ]

    return (
        <div className="QuestionView">
            <div className="container">
                <GradientBorder to="left" bottom >
                    <ul display="row">
                        <NavLinkItem to="/app/qweezes/create/form">Test Details</NavLinkItem>
                        <NavLinkItem to="/app/qweezes/create/selectQuestions">Manage Questions</NavLinkItem>
                    </ul>
                </GradientBorder>
                <Btn onClick={()=>{console.log(testData);console.log(fields);}}/>
            </div>
            <div className="questions-view-outlet-container">
                {steps[currentStep]}
            </div>
        </div>
    )
}
export default TestsView;