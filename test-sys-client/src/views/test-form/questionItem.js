import React, { useState } from 'react';
import Card from 'UIKit/Layouts/Card';
import './questionItem.css';

const QuestionItem = props => {
    const [isClicked, setIsClicked] = useState(true);

    const clickHandler = () => {

        props.onClick(props.myself);

        setIsClicked(!isClicked);
        console.log(isClicked);
    }

    return (
        <li onClick={clickHandler}>
            <Card className={'expense-item ' + (isClicked ? '' : 'chosen')}>
                <div className='expense-date'>12</div>
                <div className='expense-item__description'>
                    <h3>{props.textAbove}</h3>
                    <h6>{props.tags}</h6>
                    <div>
                        <button>Show</button>
                        <button>Edit</button>
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default QuestionItem;