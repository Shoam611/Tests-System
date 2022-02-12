import useInput from 'hooks/useInput';
import { Dropdown, Input,  } from 'UIKit';
import {  useEffect, useState } from 'react';
import Question from 'models/QuestionModel';
import AwnsersSelector from './answerSelector'; 
import AwnserChoice from './answerChoice';
import './createQuestionForm.css';

const CreateQuestionForm = () => {
    const handleRemoveAwnser = (id) => {
        const index = answers.indexOf(answers.find(i => i.id === id));
        if (index >= 0) {
            answers.splice(index, 1);
            console.log(correctAwnserIndex);
            handleAnswerChanged(correctAwnserIndex!==1 ? 1 : -1)
        }
    }
    const handleAnswerChanged = (newAnswerIndex)=>{setCorrectAwnserIndex(newAnswerIndex)}
    //states
    const [questionTypes, setQuestionTypes] = useState(null); //list of q types available
    const [topic, setTopic] = useState('');
    
    const [questionType, setQuestionType] = useState(null);     //selected q type
    const [correctAwnserIndex, setCorrectAwnserIndex] = useState(-1);
    const [selectedAwnser, setSelectedAwnser] = useState(-1);
    const [answers, setAnswers] = useState([
        { id: 1, value: <AwnserChoice id={1} onRemove={handleRemoveAwnser} /> },
        { id: 2, value: <AwnserChoice id={2} onRemove={handleRemoveAwnser} /> },
        { id: 3, value: <AwnserChoice id={3} onRemove={handleRemoveAwnser} /> },
        { id: 4, value: <AwnserChoice id={4} onRemove={handleRemoveAwnser} /> }
    ]);
    //side-effects
    useEffect(() => {
        setQuestionTypes([{ id: 1, value: 'Single choice' }, { id: 2, value: 'Multi Choice' }]);
        setTopic('def-topic');
    }, []);
    useEffect(()=>{console.log('component did update answers');},[answers])
    //inputs
    const Question_text = useInput();
    const Text_above_question = useInput();
    const Text_below_question = useInput();
    const tags = useInput();
    //handlers
    const handleQuestionTypeChanged = (qType) => setQuestionType(qType);
    const awnserChangedHandler = (selectedId) => setCorrectAwnserIndex(selectedId);

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < answers.length; i++) { answers[i].isCorrect = (answers[i].key === correctAwnserIndex); }
        const newQuestion = new Question(topic, questionType, Question_text.value, Text_above_question.value, Text_below_question.value, tags.value, answers, correctAwnserIndex);
    }
    //renderers
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
                       {questionType && <AwnsersSelector list={answers} onChange={(newIndex)=>{handleAnswerChanged(newIndex)}} selected={correctAwnserIndex} />}
                        <Input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div >
    )

}





export default CreateQuestionForm;