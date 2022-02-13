import useInput from 'hooks/useInput';
import { Btn, Dropdown, Input } from 'UIKit';
import { useState } from 'react';
import './createQuestionForm.css';
import { Navigate } from 'react-router-dom';

const CreateTestForm = () => {
    const fields = {
        Manager_email: useInput(),
        Test_name: useInput(),
        Passing_grade: useInput(),
        Test_header: useInput(),
        Text_msgOnSuccess: useInput(),
        Text_msgOnFailure: useInput(),
        Show_answers: useInput(false),
        Email_succSub: useInput(),
        Email_succBody: useInput(),
        Email_failSub: useInput(),
        Email_failBody: useInput(),

    }
    const [topic, setTopic] = useState('def-topic');
    const [testType, setTestType] = useState(0);
    const [lang, setLang] = useState(0);
    const [toCheck, setToCheck] = useState(false);

    const handleSubmit = (e) => {
        console.log('was submitted');

        const submitForm = {
            ...fields,
            topic,
            testType,
            lang,
            toCheck,
        }

        console.log(submitForm);
    }

    const handleCheckboxChange = (e) => {
        setToCheck(!toCheck);
    }

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
        <div className='AddQForm'>
            <h1>New Test</h1>
            <form>
                <div className='form-container' >
                    <label>Topic: {topic}</label>
                    <label>
                        Type of Test:
                        <Dropdown list={testTypes} selected={testType} onChange={(value) => { setTestType(value); }} />
                    </label>
                    <label>
                        Language:
                        <Dropdown list={languages} selected={lang} onChange={(value) => { setLang(value); }} />
                    </label>
                    <Input placeholder="Manager Email:" type="email" {...fields.Manager_email} />
                    <Input placeholder="Test Name:" maxLength="200" {...fields.Test_name} />
                    <Input placeholder="Passing Grade:" type="number" min="1" max="100" {...fields.Passing_grade} />
                    <textarea placeholder="Header:" {...fields.Test_header} />
                    <textarea placeholder="Message to Show Student on Success:"  {...fields.Text_msgOnSuccess} />
                    <textarea placeholder="Message to Show Student on Failure:"  {...fields.Text_msgOnFailure} />

                    <label>
                        Show Student Where He Was Wrong?
                        <input type="checkbox" onChange={handleCheckboxChange} />
                    </label>

                    <label>
                        Manager Email On Succes:
                        <Input type="text" placeholder="Subject" {...fields.Email_succSub} />
                    </label>
                    <textarea placeholder='Body' {...fields.Email_succBody} />

                    <label>
                        Manager Email On Failure:
                        <Input type="text" placeholder="Subject" {...fields.Email_failSub} />
                    </label>
                    <textarea placeholder='Body' {...fields.Email_failBody} />

                    <Btn i="sort" onClick={handleSubmit}>Next</Btn>
                </div>
            </form>
        </div >
    )
}

export default CreateTestForm;