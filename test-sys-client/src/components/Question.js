import { useCallback, useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { questionTypes } from '../models/presentationAxis'
import QuestionModal from "./QuestionComponent"
import { Box, Btn, Icon } from "UIKit"
import './Question.css'
const Question = (props) => {
    const [isModalOn, setIsModalOn] = useState(false);
    const showModal = useCallback(() => {
        console.log('setting modal to ', !isModalOn);
        setIsModalOn(!isModalOn)
    }, [setIsModalOn, isModalOn])
    useEffect(() => {
        if (isModalOn) {
            window.addEventListener('click', showModal)
            console.log('registered');
        }
        return () => { window.removeEventListener('click', showModal); console.log('unregistered'); }
    }, [isModalOn, showModal]);
    const setBackgroundLocation = () => { }
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const onLinkClicked = () => {
        dispatch(setBackgroundLocation(location))
        navigate(`/qmodal/${props._id}`);
    }

    return (
        <Box >
            {isModalOn && <QuestionModal {...props} />}
            <div className='questions-container-item'>
                {props.isAnActiveQuestion ? <Icon i={'check'} /> : /*<Btn i="times" />*/ <div />}
                {/* <Link to={`/qmodal/${props._id}`} state={{ bg: location }}> */}
                    <h4 onClick={showModal}> {props.questionText}</h4>
                {/* </Link> */}
                <h4> {new Date(props.updatedAt).toDateString()}</h4>
                <h4> {questionTypes.find(type => type.id === props.questionType).value}</h4>
                <Btn i=''>Edit</Btn>
            </div>
        </Box>
    )
}
export default Question;