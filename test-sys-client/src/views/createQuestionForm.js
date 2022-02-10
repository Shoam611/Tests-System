import useInput from 'hooks/useInput';
import { Btn, Dropdown, Icon, Input } from 'UIKit';
import { useEffect, useState } from 'react';
import './createQuestionForm.css';
import Question from 'models/QuestionModel';
import Awnser from 'models/AwnserModel';
import RadioButton from 'UIKit/Elements/RadioButton';
const CreateQuestionForm = () => {
    let qtypestring = "";
    //states
    const [questionType, setQuestionType] = useState(null); //selected q type
    const [questionTypes, setQuestionTypes] = useState(null); //list of q types available
    const [topic, setTopic] = useState('');
    const [qtypeval, setQtypeval] = useState();
    const [correctAwnserIndex, setCorrectAwnserIndex] = useState(-1);
    //inputs
    const Question_text = useInput();
    const Text_above_question = useInput();
    const Text_below_question = useInput();
    const tags = useInput();
    const awnsers = [new Awnser(1, useInput(), false), new Awnser(2, useInput(), false), new Awnser(3, useInput(), false)];
    //component - did - mount
    useEffect(() => {
        //in futere setted by redux selector
        setTopic("def-topic");
        //in futere setted by service
        setQuestionTypes([{ id: 1, value: 'single choice question' },
        { id: 2, value: 'multiple choice questions' }]);
    }, []);
    useEffect(() => {
        if (questionType) {
            qtypestring = questionTypes.find(qtype => qtype.id == questionType).value;
            setQtypeval(questionTypes.find(qtype => qtype.id == questionType).value)
        }
    }, [questionType])
    //handlers
    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuestion = new Question(topic, questionType, Question_text.value, Text_above_question.value, Text_below_question.value, tags.value, awnsers, correctAwnserIndex);
        for (const key in newQuestion) {
            console.log(key);
            console.log(newQuestion[key]);
        }
    }
    const handleQuestionTypeChanged = (qType) => {
        setQuestionType(qType);
    }
    const awnserChangedHandler = (selectedId) =>{

    }
    //renderers

    const renderAwnserListItem = ({ key, content, isCorrect }) => {
        return (
            <li key={key}>
                <Input {...content} placeholder={`awnser # ${key}`} />
            </li>
        )
    }
    const renderAwnsersList = () => {
        return (
            <ul>
                {awnsers.map(a => { renderAwnserListItem(a); })}
            </ul>
        )
    }

    const renderAwnserSelector = () => {
        if (questionType) {
            return (
                <div>
                    <Btn i="plus" />
                    
                    {/* <RadioButton list={awnsers} onChange={awnserChangedHandler}/> */}
                    <ul>
                        {awnsers.map(a => {
                            return (
                                <li key={a.key}>
                                    <div style={{display:'flex',gap:"6px"}}>
                                        <Icon i="minus" color="" />
                                        <div>
                                            <Input {...a.content} placeholder={`awnser # ${a.key}`} />
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <hr />
                </div>
            )
        }
        return null;
    }
    return (
        <div className='AddQForm'>
            <h1>New Question</h1>
            <form onSubmit={handleSubmit}>
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
        </div >
    )
}

export default CreateQuestionForm;