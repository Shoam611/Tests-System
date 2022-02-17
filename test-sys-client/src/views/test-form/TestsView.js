import NavLinkItem from "../../components/navLinkItem";
import { Btn, GradientBorder } from "UIKit";
import React, { useState } from "react";
import useInput from "hooks/useInput";
import './QuestionsView.css';
import CreateTestForm from "./createTestForm";
import QuestionsForTest from "./questionsForTest";
import { Outlet, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Test from "models/TestModel";
import { useDispatch } from "react-redux";

const TestsView = () => {
    //states
    const [testData, setTestData] = useState('');
    const [testType, setTestType] = useState(0);
    const [lang, setLang] = useState(0);
    const [toShowMistakes, setToShowMistakes] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const dispatch = useDispatch();

    let navigate = useNavigate();

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
        topic: 'def-topic',
    }

    //handlers
    const handleNextStep = () => {
        console.log('next');
        navigate("/app/qweezes/create/selectQuestions");
    }
    const handlePrevStep = () => {
        console.log('prev');
        navigate("/app/qweezes/create/form");
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
    const onSelectionChange = (item, value) => value ? questions.push(item) : questions.pop(item);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            const newTest = new Test(testType, lang, fields.Manager_email, fields.Test_name, fields.Passing_grade, fields.Test_header, fields.Text_msgOnSuccess, fields.Text_msgOnFailure, toShowMistakes, fields.Email_succSub, fields.Email_succBody, fields.Email_failSub, fields.Email_failBody, questions);
            console.log(newTest);
            // dispatch(addTest(newTest));
        }
    }

    //RegEx validation
    const ValidateEmail = (mail) => {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
            return true;
        }
        return false;
    }

    //validations
    const formValidation = () => {
        if (+fields.testType < 1 || +fields.testType > 3) {
            setErrorMessage('Please Choose a Test Type.');
            return false;
        }
        if (+fields.lang < 1 || +fields.lang > 2) {
            setErrorMessage('Please Choose a Language.');
            return false;
        }
        if (fields.Manager_email.value.trim().length === 0) {
            setErrorMessage('Email Address Cannot Be Empty!');
            return false;
        }
        if (!ValidateEmail(fields.Manager_email.value)) {
            setErrorMessage('Invalid Email Address!');
            return false;
        }
        if (fields.Test_name.value.trim().length === 0) {
            setErrorMessage('Test Name Cannot Be Empty!');
            return false;
        }
        if (+fields.Passing_grade.value < 1 || +fields.Passing_grade.value > 100) {
            setErrorMessage('Invalid Passing Grade! Must Be Between 1 and 100.');
            return false;
        }
        if (fields.Test_header.value.trim().length === 0) {
            setErrorMessage('Test Header Cannot Be Empty!');
            return false;
        }
        if (fields.Text_msgOnSuccess.value.trim().length === 0) {
            setErrorMessage('Message On Succes Cannot Be Empty!');
            return false;
        }
        if (fields.Text_msgOnFailure.value.trim().length === 0) {
            setErrorMessage('Message On Failure Cannot Be Empty!');
            return false;
        }
        if (fields.Email_succBody.value.trim().length === 0 || fields.Email_succSub.value.trim().length === 0) {
            setErrorMessage('Email On Succes Cannot Be Empty!');
            return false;
        }
        if (fields.Email_failBody.value.trim().length === 0 || fields.Email_failSub.value.trim().length === 0) {
            setErrorMessage('Email On Failure Cannot Be Empty!');
            return false;
        }
        if (questions.length === 0) {
            setErrorMessage('Must Select Questions In The "Manage Questions" Tab.');
            return false;
        }
        setErrorMessage('');
        return true;
    }

    //views
    const steps = [
        <CreateTestForm next={handleNextStep} onTestTypeChange={testTypeChangedHandler} onLangChange={langChangedHandler} onToShowChange={toShowChangedHandler} data={testData} {...fields} />
        , <QuestionsForTest prev={handlePrevStep} next={handleNextStep} onQuestionSelected={onSelectionChange} data={testData} questions={questions} />
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
            </div>
            <div className="questions-view-outlet-container">
                <div className="inline-button-text">
                    <Btn onClick={handleSubmit} i="chevron-down">Submit</Btn>
                    <p className='errorMessage'> {errorMessage}</p>
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