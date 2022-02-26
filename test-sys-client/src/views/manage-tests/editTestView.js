import { useDispatch, useSelector } from "react-redux";
import { Btn, Dropdown, Input } from "UIKit";
import { testTypes, languages } from "models/presentationAxis";
import '../editQuestionView.css'
import useInput from "hooks/useInput";
import { useCallback, useEffect, useState } from "react";
import Test from "models/TestModel";
import { updateTest } from "Store/actions/test";
import ShowQuestionsModal from "../../components/ShowQuestionsModal";
import QuestionShortened from "views/manage-tests/QuestionShortened";
const { useNavigate, useParams, } = require("react-router-dom");
const EditTestView = props => {
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
    const [newQuestions, setQuestions] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            const newTest = new Test(newTestType, newLanguage, newManagerEmail.value, newTestName.value, newPassingGrade.value, newHeader.value, newMsgOnSucc.value, newMsgOnFail.value, newShowIfWrong, newEmailSubOnSucc.value, newEmailBodyOnSucc.value, newEmailSubOnFail.value, newEmailBodyOnFail.value, newQuestions);
            dispatch(updateTest(newTest, id));
            navigate(-1);
        }
    }
    //RegEx validation
    const ValidateEmail = (mail) => {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
            return true;
        }
        return false;
    }
    //validations
    const formValidation = () => {
        if (+newTestType < 1 || +newTestType > testTypes.length) {
            setErrorMessage('Please Choose a Test Type.');
            return false;
        }
        if (+newLanguage < 1 || +newLanguage > languages.length) {
            setErrorMessage('Please Choose a Language.');
            return false;
        }
        if (newManagerEmail.value.trim().length === 0) {
            setErrorMessage('Email Address Cannot Be Empty!');
            return false;
        }
        if (!ValidateEmail(newManagerEmail.value)) {
            setErrorMessage('Invalid Email Address!');
            return false;
        }
        if (newTestName.value.trim().length === 0) {
            setErrorMessage('Test Name Cannot Be Empty!');
            return false;
        }
        if (+newPassingGrade.value < 1 || +newPassingGrade.value > 100) {
            setErrorMessage('Invalid Passing Grade! Must Be Between 1 and 100.');
            return false;
        }
        if (newHeader.value.trim().length === 0) {
            setErrorMessage('Test Header Cannot Be Empty!');
            return false;
        }
        if (newMsgOnSucc.value.trim().length === 0) {
            setErrorMessage('Message On Succes Cannot Be Empty!');
            return false;
        }
        if (newMsgOnFail.value.trim().length === 0) {
            setErrorMessage('Message On Failure Cannot Be Empty!');
            return false;
        }
        if (newEmailSubOnSucc.value.trim().length === 0 || newEmailBodyOnSucc.value.trim().length === 0) {
            setErrorMessage('Email On Succes Fields Cannot Be Empty!');
            return false;
        }
        if (newEmailSubOnFail.value.trim().length === 0 || newEmailBodyOnFail.value.trim().length === 0) {
            setErrorMessage('Email On Failure Fields Cannot Be Empty!');
            return false;
        }
        // if (questions.length === 0) {
        //     setErrorMessage('Must Select Questions In The "Manage Questions" Tab.');
        //     return false;
        // }
        setErrorMessage('');
        return true;
    }
    //methods
    const checkedHandler = () => setNewShowIfWrong(!newShowIfWrong);
    // const isExists = (value) => {
    //     for (let question of newQuestions) {
    //         if (question._id === value) return true;
    //     }
    //     return false;
    // }
    const questionSelectedHandler = useCallback((item, value) => {
        // value ? newQuestions.push(item) : newQuestions.pop(item);
        console.log(newQuestions);
        console.log("value", value);
        if (!value) {
            const foundTest = newQuestions.find(question => question._id === item._id);
            const indexOfTest = newQuestions.indexOf(foundTest);
            const temp = newQuestions.splice(indexOfTest, 1);
            setQuestions(temp);
            console.log('newQuestions State >', temp);
        }
        else {
            newQuestions.push(item._id);
        }
    },[setQuestions,newQuestions])
    const setListValue = useCallback(() => {
        console.log("in set List value",newQuestions);
            const temp = questions.map((value, index) => ({
            id: value._id,
            render: <QuestionShortened {...value} index={index} />,
            value: value,
            isSelected: newQuestions.map(q=>q._id).indexOf(value._id) > -1,// isExists(value._id),
            onChange: questionSelectedHandler,
        }))
        setList(temp);
    }, [setList,questions,newQuestions,questionSelectedHandler])
    
    const onFullShowHandler = () => {
        setShowModal(!showModal);
    }

    const setInitialSelected=()=>{
        for (const question of newQuestions) {
            question._id && 
            questionSelectedHandler(question,true)
        }
    }
    const setIninitalQuestions =useCallback(() =>{
        console.log("init" , test.question);
        test.questions.forEach(q => newQuestions.push(q));
    },[test.questions,newQuestions])
    useEffect(()=>{
        setIninitalQuestions();
        setListValue(); 
        setInitialSelected();
    },[setIninitalQuestions,setListValue])
    

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
                <textarea {...newEmailSubOnSucc} />

                <h4>Email To Manager On Success - Body: </h4>
                <textarea {...newEmailBodyOnSucc} />

                <h4>Email To Manager On Failure - Subject: </h4>
                <textarea {...newEmailSubOnFail} />

                <h4>Email To Manager On Failure - Body: </h4>
                <textarea {...newEmailBodyOnFail} />

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