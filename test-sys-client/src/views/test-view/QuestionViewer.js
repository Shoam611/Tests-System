// import { useCallback, useEffect, useReducer, useState } from "react";
// import { Line } from "UIKit";
import AnswersViewer from "./answerViewer";

const QuestionViewer = props => {
    // const [list, setList] = useState([]);

    // const renderQuestions = useCallback(() => {
        // const temp = props.answers.map((answer) => ({
        //     id: answer._id,
        //     render: <Line>{answer.value}</Line>,
        //     value: answer,
        //     isSelected: false,
        //     onChange: props.onChange
        // }));
        // setList(temp);
    // }, [props.answers]);

    // useEffect(() => {
    //     renderQuestions();
    // }, [renderQuestions]);

    return (
        <div>
            <h4>{props.textAbove}</h4>
            <h4>{props.questionText}</h4>
            <h4>{props.textBelow}</h4>
            <AnswersViewer questionType={props.questionType} list={props?.list} />
        </div>
    );
}

export default QuestionViewer;