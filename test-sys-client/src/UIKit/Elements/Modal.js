import React from "react";
import ReactDOM from "react-dom";
import Card from "UIKit/Layouts/Card";
import Btn from "./Btn";
import classes from "./QuestionComponent.module.css";

const QuestionComponentBackdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};
const QuestionComponentOverlay = (props) => {

  const normalizeDate = (inputDate) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(inputDate).toLocaleDateString('en-EN', options);
  }

  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.questionText}</h2>
      </header>
      <div className={classes.content}>
        <h3>Topic: {props.topic}</h3>
        <p>Question Type: {props.questionType === 1 ? "Single Answer" : "Multi Answer Type"}</p>
        <p>Text Above Question: {props.textAbove}</p>
        <p>Question Text: {props.questionText}</p>
        <p>Text Below Question: {props.textBelow}</p>
        <ul>Answers:
          {props.correctAwnserIndex.map((answer, index) => (
            <li key={Math.random()}>
              {index + 1}) {index === props.correctAwnserIndex[index] ? `${answer} - Correct Answer` : { answer }}
            </li>)
          )}
        </ul>
        <p>Tags: {props.tags.join(', ')}</p>
        <p>Created At: {normalizeDate(props.createdAt)}</p>
        <p>Updated At: {normalizeDate(props.updatedAt)}</p>
      </div>
      <footer className={classes.actions}>
        <Btn onClick={props.onConfirm}>Okay</Btn>
      </footer>
    </Card>
  );
};

const QuestionComponent = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <QuestionComponentBackdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <QuestionComponentOverlay
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

export default QuestionComponent;