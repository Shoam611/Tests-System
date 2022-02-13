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
    const onAddingAwnser = () => {
        if(answers.length>=6) return;
        const id = getId();
        const newAnswer = { id: id, render: <AwnserChoice id={id} onRemove={handleRemoveAwnser} onChange={awnserContentChangedHandler}  /> , value:'' };
        answers.push(newAnswer);
        forceUpdate();
    }
    const handleRemoveAwnser = (id) => {
        if(answers.length <=2) return;
        const index = answers.indexOf(answers.find(i => i.id === id));
        if (index >= 0) {
            answers.splice(index, 1);
            handleAnswerChanged(-1)
        }
        forceUpdate()
    }
    const handleAnswerChanged = (newAnswerIndex) => { setCorrectAwnserIndex(newAnswerIndex) }
    const awnserContentChangedHandler =(value,id) =>{
        const temp = answers;
        temp.filter(i=>i.id===id)[0].value=value;
        setAwnsers(temp);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(correctAwnserIndex == -1) {console.log('no answer picked ' +correctAwnserIndex); return;}
        const index = answers.indexOf(answers.find((i) =>i.id===correctAwnserIndex));
        const newQuestion = new Question(topic, questionType, Question_text.value, Text_above_question.value, Text_below_question.value, tags.value, answers.map(i=>i.value), index);
        console.log(newQuestion);
    }
    //states
    const [questionTypes, setQuestionTypes] = useState(null); //list of q types available
    const [topic, setTopic] = useState('');
    const [questionType, setQuestionType] = useState(null);     //selected q type
    const [correctAwnserIndex, setCorrectAwnserIndex] = useState(-1);
    const [answers,setAwnsers] = useState([
        { id: 1, render: <AwnserChoice id={1} onRemove={handleRemoveAwnser} onChange={awnserContentChangedHandler} /> , value:''},
        { id: 2, render: <AwnserChoice id={2} onRemove={handleRemoveAwnser} onChange={awnserContentChangedHandler} /> , value:''},
        { id: 3, render: <AwnserChoice id={3} onRemove={handleRemoveAwnser} onChange={awnserContentChangedHandler} /> , value:''},
        { id: 4, render: <AwnserChoice id={4} onRemove={handleRemoveAwnser} onChange={awnserContentChangedHandler} /> , value:''}
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