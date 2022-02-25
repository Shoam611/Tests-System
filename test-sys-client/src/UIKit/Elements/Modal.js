import { useRef } from "react";
import { Dialog } from "@reach/dialog";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Btn from "./Btn";
import './Modal.css';      
import "@reach/dialog/styles.css";

const Modal = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const question = useSelector(state => state.questions.questions).find(q => q._id === id);
    const closeBtnRef=useRef();
    const onDismiss =()=> {
        navigate(-1);
    }
    if(!question) return null;
    return(
         <Dialog onDismiss={onDismiss} initialFocusRef={closeBtnRef} aria-labelledby="label">
            {/* <div  className="dialog-div" > */}
            <h2>{question.questionText}</h2>
            <Btn onClick={onDismiss} ref={closeBtnRef} i="times"/>
            {/* </div> */}
         </Dialog> 
    )

}
export default Modal;