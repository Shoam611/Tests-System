import useInput from 'hooks/useInput';
import { Dropdown, Input, } from 'UIKit';
import { useEffect, useState, useReducer } from 'react';
import Question from 'models/QuestionModel';
import AwnsersSelector from './answerSelector';
import AwnserChoice from './answerChoice';
import './createQuestionForm.css';

const CreateQuestionForm = () => {
    //helpers
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const getId = () => {
        if (answers.length > 0) {
            return answers.at(-1).id +1;
        }
        else return 1;
    }
    //handlers
    const handleQuestionTypeChanged = (qType) => setQuestionType(qType);
    const awnserChangedHandler = (selectedId) => setCorrectAwnserIndex(selectedId);
    const onAddingAwnser = () => {
        const id = getId();
        console.log(id);
        const newAnswer = { id: id, value: <AwnserChoice id={id} onRemove={handleRemoveAwnser} /> };
        answers.push(newAnswer);
        forceUpdate();
    }
    const handleRemoveAwnser = (id) => {
        const index = answers.indexOf(answers.find(i => i.id === id));
        if (index >= 0) {
            answers.splice(index, 1);
            handleAnswerChanged(-1)
        }
        forceUpdate()
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        for (let i = 0; i < answers.length; i++) { answers[i].isCorrect = (answers[i].key === correctAwnserIndex); }
        const newQuestion = new Question(topic, questionType, Question_text.value, Text_above_question.value, Text_below_question.value, tags.value, answers, correctAwnserIndex);
    }
    const handleAnswerChanged = (newAnswerIndex) => { setCorrectAwnserIndex(newAnswerIndex) }
    //states
    const [questionTypes, setQuestionTypes] = useState(null); //list of q types available
    const [topic, setTopic] = useState('');
    const [questionType, setQuestionType] = useState(null);     //selected q type
    const [correctAwnserIndex, setCorrectAwnserIndex] = useState(-1);
    const [answers] = useState([
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
    //inputs
    const Question_text = useInput();
    const Text_above_question = useInput();
    const Text_below_question = useInput();
    const tags = useInput();
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
                        {questionType && <AwnsersSelector onAddingAwnser={onAddingAwnser} list={answers} onChange={(newIndex) => { handleAnswerChanged(newIndex) }} selected={correctAwnserIndex} />}
                        <Input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div >
    )

}





export default CreateQuestionForm;