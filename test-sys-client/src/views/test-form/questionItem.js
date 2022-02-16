import React from 'react';
import Card from 'UIKit/Layouts/Card';
import './questionItem.css';

const QuestionItem = props => {
    return (
        <Card className='expense-item'>
            <div className='expense-date'>{props.index}</div>
            <div className='expense-item__description'>
                <h3>{props.textAbove}</h3>
                <h6>{props.tags}</h6>
            </div>
        </Card>
    );
}

export default QuestionItem;