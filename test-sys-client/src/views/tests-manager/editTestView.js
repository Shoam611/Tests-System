import { useDispatch, useSelector } from "react-redux";
import { Btn, Dropdown, Input } from "UIKit";
import { testTypes, languages } from "models/presentationAxis";
import '../questions-manager/editQuestionView.css'
import useInput from "hooks/useInput";
import { useCallback, useEffect, useState } from "react";
import Test from "models/TestModel";
import { updateTest } from "Store/actions/test";
import ShowQuestionsModal from "../../components/ShowQuestionsModal";
import QuestionShortened from "views/tests-manager/QuestionShortened";
const { useNavigate, useParams, } = require("react-router-dom");
const EditTestView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const topic = useSelector(state => state.topic.topic);
    const test = useSelector(state => state.tests.tests).find(t => t._id === id);
    const questions = useSelector(state => state.questions.questions);
    const [newShowIfWrong, setNewShowIfWrong] = useState(test?.showIfWrong);
    const [newTestType, setNewTestType] = useState(test?.testType);
    const [newLanguage, setNewLanguage] = useState(test?.lang);
    const newManagerEmail = useInput(test?.managerEmail);
    const newTestName = useInput(test?.name);
    const newPassingGrade = useInput(test?.passingGrade);
    const newHeader = useInput(test?.header);
    const newMsgOnSucc = useInput(test?.msgOnSucc);
    const newMsgOnFail = useInput(test?.msgOnFail);
    const newEmailSubOnSucc = useInput(test?.emailSubOnSucc);
    const newEmailBodyOnSucc = useInput(test?.emailBodyOnSucc);
    const newEmailSubOnFail = useInput(test?.emailSubOnFail);
    const newEmailBodyOnFail = useInput(test?.emailBodyOnFail);
    const [errorMessage, setErrorMessage] = useState("");
    const [newQuestions,] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTest = new Test(topic, newTestType, newLanguage, newManagerEmail.value, newTestName.value, newPassingGrade.value, newHeader.value, newMsgOnSucc.value, newMsgOnFail.value, newShowIfWrong, newEmailSubOnSucc.value, newEmailBodyOnSucc.value, newEmailSubOnFail.value, newEmailBodyOnFail.value, newQuestions);
        const [value, message] = newTest.validate();
        if (value) {
            dispatch(updateTest(newTest, id));
            navigate(-1);
        }
        setErrorMessage(message);
    }

    //methods
    const checkedHandler = () => setNewShowIfWrong(!newShowIfWrong);

    const questionSelectedHandler = useCallback((item, value) => {
        (value) ? newQuestions.push(item._id) : newQuestions.splice(newQuestions.indexOf(item._id), 1)
    }, [newQuestions]);

    const setListValue = useCallback(() => {
        const temp = questions.map((value, index) => ({
            id: value._id,
            render: <QuestionShortened {...value} index={index} />,
            value: value,
            isSelected: newQuestions.indexOf(value._id) > -1,
            onChange: questionSelectedHandler,
        }))
        setList(temp);
    }, [setList, questions, newQuestions, questionSelectedHandler])

    const onFullShowHandler = () => { setShowModal(!showModal); }

    const setIninitalQuestions = useCallback(() => {
        test?.questions.forEach(q => newQuestions.push(q));
    }, [newQuestions, test?.questions])

    useEffect(() => {
        setIninitalQuestions();
        setListValue();
    }, [setIninitalQuestions, setListValue])


    return (
        <div className="edit-question-view">

            <div className="edit-question-form-container" >
                <h2> Edit Test id: </h2>
                <h2> {id} </h2>

                <h4>Topic : </h4>
                <h4>{topic.name}</h4>

                <h4>Test Type:</h4>
                <Dropdown list={testTypes} selected={newTestType} onChange={(value) => setNewTestType(value)} />

                <h4>Language : </h4>
                <Dropdown list={languages} selected={newLanguage} onChange={(value) => setNewLanguage(value)} />

                <h4>Manager Email: </h4>
                <Input {...newManagerEmail} />

                <h4>Test Name: </h4>
                <Input {...newTestName} />

                <h4>Passing Grade: </h4>
                <Input type="number" {...newPassingGrade} />

                <h4>Header: </h4>
                <Input {...newHeader} />

                <h4>Message To Student On Success: </h4>
                <Input {...newMsgOnSucc} />

                <h4>Message To Student On Failure: </h4>
                <Input {...newMsgOnFail} />

                <h4>Show Student Where He Was Wrong: </h4>
                <input type="checkbox" defaultChecked={newShowIfWrong} onChange={checkedHandler} />

                <h4>Email To Manager On Success - Subject: </h4>
                <Input {...newEmailSubOnSucc} />

                <h4>Email To Manager On Success - Body: </h4>
                <Input {...newEmailBodyOnSucc} />

                <h4>Email To Manager On Failure - Subject: </h4>
                <Input {...newEmailSubOnFail} />

                <h4>Email To Manager On Failure - Body: </h4>
                <Input {...newEmailBodyOnFail} />

                <h4>Questions</h4>
                <Btn onClick={onFullShowHandler}>Show Questions</Btn>
                {showModal ? <ShowQuestionsModal onSelect={questionSelectedHandler} onConfirm={onFullShowHandler} list={list} /> : ''}
                {errorMessage.trim().length !== 0 && <><h2>Message Error:</h2><p style={{ color: "red" }}>{errorMessage}</p></>}

                <Btn onClick={navigate.bind(this, -1)}>Go back</Btn>
                <Btn onClick={handleSubmit}>Submit</Btn>
            </div>
        </div>
    )
}
export default EditTestView;