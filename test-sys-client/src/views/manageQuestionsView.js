import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Btn, Icon, Input, Line } from 'UIKit';
import './manageQuestionsView.css'
const ManageQuestionView = (props) => {
    const topic = useSelector(state => state.topic.topic);
    const [questionType] = useState([{ id: 1, name: 'Single choice' }, { id: 1, name: 'Multi choice' }]);
    const questions = useSelector(state => state.questions.questions)

    const handleShowPrev = () => { console.log(questions); }
    const handleShownext = () => { }

    const renderQuestions = () => {
        return (questions.length === 0 ? <h2>No Questions available for the selected topic : {topic.name}</h2> :
            questions.map((q) => {
                return (
                    <Box key={q._id} >
                        <div className='questions-container-item'>
                            <Icon i={q.isAnActiveQuestion ? 'check' : 'times'} />
                            <h4> {q.questionText}</h4>
                            <h4> {new Date(q.updatedAt).toDateString()}</h4>
                            <h4> {questionType.find(type => type.id === q.questionType).name}</h4>
                            <Btn i='caret-down'>Actions</Btn>
                        </div>
                    </Box>
                )
            }))
    }
    return (
        <div className='mange-question-view'>
            <h1>Questions for: <span>{topic.name}</span></h1>
            <Line>
                <div style={{ width: '250px' ,margin:'var(--gap-m) 0',padding:0}}>
                    <Input placeholder="search by tags" />
                </div>
            </Line>
            <div className='question-wrapper'>
                    <div className='questions-container-item grid-header'>
                        <Box>   <h4 >Is active</h4>     </Box>
                        <Box>   <h4> questionText</h4>  </Box>
                        <Box>   <h4> updatedAt</h4>     </Box>
                        <Box>   <h4> questionType</h4>  </Box>
                        <h4> actions</h4>
                    </div>
                <div className='questions-container '>
                    {renderQuestions()}
                </div>

                <Line justify="around">
                    <Line>
                        <Box >
                            <Line>
                                <Btn i="chevron-left" onClick={handleShowPrev} />
                                <h4>go forward / backwords</h4>
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