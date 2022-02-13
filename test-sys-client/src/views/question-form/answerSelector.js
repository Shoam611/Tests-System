import {  Btn, Rows, RadioButton, Checkbox } from 'UIKit';
const AwnsersSelector = props => {

    const renderSelector = () => {
        switch (props.questionType) {
            case 1: return <RadioButton selected={props.selected} /*onChange={props.onChange}*/ list={props.list} />;
            case 2: return <Checkbox    selected={props.selected} /*onChange={props.onChange}*/ list={props.list} />;
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
export default AwnsersSelector