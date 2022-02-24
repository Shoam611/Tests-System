import { Box, Btn, Icon } from "UIKit"
import './Question.css'
import { questionTypes } from '../models/presentationAxis'
import { useEffect, useState } from "react"
import QuestionModal from "./QuestionComponent"
const Question = (props) => {
    const [isModalOn, setIsModalOn] = useState(false);
    const showModal = () => {
        console.log('setting modal to ', !isModalOn);
        setIsModalOn(!isModalOn)
    }
    useEffect(() => {
        if (isModalOn){
            window.addEventListener('click', showModal)
            console.log('registered');
        }
        return () => {window.removeEventListener('click', showModal); console.log('unregistered'); }
   }, [isModalOn,showModal])
    return (
        <Box >
            {isModalOn && <QuestionModal {...props} />}
            <div className='questions-container-item'>
                {props.isAnActiveQuestion ? <Icon i={'check'} /> : <Btn i="times" />}
                <h4 onClick={showModal}> {props.questionText}</h4>
                <h4> {new Date(props.updatedAt).toDateString()}</h4>
                <h4> {questionTypes.find(type => type.id === props.questionType).value}</h4>
                <Btn i=''>Edit</Btn>
            </div>
        </Box>
    )
}
export default Question;