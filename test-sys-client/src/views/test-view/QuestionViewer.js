import AnswersViewer from "./answerViewer";

const QuestionViewer = props => {

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