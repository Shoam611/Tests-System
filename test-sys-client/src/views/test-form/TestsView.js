import NavLinkItem from "../../components/navLinkItem";
import { Btn, GradientBorder } from "UIKit";
import React, { useReducer, useState } from "react";
import useInput from "hooks/useInput";
import './QuestionsView.css';
import CreateTestForm from "./createTestForm";
import QuestionsForTest from "./questionsForTest";
import { Outlet, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Test from "models/TestModel";
import { useDispatch, useSelector } from "react-redux";
import { addTest } from "Store/actions/test";

const TestsView = () => {
    //states
    const [testData, setTestData] = useState('');
    const [testType, setTestType] = useState(0);
    const [lang, setLang] = useState(0);
    const [toShowMistakes, setToShowMistakes] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const topic = useSelector(state => state.topic.topic)
    const fields = {
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
        topic: topic.name,
    }
    //handlers
    const handleNextStep = () => navigate("/qweezes/create/selectQuestions");
    const handlePrevStep = () => navigate("/qweezes/create/form");
    const testTypeChangedHandler = (e) => setTestType(e);
    const langChangedHandler = (e) => setLang(e);
    const toShowChangedHandler = (e) => setToShowMistakes(!e);
    const onSelectionChange = (item, value) => { (value && questions.indexOf(item._id) === -1) ? questions.push(item._id) : questions.splice(questions.indexOf(item._id), 1); forceUpdate() };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTest = new Test(topic, testType, lang, fields.Manager_email.value, fields.Test_name.value, fields.Passing_grade.value, fields.Test_header.value, fields.Text_msgOnSuccess.value, fields.Text_msgOnFailure.value, toShowMistakes, fields.Email_succSub.value, fields.Email_succBody.value, fields.Email_failSub.value, fields.Email_failBody.value, questions);
        const [value, message] = newTest.validate();
        if (value) {
            dispatch(addTest(newTest));
            resetForms();
            navigate('/qweezes/create/form');
        }
        setErrorMessage(message);
        setTimeout(() => { setErrorMessage(''); }, 10000);
    }
    const resetForms = () => {
        setTestData('');
        setTestType(0);
        setLang(0);
        setToShowMistakes(false);
        setQuestions([]);
        fields.Manager_email.setValue('');
        fields.Test_name.setValue('');
        fields.Passing_grade.setValue('');
        fields.Test_header.setValue('');
        fields.Text_msgOnSuccess.setValue('');
        fields.Text_msgOnFailure.setValue('');
        fields.Email_succSub.setValue('');
        fields.Email_succBody.setValue('');
        fields.Email_failSub.setValue('');
        fields.Email_failBody.setValue('');
    }

    //views
    const steps = [
        <CreateTestForm next={handleNextStep} onTestTypeChange={testTypeChangedHandler} onLangChange={langChangedHandler} onToShowChange={toShowChangedHandler} data={testData} {...fields} />
        , <QuestionsForTest prev={handlePrevStep} onQuestionSelected={onSelectionChange} selectedQuestios={questions} count={questions.length} />
    ]
    return (
        <div className="QuestionView">
            <div className="container">
                <GradientBorder to="left" bottom  >
                    <ul display="row">
                        <NavLinkItem to="/qweezes/create/form">Test Details</NavLinkItem>
                        <NavLinkItem to="/qweezes/create/selectQuestions">Manage Questions</NavLinkItem>
                    </ul>
                </GradientBorder>
            </div>
            <div className="questions-view-outlet-container">
                <div className="inline-button-text">
                    <Btn onClick={handleSubmit} i="chevron-down">Submit</Btn>
                    <p className='error-message'> {errorMessage}</p>
                </div>
                <Routes >
                    <Route path="/" element={steps[0]} />
                    <Route path="form" element={steps[0]} />
                    <Route path="selectQuestions" element={steps[1]} />
                </Routes>
                <Outlet />
            </div>
        </div>
    )
}
export default TestsView;