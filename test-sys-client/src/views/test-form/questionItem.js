import React, { useState } from 'react';
import { Btn } from 'UIKit';
import QuestionComponent from 'UIKit/Elements/QuestionComponent';
import Card from 'UIKit/Layouts/Card';
import './questionItem.css';

const QuestionItem = props => {
    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const tenFirstWords = props.textAbove.split(' ').slice(0, 10).join(' ');

    const onEnter = () => {
        setHover(true);
    }
    const onLeave = () => {
        setHover(false);
    }
    const onFullShowHandler = () => {
        setShowModal(!showModal);
    }

    return (
        <Card className='expense-item'>
            <div className='expense-date'>{props.index + 1}</div>
            <div className='expense-item__description' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <h2>{hover ? props.textAbove : tenFirstWords}</h2>
                <h4>{props.tags.join(', ')}</h4>
            </div>
            {showModal ? <QuestionComponent onConfirm={onFullShowHandler} {...props} /> : ''}
            <Btn onClick={onFullShowHandler}>Show</Btn>
        </Card>
    );
}

export default QuestionItem;