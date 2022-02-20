import React, { useState } from 'react';
import Modal from 'UIKit/Elements/Modal';
import Card from 'UIKit/Layouts/Card';
import './questionItem.css';

const QuestionItem = props => {
    const [hover, setHover] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const tenFirstWords = props.questionText.split(' ').slice(0, 10).join(' ');

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
                <h2>{hover ? props.questionText : tenFirstWords}</h2>
                <h4>{props.tags.join(', ')}</h4>
            </div>
            {showModal ? <Modal onConfirm={onFullShowHandler} {...props} /> : ''}
            <button className='expense-date' onClick={onFullShowHandler}>Show</button>
        </Card>
    );
}

export default QuestionItem;