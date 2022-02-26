import { useDispatch, useSelector } from "react-redux";
import { Btn, Input, Line,RadioButton } from "UIKit";
import { presentationAxis, questionTypes } from "models/presentationAxis";
import './editQuestionView.css'
import AnswersSelector from "./question-form/answerSelector";
import AnswerChoice from './question-form/answerChoice';
import useInput from "hooks/useInput";
import { useEffect, useReducer, useState, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Question from "models/QuestionModel";
import { updateQuestion } from "Store/actions/question";

const EditQuestionView = (props) => {
    //hooks
    const [ _ , forceUpdate] = useReducer(x => x + 1, 0)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();
    //states and fields
    const question = useSelector(state => state.questions.questions).find(q => q._id === id);
    const axis = presentationAxis.map(item => ({ ...item, isSelected: question?.presentaionAxisId===item.id, render: item.value }));
    const topic = useSelector(state => state.topic.topic);
    const [newAnswers, setNewAwnsers] = useState([]);
    //inputs
    const newQuestionText = useInput(question?.questionText);
    const newTextAbove = useInput(question?.textAbove);
    const newTextBelow = useInput(question?.textBelow);
    const tags = useInput(question?.tags.join(' , '))
    const awnserContentChangedHandler = useCallback((value, id) => {
        console.log('triggered',value,id);
        const temp = newAnswers;
        temp.find(i => i.id === id).value = value;
        setNewAwnsers(temp);
        console.log(temp);
    }, [newAnswers]);

    const handleRemoveAnswer = useCallback((id) => {
        if (newAnswers && newAnswers.length > 2) {
            const index = newAnswers.indexOf(newAnswers.find(i => i.id === id));
            if (index >= 0) {newAnswers.splice(index, 1);}
            forceUpdate();
        } }, [newAnswers])

    const getId = useCallback(() => newAnswers.length > 0 ? newAnswers.at(-1).id + 1 : 1, [newAnswers]);

    const addingAnswerHandler = useCallback((answer = {}) => {
        if (newAnswers.length >= 6) return;
        const id = getId();
        const newAnswer = {
            id: id,
            render: <AnswerChoice value={answer?.value ? answer.value : ''} id={id} onRemove={handleRemoveAnswer} onChange={awnserContentChangedHandler} />,
            value: answer?.value ? `${answer.value}` : '',
            isSelected: question.correctAnswerIds.indexOf(answer.id) > -1
        };
        newAnswers.push(newAnswer);
        forceUpdate();
    }, [newAnswers, handleRemoveAnswer, awnserContentChangedHandler, getId,question?.correctAnswerIds])

    const getIndexes = (answers) => {
        return answers.map(({ isSelected }, index) => ({ isCorrect: isSelected, index })).filter(({ isCorrect }) => isCorrect).map(({ index }) => index);
    }

    const setInitialAnswers = () => {
        question?.answers.forEach(element => {
            addingAnswerHandler(element);
        });
    }
    const onSubmitHandler = () => {
        if (true) { //futere to be validate
            const selectedAxis = axis.find(item =>item.isSelected===true).id
            const newQuestion = new Question(topic.name,question.questionType,newQuestionText.value,newTextAbove.value,newTextBelow.value,tags.value,newAnswers.map(({ value }, index) => ({ value, id: index })),  getIndexes(newAnswers) , selectedAxis);
            dispatch(updateQuestion(newQuestion,question._id));
            navigate(-1);
        }
    }
    
    //side effects
    useEffect(() => { !question && navigate(-1) }, [question, navigate])
    useEffect(() => {console.log('answers did mount'); setInitialAnswers() }, []);



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

                <h4>Question presentaion axis : </h4>
                <RadioButton list={axis} />

                <h4>tags</h4>
                <Input {...tags} />
                <h4>Answers: </h4>
                <AnswersSelector questionType={question.questionType} list={newAnswers} onAddingAwnser={addingAnswerHandler} />
                <Btn onClick={navigate.bind(this, -1)}>Go back</Btn>
                <Btn onClick={onSubmitHandler}>Submit</Btn>
            </div>
            <Line>
            </Line>
        </div>
    )
}
export default EditQuestionView;