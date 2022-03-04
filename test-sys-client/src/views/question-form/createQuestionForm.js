import useInput from 'hooks/useInput';
import { Dropdown, Input, Line, RadioButton, } from 'UIKit';
import { useEffect, useState, useReducer, useCallback } from 'react';
import Question from 'models/QuestionModel';
import AnswersSelector from './answerSelector';
import AnswerChoice from './answerChoice';
import './createQuestionForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from 'Store/actions/question';
import { presentationAxis } from 'models/presentationAxis';
const CreateQuestionForm = () => {
    //hooks
    const dispatch = useDispatch();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    const topic = useSelector(state => state.topic.topic)
    //states
    const [questionTypes, setQuestionTypes] = useState(null); //list of q types available
    const [questionType, setQuestionType] = useState(null);   //selected q type
    const [answers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    //inputs
    const Question_text = useInput();
    const Text_above_question = useInput();
    const Text_below_question = useInput();
    const tags = useInput();
    //helpers
    const clear = () => {
        setQuestionType(null)
        Question_text.setValue('');
        Text_above_question.setValue('')
        tags.setValue('')
        Text_below_question.setValue('');
        setErrorMessage('')
    }
    const axis = presentationAxis.map(item => ({ ...item, isSelected: false, render: item.value }));
    axis[0].isSelected = true
    const getId = useCallback(() => answers.length > 0 ? answers.at(-1).id + 1 : 1, [answers])
    //handlers
    const handleQuestionTypeChanged = (qType) => {
        answers.forEach(item => { item.isSelected = false; item.value = '' })
        setQuestionType(qType);
    }
    const handleRemoveAwnser = useCallback((id) => {
        if (answers.length > 2) {
            const index = answers.indexOf(answers.find(i => i.id === id));
            if (index >= 0) { answers.splice(index, 1); }
            forceUpdate()
        }
    }, [answers])
    const awnserContentChangedHandler = useCallback((value, id) => {
        answers.find(i => i.id === id).value = value;
    }, [answers]);

    const onAddingAwnser = useCallback(() => {
        if (answers.length >= 6) return;
        const id = getId();
        const newAnswer = {
            id: id,
            render: <AnswerChoice id={id}
                onRemove={handleRemoveAwnser}
                onChange={awnserContentChangedHandler} />,
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
            const newQuestion = new Question(topic, questionType, Question_text.value, Text_above_question.value, Text_below_question.value, tags.value, answers.map(({ value }, index) => ({ value, id: index })), getIndexes(answers), selectedAxisId,);
            dispatch(addQuestion(newQuestion))
            clear()
        }
    }


    //side-effects
    useEffect(() => {
        console.log(topic);
        onAddingAwnser(); onAddingAwnser();
        setQuestionTypes([{ id: 1, value: 'Single choice' }, { id: 2, value: 'Multi Choice' }]);
    }, [onAddingAwnser]);

    //renderers
    return (
        <div className='AddQForm'>
            <form onSubmit={handleSubmit} >
                <div className='form-container' >
                    <h1>New Question</h1>
                    <Line justify ="around">
                        <h2>topic : {topic.name}</h2>
                    </Line>
                    <label >Question type:</label>
                    <Dropdown list={questionTypes} selected={questionType} onChange={handleQuestionTypeChanged} />
                    <label >Question type:</label>
                    <Input placeholder="Question text:"        {...Question_text} />
                    <label >Question type:</label>
                    <Input placeholder="Text above question:"  {...Text_above_question} />
                    <label >Question presentaion axis : </label>
                    <RadioButton list={axis} />
                    <label >Question presentaion axis : </label>
                    <Input placeholder="Text below question:"  {...Text_below_question} />
                    <label >Question presentaion axis : </label>
                    <Input placeholder="tags (seperate with , charecter)" {...tags} />
                    <hr />
                    {questionType && <>
                        <label >Ansers : </label>
                        <AnswersSelector questionType={questionType} list={answers} onAddingAwnser={onAddingAwnser} />
                        <hr />
                    </>
                    }
                    <Input type="submit" value="Submit" />
                </div>
                    <p className='ErrorMessage'>{errorMessage}</p>
            </form>
        </div >
    )

}





export default CreateQuestionForm;