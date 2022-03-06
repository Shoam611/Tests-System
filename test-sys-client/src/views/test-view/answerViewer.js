import { RadioButton, Checkbox, Line } from 'UIKit';
const AnswersViewer = props => {
    const renderSelector = () => {
        switch (props.questionType) {
            case 1: return <RadioButton onChange={props.onChange} selected={props.selected} list={props.list} />;
            case 2: return <Checkbox onChange={props.onChange} selected={props.selected} list={props.list} />;
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