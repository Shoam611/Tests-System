import Question from '../../components/Question';
import { useSelector } from 'react-redux';
import { Box, Input, Line } from 'UIKit';
import './manageQuestionsView.css'
import { useEffect, useState } from 'react';
const ManageQuestionView = (props) => {
    const topic = useSelector(state => state.topic.topic);
    const questions = useSelector(state => state.questions.questions);
    
    useEffect(() => { console.log(questions); }, []);

    const [viewedQuestions, setViewedQuestions] = useState([]);
    useEffect(() => { setViewedQuestions(questions) }, [setViewedQuestions, questions]);
    const renderQuestions = () => {
        return (viewedQuestions.length === 0 ? <h2>No Questions Available For The Selected Topic: {topic.name}.</h2> :
            viewedQuestions.map((q) => <Question key={q._id} {...q} />))
    }
    const [orderBy, setOrderBy] = useState(1);
    const sortByKey = (key) => {
        const temp = viewedQuestions.sort((q1, q2) => q1[key] > q2[key] ? orderBy : -orderBy);//.slice(0,5);
        setViewedQuestions(temp);
        setOrderBy(-orderBy)
    }
    const sortByDateString = (key) => {
        const temp = viewedQuestions.sort((q1, q2) => new Date(q1[key]) > new Date(q2[key]) ? orderBy : -orderBy)//.slice(0,5);
        setViewedQuestions(temp);
        setOrderBy(-orderBy);
    }
    const filterList = (e) => {
        let tags = e.target.value.toUpperCase();
        let tagsArray = tags.split(',').map(tag => tag.trim()).filter(tag => (!!tag) && tag);
        const newArray = questions.filter(question => question.tags.find(tag => tagsArray.includes(tag.toUpperCase())));
        setViewedQuestions(newArray)
        if (e.target.value.trim().length === 0) { setViewedQuestions(questions) }
    }
    const renderHeader = () => (
        <div className='questions-table-header'>
            <div />
            <Box onClick={sortByKey.bind(this, 'questionText')}>     <h4> Question text</h4> </Box>
            <Box onClick={sortByDateString.bind(this, 'updatedAt')}> <h4> Updated at   </h4> </Box>
            <Box onClick={sortByKey.bind(this, 'questionType')}>     <h4> Question type</h4> </Box>
            <div />
        </div>
    )

    return (
        <div className='mange-question-view'>
            <h1>Questions for: <span>{topic.name}</span></h1>
            <Line>
                <div style={{ width: '250px', margin: 'var(--gap-m) 0', padding: 0 }}>
                    <Input placeholder="Search by tags..." onChange={filterList} />
                </div>
            </Line>
            <div className='question-wrapper'>
                {renderHeader()}
                <div className='questions-container '>
                    {renderQuestions()}
                </div>
                <div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default ManageQuestionView;