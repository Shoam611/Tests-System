import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Btn, Icon, Input, Line } from 'UIKit';
import QuestionComponent from '../components/QuestionComponent';
import './manageQuestionsView.css'
const ManageQuestionView = (props) => {
    const topic = useSelector(state => state.topic.topic);
    const [questionType] = useState([{ id: 1, name: 'Single Choice' }, { id: 1, name: 'Multi Choice' }]);
    const questions = useSelector(state => state.questions.questions)

    const handleShowPrev = () => { console.log(questions); }
    const handleShownext = () => { }
    const showQuestionHandler = (q) =>{
        <QuestionComponent {...q} />
    }
    const renderQuestions = () => {
        return (questions.length === 0 ? <h2>No Questions Available For The Selected Topic: {topic.name}.</h2> :
            questions.map((q) => {
                return (
                    <Box key={q._id} onClick={showQuestionHandler.bind(this,q)}>
                        {<div> </div> }
                        <div className='questions-container-item'>
                            {q.isAnActiveQuestion ? <Icon i={ 'check'} /> : <Btn i ="times" /> }
                            <h4> {q.questionText}</h4>
                            <h4> {new Date(q.updatedAt).toDateString()}</h4>
                            <h4> {questionType.find(type => type.id === q.questionType).name}</h4>
                            <Btn i=''>Edit</Btn>
                        </div>
                    </Box>
                )
            }))
    }
    return (
        <div className='mange-question-view'>
            <h1>Questions for: <span>{topic.name}</span></h1>
            <Line>
                <div style={{ width: '250px', margin: 'var(--gap-m) 0', padding: 0 }}>
                    <Input placeholder="Search by tags..." />
                </div>
            </Line>
            <div className='question-wrapper'>
                    <div className='questions-container-item grid-header'>
                        <div />
                        <Box>   <h4> questionText</h4>  </Box>
                        <Box>   <h4> updatedAt</h4>     </Box>
                        <Box>   <h4> questionType</h4>  </Box>
                        <div />
                    </div>
                <div className='questions-container '>
                    {renderQuestions()}
                </div>

                <Line justify="around">
                    <Line>
                        <Box >
                            <Line>
                                <Btn i="chevron-left" onClick={handleShowPrev} />
                                <h4>Forwards / Backwords</h4>
                                <Btn i="chevron-right" onClick={handleShownext} />
                            </Line>
                        </Box>
                    </Line>
                </Line>
            </div>
            <div>

            </div>
        </div>
    )
}
export default ManageQuestionView;