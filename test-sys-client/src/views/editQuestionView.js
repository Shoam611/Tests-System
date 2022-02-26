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
    //hooks
    const [_, forceUpdate] = useReducer(x => x + 1, 0)
    const navigate = useNavigate();
    const { id } = useParams();
    //states and fields
    const question = useSelector(state => state.questions.questions).find(q => q._id === id);
    const topic = useSelector(state => state.topic.topic);
    const [newAnswers, setNewAwnsers] = useState([]);
    //inputs
    const newQuestionText = useInput(question?.questionText);
    const newTextAbove = useInput(question?.textAbove);
    const newTextBelow = useInput(question?.textBelow);

    const awnserContentChangedHandler = useCallback((value, id) => {
        const temp = newAnswers;
        temp.find(i => i.id === id).value = value;
        setNewAwnsers(temp);
    }, [newAnswers, setNewAwnsers]);

    const handleRemoveAnswer = useCallback((id) => {
        console.log('in remove', id);
        if (newAnswers && newAnswers.length > 2) {
            console.log('in if statement', newAnswers.length);
            const index = newAnswers.indexOf(newAnswers.find(i => i.id === id));
            console.log('index: ', index);
            if (index >= 0) {
                newAnswers.splice(index, 1);
                console.log('splicing', newAnswers);

            }
            forceUpdate();
        }
    }, [newAnswers])

    const getId = useCallback(() => newAnswers.length > 0 ? newAnswers.at(-1).id + 1 : 1, [newAnswers]);

    const addingAnswerHandler = useCallback((answer = {}) => {
        console.log('trying to add answer');
        if (newAnswers.length >= 6) return;
        const id = getId();
        const newAnswer = {
            id: id,
            render: <AnswerChoice value={answer?.value ? answer.value : ''} id={id} onRemove={handleRemoveAnswer} onChange={awnserContentChangedHandler} />,
            value: answer?.value ? answer.value : '',
            isSelected:question.correctAnswerIds.indexOf(answer.id) > -1
        };
        newAnswers.push(newAnswer);
        forceUpdate();
    }, [newAnswers, handleRemoveAnswer, awnserContentChangedHandler,getId])

    const setInitialAnswers = () => {
        question?.answers.forEach(element => {
            addingAnswerHandler(element);
        });
    }
    //side effects
    useEffect(() => { !question && navigate(-1) }, [question, navigate])
    useEffect(() => { setInitialAnswers() }, []);



    return (!question ? <div /> :
        <div className="edit-question-view">

            <div className="edit-question-form-container" >
                <h2> Edit Question id: </h2>
                <h2> {question._id} </h2>

                <h4>Topic : </h4>
                <h4>{topic.name}</h4>

                <h4>Question Types : </h4>
                {questionTypes.find(type => type.id === question.questionType).value}

                <h4>Question Tex: </h4>
                <Input {...newQuestionText} />

                <h4>Text aboe question: </h4>
                <Input {...newTextAbove} />


                <h4>Text below question: </h4>
                <Input {...newTextBelow} />
                {/* {question.textBelow} */}
                <h4>Answers: </h4>
                <AnswersSelector questionType={question.questionType} list={newAnswers} onAddingAwnser={addingAnswerHandler} />
                <Btn onClick={navigate.bind(this, -1)}>Go back</Btn>
                <Btn >Submit</Btn>
            </div>
            <Line>
            </Line>
        </div>
    )
}
export default EditQuestionView;