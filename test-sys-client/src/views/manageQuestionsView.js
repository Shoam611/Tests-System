import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Btn, Line } from 'UIKit';
const ManageQuestionView = (props) => {
    const dispatch = useDispatch()
    const [topic, setTopic] = useState()
    const questions = useSelector(state => state.questions.questions)
    useEffect(() => {
        setTopic('def-topic')
    }, []);
    const handleShowPrev = () => { console.log(questions); }
    const handleShownext = () => {  }
    
    const renderQuestions = () => {
        return (
            questions.map((q, index) => {
                console.log(q._id,q.answers);
                return (
                    <Box key={q._id}>
                        <Line>
                        <h4>question text: <span>{q.questionText}</span></h4> <Btn />
                        </Line>
                    </Box>
                )
            }))
    }
    return (
        <div style={{display:'flex',flexFlow:'column',maxHeight:'auto='}}>
            <h1>Questions for <span>{topic}</span></h1>
         
            <div style={{flex:' 0 1 auto',overflow:'scroll'}}>
            {renderQuestions()}


                <Line >
                    <Btn i="chevron-left" onClick={handleShowPrev} />
                    <h4>go forward / backwords</h4>
                    <Btn i="chevron-right" onClick={handleShownext} />
                </Line>
            </div>
        </div>
    )
}
export default ManageQuestionView;