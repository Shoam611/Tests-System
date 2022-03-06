import { useCallback, useEffect, useReducer, useState } from "react";
import { Box } from "UIKit";
import AnswersViewer from "./answerViewer";

const QuestionViewer = props => {
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const [list, setList] = useState([]);
    const [answers] = useState([]);

    const renderQuestions = useCallback(() => {
        const temp = props.answers.map((answer) => ({
            id: answer._id,
            render: <Box>{answer.value}</Box>,
            value: answer,
            isSelected: false,
            father: props._id,
            onChange: props.onChange
        }));
        setList(temp);
    }, [props.answers]);

    useEffect(() => {
        renderQuestions();
    }, [renderQuestions]);

    return (
        <div>
            <h4>{props.textAbove}</h4>
            <h4>{props.questionText}</h4>
            <h4>{props.textBelow}</h4>
            <AnswersViewer questionType={props.questionType} list={list} />
        </div>
    );
}

export default QuestionViewer;