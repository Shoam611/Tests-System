import { RadioButton, Checkbox, Line } from 'UIKit';
const AnswersViewer = props => {
    const renderSelector = () => {
        switch (props.questionType) {
            case 1: return <RadioButton selected={props.selected} list={props.list} />;
            case 2: return <Checkbox selected={props.selected} list={props.list} />;
            default: return null;
        }
    }
    return (
        <Line>
            {renderSelector()}
        </Line>
    )
}
export default AnswersViewer