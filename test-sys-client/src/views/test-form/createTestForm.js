import { Btn, Dropdown, Input } from 'UIKit';
import { useState } from 'react';
import './createQuestionForm.css';

const CreateTestForm = (props) => {
    //states
    const [message, setMessage] = useState("");

    //handlers
    const handleSubmit = () => {
        if (testValidation()) {
            console.log('nexted');

            props.next();
            setMessage("");
        }
    }
    
    //regEx validation
    const ValidateEmail = (mail) => {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
            return true;
        }
        return false;
    }

    //validations
    const testValidation = () => {
        if (+props.testType < 1 || +props.testType > 3) {
            setMessage('Please Choose a Test Type.');
            return false;
        }
        if (+props.lang < 1 || +props.lang > 2) {
            setMessage('Please Choose a Language.');
            return false;
        }
        if (props.Manager_email.value.trim().length === 0) {
            setMessage('Email Address Cannot Be Empty!');
            return false;
        }
        if (!ValidateEmail(props.Manager_email.value)) {
            setMessage('Invalid Email Address!');
            return false;
        }
        if (props.Test_name.value.trim().length === 0) {
            setMessage('Test Name Cannot Be Empty!');
            return false;
        }
        if (+props.Passing_grade.value < 1 || +props.Passing_grade.value > 100) {
            setMessage('Invalid Passing Grade! Must Be Between 1 and 100.');
            return false;
        }
        if (props.Test_header.value.trim().length === 0) {
            setMessage('Test Header Cannot Be Empty!');
            return false;
        }
        if (props.Text_msgOnSuccess.value.trim().length === 0) {
            setMessage('Message On Succes Cannot Be Empty!');
            return false;
        }
        if (props.Text_msgOnFailure.value.trim().length === 0) {
            setMessage('Message On Failure Cannot Be Empty!');
            return false;
        }
        if (props.Email_succBody.value.trim().length === 0 || props.Email_succSub.value.trim().length === 0) {
            setMessage('Email On Succes Cannot Be Empty!');
            return false;
        }
        if (props.Email_failBody.value.trim().length === 0 || props.Email_failSub.value.trim().length === 0) {
            setMessage('Email On Failure Cannot Be Empty!');
            return false;
        }
        return true;
    }

    //lists
    const testTypes = [
        { id: 1, value: ' Predefined Test - Same questions for all respondents ' },
        { id: 2, value: ' Random Test - Different questions for each respondent ' },
        { id: 3, value: ' Questionnaire - A survey of questions with no correct answers ' }
    ]
    const languages = [
        { id: 1, value: 'English' },
        { id: 2, value: 'Hebrew' }
    ]

    return (
        <div className='AddTForm'>
            <h1>New Test</h1>
            <form>
                <div className='form-container' >
                    <label>Topic: {props.topic}</label>
                    <label>
                        Type of Test:
                        <Dropdown list={testTypes} selected={props.testType} onChange={(value) => props.onTestTypeChange(value)} />
                    </label>
                    <label>
                        Language:
                        <Dropdown list={languages} selected={props.lang} onChange={(value) => props.onLangChange(value)} />
                    </label>
                    <Input placeholder="Manager Email:" type="email" {...props.Manager_email} />
                    <Input placeholder="Test Name:" maxLength="200" {...props.Test_name} />
                    <Input placeholder="Passing Grade:" type="number" min="1" max="100" {...props.Passing_grade} />
                    <textarea placeholder="Header:" {...props.Test_header} />
                    <textarea placeholder="Message to Show Student on Success:"  {...props.Text_msgOnSuccess} />
                    <textarea placeholder="Message to Show Student on Failure:"  {...props.Text_msgOnFailure} />

                    <label>
                        Show Student Where He Was Wrong?
                        <input type="checkbox" checked={props.toShowMistakes} onChange={() => { props.onToShowChange(props.toShowMistakes) }} />
                    </label>

                    <label>
                        Manager Email On Succes:
                        <Input type="text" placeholder="Subject" {...props.Email_succSub} />
                    </label>
                    <textarea placeholder='Body' {...props.Email_succBody} />

                    <label>
                        Manager Email On Failure:
                        <Input type="text" placeholder="Subject" {...props.Email_failSub} />
                    </label>
                    <textarea placeholder='Body' {...props.Email_failBody} />

                    <Btn i="chevron-right" onClick={handleSubmit}>Next</Btn>
                    <p className='errorMessage'>{message}</p>
                </div>
            </form>
        </div >
    )
}

export default CreateTestForm;