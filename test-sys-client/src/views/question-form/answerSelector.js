import { Btn, Rows, RadioButton, Checkbox } from 'UIKit';
const AnswersSelector = props => {
    const renderSelector = () => {
        switch (props.questionType) {
            case 1: return <RadioButton selected={props.selected} list={props.list} />;
            case 2: return <Checkbox    selected={props.selected} list={props.list} />;
            default: return null;
        }
    }
    return (
        <Rows>
            <Btn i="plus" onClick={props.onAddingAwnser} />
            {renderSelector()}
            <hr />
        </Rows>
    )
}
export default AnswersSelector