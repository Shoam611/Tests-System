import useInput from 'hooks/useInput';
import { Btn, Dropdown, Input, Line, RadioButton, } from 'UIKit';
import { useEffect, useState, useReducer, useCallback } from 'react';
import Question from 'models/QuestionModel';
import AnswersSelector from './answerSelector';
import AwnserChoice from './answerChoice';
import './createQuestionForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from 'Store/actions/question';
import { presentationAxis } from 'models/presentationAxis';
const CreateQuestionForm = () => {
    //states
    const [questionTypes, setQuestionTypes] = useState(null);   //list of q types available
    const [topic, setTopic] = useState('');
    const [questionType, setQuestionType] = useState(null);     //selected q type
    const [answers, setAnswers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    //helpers
    const [_, forceUpdate] = useReducer(x => x + 1, 0);
    const axis = presentationAxis.map(item => ({ ...item, isSelected: false, render: item.value }));
    axis[0].isSelected = true
    const getId = useCallback(() => {
        if (answers.length > 0) {
            return answers.at(-1).id + 1;
        }
        else return 1;
    }, [answers])
    const dispatch = useDispatch();
    //handlers
    const handleQuestionTypeChanged = (qType) => {
        answers.forEach(item => { item.isSelected = false; item.value = '' })
        setQuestionType(qType);
    }
    const handleRemoveAwnser = useCallback((id) => {
        if (answers.length > 2) {
            console.log(id);
            const index = answers.indexOf(answers.find(i => i.id === id));
            if (index >= 0) { answers.splice(index, 1); }
            forceUpdate()
        }
    }, [answers])
    const awnserContentChangedHandler = useCallback((value, id) => {
        const temp = answers;
        temp.filter(i => i.id === id)[0].value = value;
        setAnswers(temp);
    }, [answers])
    const onAddingAwnser = useCallback(() => {
        if (answers.length >= 6) return;
        const id = getId();
        const newAnswer = {
            id: id,
            render: <AwnserChoice id={id} onRemove={handleRemoveAwnser} onChange={awnserContentChangedHandler} />,
            value: '',
            isSelected: false
        };
        answers.push(newAnswer);
        forceUpdate();
    }, [answers, awnserContentChangedHandler, handleRemoveAwnser, getId])

    const formValidation = () => {
        if (+questionType < 1 || +questionType > 3) {
            setErrorMessage('Please Choose a Question Types.');
            return false;
        }
        if (!topic) {
            setErrorMessage('Please Choose a Topic.');
            return false;
        }
        if (Question_text.value.trim().length === 0) {
            setErrorMessage('Question Text Cannot be Empty.');
            return false;
        }
        if (Text_above_question.value.trim().length === 0) {
            setErrorMessage('Text Above Question Be Empty.');
            return false;
        }
        if (Text_below_question.value.trim().length === 0) {
            setErrorMessage('Text Below Question Be Empty.');
            return false;
        }
        if (tags.value.trim().length === 0) {
            setErrorMessage('You Must Enter At Least One Tag.');
            return false;
        }
        for (let answer of answers) {
            if (answer.value.trim().length === 0) {
                setErrorMessage('Answers Cannot Be Empty.');
                return false;
            }
        }
        if (getIndexes(answers).length === 0) {
            setErrorMessage('You Must Choose Right Answer/s.');
            return false;
        }

        setErrorMessage('');
        return true;
    }

    const getIndexes = (answers) => {
        return answers.map(({ isSelected }, index) => ({ isCorrect: isSelected, index })).filter(({ isCorrect }) => isCorrect).map(({ index }) => index);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            const selectedAxisId = axis.find(item => item.isSelected === true).id;
            const newQuestion = new Question(topic, questionType, Question_text.value, Text_above_question.value, Text_below_question.value, tags.value, answers.map(({ value }, index) => ({ value, id: index })), getIndexes(answers), selectedAxisId);
            console.log(newQuestion);
            dispatch(addQuestion(newQuestion))
        }
    }

    const questions = useSelector(state => state.questions.questions)
    const printToConsole = () => {
        console.log(questions);
    }


    //side-effects
    useEffect(() => {
        onAddingAwnser(); onAddingAwnser();
        setQuestionTypes([{ id: 1, value: 'Single choice' }, { id: 2, value: 'Multi Choice' }]);
        setTopic('def-topic');
    }, [onAddingAwnser]);
    //inputs
    const Question_text = useInput();
    const Text_above_question = useInput();
    const Text_below_question = useInput();
    const tags = useInput();
    //renderers
    return (
        <div className='AddQForm'>
            <h1>New Question</h1>
            <Btn onClick={printToConsole}>print to console</Btn>
            <div style={{ height: 'min-content' }}>
                <form onSubmit={handleSubmit} >
                    <div className='form-container' >
                        <label > topic : {topic}</label>
                        <Dropdown list={questionTypes} selected={questionType} onChange={handleQuestionTypeChanged} />
                        <Input placeholder="Question text:"        {...Question_text} />
                        <Input placeholder="Text above question:"  {...Text_above_question} />
                        <Line>
                            <h4>Question presentaion axis : </h4>
                            <RadioButton list={axis} />
                        </Line>
                        <Input placeholder="Text below question:"  {...Text_below_question} />
                        <Input placeholder="tags (seperate with , charecter)" {...tags} />
                        <hr />
                        {questionType && <AnswersSelector onAddingAwnser={onAddingAwnser} list={answers} questionType={questionType} />}
                        <Input type="submit" value="Submit" />
                        <p className='ErrorMessage'>{errorMessage}</p>
                    </div>
                </form>
            </div>
        </div >
    )

}





export default CreateQuestionForm;