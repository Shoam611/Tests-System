import React, { useState } from 'react';
import { Checkbox } from 'UIKit';
import Card from 'UIKit/Layouts/Card';
import './questionItem.css';

const QuestionItem = props => {
    const [checked, setChecked] = useState(false); 

    const clickHandler = () => {
        if (!checked) {
            props.onAdd(props.myself);
            setChecked(true);
        } else {
            props.onRemove(props.id);
            setChecked(false);
        }
        console.log(checked);
    }

    return (
        <li>
            <Card className={'expense-item ' + (checked ? 'chosen' : '')}>
                <div className='expense-date'>12</div>
                <div className='expense-item__description'>
                    <h3>{props.textAbove}</h3>
                    <h6>{props.tags}</h6>
                    <div>
                        <Checkbox onChange={clickHandler} />
                        <button >Show</button>
                        <button>Edit</button>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default QuestionItem;