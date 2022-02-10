import useInput from 'hooks/useInput';
import { Btn, Dropdown, Input, Line, RadioButton } from 'UIKit';
import { useCallback, useEffect, useState } from 'react';
import Question from 'models/QuestionModel';
import Awnser from 'models/AwnserModel';
import './createQuestionForm.css';

const CreateQuestionForm = () => {
    let qtypestring = "";
    //states
    const [questionType, setQuestionType] = useState(null);     //selected q type
    const [questionTypes, setQuestionTypes] = useState(null); //list of q types available
    const [topic, setTopic] = useState('');
    const [correctAwnserIndex, setCorrectAwnserIndex] = useState(-1);
    //inputs
    const Question_text = useInput();
    const Text_above_question = useInput();
    const Text_below_question = useInput();
    const tags = useInput();
    const [awnsState,setawnsState] = useState();
    const [answers, setAnswers] = useState([new Awnser(1,'', false), new Awnser(2,'', false), new Awnser(3, '', false)]);
    //handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < awnsers.length; i++) { awnsers[i].isCorrect = (awnsers[i].key === correctAwnserIndex); }
        const newQuestion = new Question(topic, questionType, Question_text.value, Text_above_question.value, Text_below_question.value, tags.value, awnsers, correctAwnserIndex);
    }
    const handleQuestionTypeChanged = (qType) => setQuestionType(qType);
    const awnserChangedHandler = (selectedId) => setCorrectAwnserIndex(selectedId);
    const handleRemoveAwnser = () => 
    {
        if (awnsers.indexOf(awnsers)) {awnsers.splice(awnsers.indexOf(awnser), 1);}
    }
    //renderers
    const renderAwnserItem = (awnser) => {
        return (<Line>
            <Input {...(awnser.content)} />
            <Btn i='minus' onClick={() => { handleRemoveAwnser(awnser) }} />
        </Line>)
    }
    const renderAwnserSelector = () => {
        if (!!questionType) 
        {
            // const list = awnsers.map(awnser => ({ id: awnser.key, value: (renderAwnserItem(awnser))} ));
            return (
                <div>
                    <Btn i="plus" />{/* <RadioButton list={list} selected={correctAwnserIndex} onChange={awnserChangedHandler} /> */}
                    <hr />
                </div>
            )
        }
        return null;
    } 
    
    return (
        <div className='AddQForm'>
            <h1>New Question</h1>
            <div style={{ height: 'min-content' }}>

                <form onSubmit={handleSubmit} >
                    <div className='form-container' >
                        <label > topic : {topic}</label>
                        <Dropdown list={questionTypes} selected={questionType} onChange={(qType) => { handleQuestionTypeChanged(qType) }} />
                        <Input placeholder="Question text:"        {...Question_text} />
                        <Input placeholder="Text above question:"  {...Text_above_question} />
                        <Input placeholder="Text below question:"  {...Text_below_question} />
                        <Input placeholder="tags (seperate with , charecter)" {...tags} />
                        <hr />
                        {renderAwnserSelector()}
                        <Input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div >
    )

}
export default CreateQuestionForm;