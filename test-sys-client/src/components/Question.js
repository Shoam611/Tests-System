import { useCallback, useEffect, useState } from "react"
import {  useNavigate } from "react-router-dom"
import { questionTypes } from '../models/presentationAxis'
import QuestionModal from "./QuestionComponent"
import { Box, Btn, Icon } from "UIKit"
import './Question.css'
const Question = (props) => {
    const [isModalOn, setIsModalOn] = useState(false);
    const showModal = useCallback(() => {
        setIsModalOn(!isModalOn)
    }, [setIsModalOn, isModalOn])
    useEffect(() => {
        if (isModalOn) {
            window.addEventListener('click', showModal)
        }
        return () => { window.removeEventListener('click', showModal); }
    }, [isModalOn, showModal]);
    const navigate = useNavigate();


    return (
        <Box >
            {isModalOn && <QuestionModal {...props} />}
            <div className='questions-container-item'>
                {props.isAnActiveQuestion ? <Icon i={'check'} /> :  <div />}
                    <h4 onClick={showModal}> {props.questionText}</h4>
                <h4> {new Date(props.updatedAt).toDateString()}</h4>
                <h4> {questionTypes.find(type => type.id === props.questionType).value}</h4>
                <Btn onClick={()=>{navigate(`editQuestion/${props._id}`)}}>Edit</Btn>
            </div>
        </Box>
    )
}
export default Question;