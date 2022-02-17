import React from 'react';
import Card from 'UIKit/Layouts/Card';
import './questionItem.css';

const QuestionItem = props => {
    return (
        <Card className='expense-item'>
            <div className='expense-date'>{props.index}</div>
            <div className='expense-item__description'>
                <h2>{props.textAbove}</h2>
                <h4>{props.tags.join(', ')}</h4>
            </div>
        </Card>
    );
}

export default QuestionItem;