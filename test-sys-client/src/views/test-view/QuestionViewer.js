import { useCallback, useEffect, useState } from "react"

const { Checkbox } = require("UIKit")

const QuestionViewer = props => {
    const [list, setList] = useState([]);

    const answerChangeHandler =useCallback(() => { },[])

    const renderQuestions =useCallback(() => {
        const temp = props.answers.map((answer) => ({
            id: answer._id,
            render: <p>{answer.value}</p>,
            value: answer,
            isSelected: false,
            onChange: answerChangeHandler
        }))
        setList(temp)
    },[answerChangeHandler,props.answers])

    useEffect(() => {
        renderQuestions();
    }, [renderQuestions]);
    return (
        <>
            {console.log(props)}
            <h4>{props.textAbove}</h4>
            <h4>{props.questionText}</h4>
            <h4>{props.textBelow}</h4>
            <Checkbox list={list} />
        </>
    );
}

export default QuestionViewer;