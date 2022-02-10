import useInput from 'hooks/useInput';
import { Btn, Dropdown, Input } from 'UIKit';
import { useState } from 'react';
import './createQuestionForm.css';
const CreateTestForm = () => {
    const fields = {
        Test_name: useInput(),
        Manager_email: useInput(),
        Passing_grade: useInput(),
        Test_header: useInput(),
        Text_msgOnSuccess: useInput(),
        Text_msgOnFailure: useInput(),
        tags: useInput(),
    }
    const [topic, setTopic] = useState('def-topic');
    const [testType, setTestType] = useState(null);
    const [lang, setLang] = useState(null);

    const handleSubmit = (e) => {
        console.log('was submitted');
    }

    const testTypes = [
        { id: 1, value: ' Predefined Test - Same questions for all respondents ' },
        { id: 2, value: ' Random Test - Different questions for each respondent ' },
        { id: 3, value: ' Questionnaire - A survey of questions with no correct answers '}
    ]

    const languages = [
        {id: 1, value: 'English'},
        {id: 2, value: 'Hebrew'}
    ]

    return (
        <div className='AddQForm'>
            <h1>New Test</h1>
            <form>
                <div className='form-container' >
                    <label>Topic: {topic}</label>
                    <Dropdown list={testTypes} selected={testType} onChange={(value) => {setTestType(value);}} />
                    <Input placeholder="Manager Email:"        {...fields.Manager_email} />
                    <Input placeholder="Test Name:"        maxlength="200" {...fields.Test_name} />
                    <Input placeholder="Passing Grade:"     type="number" min="3" max="100" {...fields.Passing_grade} />
                    <Input placeholder="Header:"  {...fields.Test_header} />
                    <Input placeholder="Message to Show on Success:"  {...fields.Text_msgOnSuccess} />
                    <Input placeholder="Message to Show on Failure:"  {...fields.Text_msgOnFailure}/>
                    <Dropdown list={languages} selected={lang} onChange={(value) => {setLang(value);}}/>
                    <Btn i="sort" onClick={handleSubmit}>Submit</Btn>
                </div>
            </form>
            {/*
                */}
        </div >
    )
}

export default CreateTestForm;