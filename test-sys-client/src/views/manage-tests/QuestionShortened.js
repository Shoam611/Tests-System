import { Box } from "UIKit";
import '../test-form/questionItem.css';
const QuestionShortened = props => {
    return (
        <Box className="expense-item">
            <div className='expense-date'>{props.index + 1}</div>
            <div className="expense-item__description">
                <h4>{props.questionText}</h4>
                <h4>{props.textAbove}</h4>
                <h4>{props.textBelow}</h4>
            </div>
        </Box>
    );
}

export default QuestionShortened;