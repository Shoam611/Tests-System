import React from "react";
// import './QuestionsView.css';
import CreateQuestionForm from "./question-form/createQuestionForm";

const QuestionsView = () => {
    return (
        <div className="QuestionView">
         {/* <div className="questions-view-outlet-container"> */}
         {/* </div> */}
         <CreateQuestionForm />
        </div>
    )
}
export default QuestionsView;