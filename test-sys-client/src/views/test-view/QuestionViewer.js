import { useCallback, useEffect, useReducer, useState } from "react"
import AnswerChoice from "views/question-form/answerChoice";
import AnswersViewer from "./answerViewer";

const QuestionViewer = props => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [list, setList] = useState([]);
    const [answers] = useState([]);

    const answerChangeHandler = useCallback(() => { }, [])

    const renderQuestions = useCallback(() => {
        const temp = props.answers.map((answer) => ({
            id: answer._id,
            render: <p>{answer.value}</p>,
            value: answer,
            isSelected: false,
            onChange: answerChangeHandler
        }))
        setList(temp)
    }, [answerChangeHandler, props.answers]);

    const awnserContentChangedHandler = useCallback((value, id) => {

        answers.find(i => i.id === id).value = value;
    }, [answers]);

    const getId = useCallback(() => answers.length > 0 ? answers.at(-1).id + 1 : 1, [answers]);
    
    const onAddingAwnser = useCallback(() => {
        if (answers.length >= 6) return;
        const id = getId();
        const newAnswer = {
            id: id,
            render: <AnswerChoice id={id}
                onChange={awnserContentChangedHandler} />,
            value: '',
            isSelected: false
        };
        answers.push(newAnswer);
        forceUpdate();
    }, [answers, awnserContentChangedHandler, getId]);


    

    useEffect(() => {
        renderQuestions();
    }, [renderQuestions]);
    
    return (
        <div>
            <h4>{props.textAbove}</h4>
            <h4>{props.questionText}</h4>
            <h4>{props.textBelow}</h4>
            <AnswersViewer questionType={props.questionType} list={list} onAddingAwnser={onAddingAwnser} />
        </div>
    );
}

export default QuestionViewer;