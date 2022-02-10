import useInput from 'hooks/useInput';
import { Btn, Dropdown, Input } from 'UIKit';
import { useState } from 'react';
import './createQuestionForm.css';
const CreateQuestionForm = () => {
    const fields = {
        topic: "",
        Question_type: useInput(),
        Question_text: useInput(),
        Text_above_question: useInput(),
        Text_below_question: useInput(),
        awnsers: undefined,
        tags: useInput(),
    }
    const [questionType, setQuestionType] = useState(null);
    const handleSubmit = (e) => {
        console.log('clicked');
    }
    const questionTypes = [
        { id: 1, value: 'single choice question' },
        { id: 2, value: 'multiple choice questions' }
    ]
    return (
        <div className='AddQForm'>
            <h1>New Question</h1>
            <form>
                <div className='form-container' >
                    <Dropdown list={questionTypes} selected={questionType} onChange={(value) => {setQuestionType(value);}} />
                    <Input placeholder="Question type:"        {...fields.Question_type} />
                    <Input placeholder="Question text:"        {...fields.Question_text} />
                    <Input placeholder="Text above question:"  {...fields.Text_above_question} />
                    <Input placeholder="Text below question:"  {...fields.Text_below_question} />
                    <Input placeholder="tags (seperate with , charecter)" />
                    <Btn i="sort" onClick={handleSubmit}>submit</Btn>
                </div>
            </form>
            {/*
                */}
        </div >
    )
}

export default CreateQuestionForm;