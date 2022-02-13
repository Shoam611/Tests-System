import { useState, useEffect } from "react";
import { Btn, Rows, RadioButton, Checkbox } from 'UIKit';

const AwnsersSelector = props => {
    const [optionList, setOptionList] = useState([]);
    const [selectedAwnser, setSelectedAwnser] = useState(0);
    useEffect(() => {setOptionList(renderOptionsList()) }, []);
    const renderOptionsList = () => {
        return (
            <>
                {props.questionType == 1 &&
                <RadioButton selected={props.selected} onChange={props.onChange} list={props.list} />}
            </>
        )
    }
    return (
        <Rows>
            <Btn i="plus" />
            {renderOptionsList()}
            <hr />
        </Rows>
    )
}


export default AwnsersSelector