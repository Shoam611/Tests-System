import React from "react";
import ReactDOM from "react-dom";
import { Line } from "UIKit";
import Card from "UIKit/Layouts/Card";
import Btn from "../UIKit/Elements/Btn";
import "./ShowQuestionsModal.css";

const QuestionComponentBackdrop = (props) => {
  return <div className="backdrop" onClick={props.onConfirm} />;
};
const QuestionComponentOverlay = (props) => {

  const normalizeDate = (inputDate) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(inputDate).toLocaleDateString('en-EN', options);
  }

  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.questionText}</h2>
      </header>
      <div className="content">
        <h3>Topic: {props.topic.name}</h3>
        <p>Question Type: {props.questionType === 1 ? "Single Answer" : "Multi Answer Type"}</p>
        <p>Text Above Question: {props.textAbove}</p>
        <p>Question Text: {props.questionText}</p>
        <p>Text Below Question: {props.textBelow}</p>
        <ul>Answers:
          {props.answers.map((answer, index) => (
            <li key={answer.id}>
              <Line>{index + 1}) {answer.value} {props.correctAnswerIds.includes(answer.id) && <p className="correct_indexer">- Correct Answer</p>}</Line>
            </li>)
          )}
        </ul>
        <p>Tags: {props.tags.join(', ')}</p>
        <p>Last update: {normalizeDate(props.updatedAt)}</p>
      </div>
      <footer className="actions">
        <Btn onClick={props.onConfirm}>Okay</Btn>
      </footer>
    </Card>
  );
};

const QuestionModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <QuestionComponentBackdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root-modal")
      )}
      {ReactDOM.createPortal(
        <QuestionComponentOverlay
          {...props}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root-modal")
      )}
    </>
  );
};

export default QuestionModal;