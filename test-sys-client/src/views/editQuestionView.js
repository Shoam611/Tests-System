import { useSelector } from "react-redux";
import { Btn, Input, Line } from "UIKit";
import { questionTypes } from "models/presentationAxis";
import './editQuestionView.css'
import AnswersSelector from "./question-form/answerSelector";
import AnswerChoice from './question-form/answerChoice';
import useInput from "hooks/useInput";
import { useEffect, useReducer, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditQuestionView = (props) => {
    const [_, forceUpdate] = useReducer(x => x + 1)
    const navigate = useNavigate();
    const { id } = useParams();
    const question = useSelector(state => state.questions.questions).find(q => q._id === id);
    const topic = useSelector(state => state.topic.topic);
    const newQuestionText = useInput(question.questionText);
    const newTextAbove = useInput(question.textAbove);
    const newTextBelow = useInput(question.textBelow);
    const [newAwnsers, setNewAwnsers] = useState([]);
    
    const awnserContentChangedHandler = useCallback((value, id) => {
        const temp = newAwnsers;
        temp.filter(i => i.id === id)[0].value = value;
        setNewAwnsers(temp);
    }, [newAwnsers, setNewAwnsers]);
    
    const handleRemoveAnswer = useCallback((id) => {
        if (newAwnsers && newAwnsers.length > 2) {
            const index = newAwnsers.indexOf(newAwnsers.find(i => i.id === id));
            if (index >= 0) { newAwnsers.splice(index, 1); }
            forceUpdate()
        }
    }, [newAwnsers])
    
    const getId = useCallback(
        () => newAwnsers.length > 0 ? newAwnsers.at(-1).id + 1 : 1,
        [newAwnsers]);
        
        const addingAnswerHandler = () => {
            console.log('trying to add answer');
            if (newAwnsers.length >= 6) return;
            const id = getId();
            const newAnswer = {
                id: id,
            render: <AnswerChoice id={id} onRemove={handleRemoveAnswer} onChange={awnserContentChangedHandler} />,
            value: '',
            isSelected: false
        };
        newAwnsers.push(newAnswer);
        forceUpdate();
        console.log(newAwnsers.length);
    }
    if (!question) {
        navigate(-1)
    }
    useEffect(() => {
        if (!question) {
            navigate(-1)
        }
        setNewAwnsers(question.answers.map(a => ({
                    id: a.id,
                    value: a.value,
                    render: <AnswerChoice id={a.id} value={a.value} onRemove={handleRemoveAnswer} onChange={awnserContentChangedHandler} />,
                    isSelected: question.correctAnswerIds.indexOf(a.id) > -1
        })));
    }, [])



    return (
        <div className="edit-question-view">

            <div className="edit-question-form-container" >
                <h2> Edit Question id: </h2>
                <h2> {question._id} </h2>

                <h4>Topic : </h4>
                <h4>{topic.name}</h4>

                <h4>Question Types : </h4>
                {questionTypes.find(type => type.id == question.questionType).value}

                <h4>Question Tex: </h4>
                <Input {...newQuestionText} />

                <h4>Text aboe question: </h4>
                <Input {...newTextAbove} />


                <h4>Text below question: </h4>
                <Input {...newTextBelow} />
                {/* {question.textBelow} */}
                <h4>Answers: </h4>
                <AnswersSelector questionType={question.questionType} list={newAwnsers} onAddingAwnser={() => { addingAnswerHandler(); forceUpdate(); }} />
                <Btn onClick={navigate.bind(this, -1)}>Go back</Btn>
                <Btn >Submit</Btn>
            </div>
            <Line>
            </Line>
        </div>
    )
}
export default EditQuestionView;