import React from "react";
import ReactDOM from "react-dom";
import Card from "UIKit/Layouts/Card";
import Btn from "./Btn";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.questionText}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
        <ul>
          {props.correctAwnserIndex.map((answer) => (
            <li key={Math.random()}>
              {answer}
            </li>)
          )}
        </ul>
      </div>
      <footer className={classes.actions}>
        <Btn onClick={props.onConfirm}>Okay</Btn>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          {...props}
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;


// <div className='expense-item__description'>
// Topic: {props.data.topic},
// <br/>
// Text Above: {props.data.textAbove},
// <br/>
// Text Below: {props.data.textBelow},
// <br/>
// Question Text: {props.data.questionText},
// <br/>
// Correct Answer/s: <ul>
//     {props.data.correctAwnserIndex.map((answer) =>

//         <li key={Math.random()}>
//             {answer}
//         </li>
//     )}
// </ul>,
// <br/>
// Answers:
// <ul>
//     {props.data.answers.map((answer) =>
//         <li key={answer.id}>
//             {answer.value}
//         </li>
//     )}
// </ul>

// </div>