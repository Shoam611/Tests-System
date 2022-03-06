import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Btn } from "UIKit";
import QuestionViewer from "./QuestionViewer";
import './testView.css'
const TestView = () => {
    const { id } = useParams();
    const test = useSelector(state => state.tests.tests).find(t => t._id === id);
    const questions = useSelector(state => state.questions.questions).filter(q => test.questions.includes(q._id));
    const [questionsViews] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(-1);

    const onPrev = () => setCurrentQuestion(prevState => { return prevState - 1 })
    const onNext = () => setCurrentQuestion(prevState => { return prevState + 1 })

    //side effects
    useEffect(() => {
        initialQuestionsComponents();
    }, []);
    
    //methods
    const handleSubmit = () => {
        console.log('submitted');
    }
    
    const initialQuestionsComponents = () => {
        const temp = questions?.map((q) => (
            <QuestionViewer key={q._id} {...q} />
        ));
        questionsViews.push(...temp);
    }
    //render
    const renderQuestions = () => {
        if (!test) return (< h1 >Loading Data...</h1 >)

        if (+currentQuestion >= 0) {
            return (<div >
                {questionsViews[currentQuestion]}
                <Btn onClick={onPrev}>Previous</Btn>
                {questionsViews.length - currentQuestion === 1 ? <Btn onClick={handleSubmit}>Submit</Btn> : <Btn onClick={onNext}>Next</Btn>}
            </div>)
        }
        return (
            <div>
                <h1>{test?.header}</h1>
                <Btn onClick={onNext}>Start</Btn>
            </div>
        );
    }

    return renderQuestions();
}

export default TestView;