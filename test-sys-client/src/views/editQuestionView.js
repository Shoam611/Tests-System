import { useSelector } from "react-redux";
import { Btn, Input, Line } from "UIKit";
import { questionTypes } from "models/presentationAxis";
import './editQuestionView.css'
import AnswersSelector from "./question-form/answerSelector";
import useInput from "hooks/useInput";
const { useNavigate, useParams } = require("react-router-dom");

const EditQuestionView = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const question = useSelector(state => state.questions.questions).find(q => q._id === id);
    const topic = useSelector(state => state.topic.topic);
    const newQuestionText = useInput(question.questionText);
    const newTextAbove = useInput(question.textAbove);
    const newTextBelow = useInput(question.textBelow);
    console.log(question)
    const newAwnsers = question.answers.map(a=>({
        id:a.id,
        render:<p>{a.value}</p>,
        value:a.value,
        isSelected:question.correctAnswerIds.indexOf(a.id)>-1
    }));
    return (
        <div className="edit-question-view">

            <div className="edit-question-form-container" >
                <h2> Edit Question id: </h2>
                <h2> {question._id} </h2>

                <h4>Topic : </h4>
                <h4>{topic.name}</h4>

                <h4>Question Types : </h4>
                {questionTypes.find(type => type.id == question.questionType).value}

                <h4>Question Tex: </h4>
                <Input {...newQuestionText} />

                <h4>Text aboe question: </h4>
                <Input {...newTextAbove} />
               

                <h4>Text below question: </h4>
                <Input {...newTextBelow} />
                {/* {question.textBelow} */}
                <h4>Answers: </h4>
                <AnswersSelector questionType={question.questionType} list={newAwnsers} onAddingAwnser={() => { console.log('clicked'); }} />
                <Btn onClick={navigate.bind(this, -1)}>Go back</Btn>
                <Btn >Submit</Btn>
            </div>
            <Line>
            </Line>
        </div>
    )
}
export default EditQuestionView;