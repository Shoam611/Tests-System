import useInput from 'hooks/useInput';
import { Btn, Dropdown, Input, } from 'UIKit';
import { useEffect, useState, useReducer } from 'react';
import Question from 'models/QuestionModel';
import AwnsersSelector from './answerSelector';
import AwnserChoice from './answerChoice';
import './createQuestionForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion,fetchQuestions } from 'Store/actions/question';
const CreateQuestionForm = () => {
    //helpers
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const getId = () => {
        if (answers.length > 0) {
            return answers.at(-1).id + 1;
        }
        else return 1;
    }
    const dispatch = useDispatch();
    //handlers
    const handleQuestionTypeChanged = (qType) => {
        answers.forEach(item=>{item.isSelected=false;item.value=''})
        setQuestionType(qType);
    }
    const onAddingAwnser = () => {
        if (answers.length >= 6) return;
        const id = getId();
        const newAnswer = { id: id, render: <AwnserChoice id={id} onRemove={handleRemoveAwnser} onChange={awnserContentChangedHandler} />, value: '' ,isSelected:false};
        answers.push(newAnswer);
        forceUpdate();
    }
    const handleRemoveAwnser = (id) => {
        if (answers.length > 2) {
            const index = answers.indexOf(answers.find(i => i.id === id));
            if (index >= 0) { answers.splice(index, 1);  }
            forceUpdate()
        }
    }
    const awnserContentChangedHandler = (value, id) => {
        const temp = answers;
        temp.filter(i => i.id === id)[0].value = value;
        setAwnsers(temp);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = new Question(topic, questionType, Question_text.value, Text_above_question.value, Text_below_question.value, tags.value, answers.map(({value},index) => ({value,id:index})) ,answers.map(({isSelected},index)=> ({isCorrect:isSelected,index})).filter(({isCorrect})=>isCorrect).map(({index})=>index));
        console.log(newQuestion);
        dispatch(addQuestion(newQuestion))
    }
    
    const questions = useSelector(state => state.questions.questions)
    const printToConsole=()=>{
        
        console.log(questions);
    }
    //states
    const [questionTypes, setQuestionTypes] = useState(null);   //list of q types available
    const [topic, setTopic] = useState('');
    const [questionType, setQuestionType] = useState(null);     //selected q type
    const [answers, setAwnsers] = useState([]);
    //side-effects
    useEffect(() => {
        onAddingAwnser(); onAddingAwnser();
        setQuestionTypes([{ id: 1, value: 'Single choice' }, { id: 2, value: 'Multi Choice' }]);
        setTopic('def-topic');
    },[]);
    //inputs
    const Question_text = useInput();
    const Text_above_question = useInput();
    const Text_below_question = useInput();
    const tags = useInput();
    //renderers
    return (
        <div className='AddQForm'>
            <h1>New Question</h1> 
            <Btn onClick={printToConsole}>print to console</Btn>
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
                        {questionType && <AwnsersSelector   onAddingAwnser={onAddingAwnser}
                                                            list={answers}
                                                            questionType={questionType} />}
                        <Input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div >
    )

}





export default CreateQuestionForm;