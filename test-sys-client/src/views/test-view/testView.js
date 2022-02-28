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
    const [viewedTest, setViewedTest] = useState();
    const [questionsViews] = useState([]);
    const [currectQuestion, setCurrectQuestion] = useState(-1);

    const setInitialTest = useCallback(() => {
        setViewedTest(test);
    }, [setViewedTest,test])

    const onPrev = () => setCurrectQuestion(prevState => { return prevState - 1 })
    const onNext = () => setCurrectQuestion(prevState => { return prevState + 1 })

    const renderQuestions = () => {
        if (!viewedTest) { return (< h1 >Loading Data...</h1 >) }
        if (+currectQuestion >= 0) {
            return (<div >
                {questionsViews[currectQuestion]}
                <Btn onClick={onPrev}>Previous</Btn>
                {questionsViews.length <= currectQuestion ? <Btn>Submit</Btn> : <Btn onClick={onNext}>Next</Btn>}
                {console.log(questionsViews.length, currectQuestion)}
            </div>)
        }
        return (
            <div>
                <h1>{viewedTest?.header}</h1>
                <Btn onClick={onNext}>Start</Btn>
            </div>
        );
    }

    const initialQuestionsComponents = useCallback(() => {
        const temp = questions?.map((q) => (
            <QuestionViewer key={q._id} {...q} />
        ));
        questionsViews.push(...temp);
    },[questions,questionsViews])

    useEffect(() => {
        setInitialTest();
        initialQuestionsComponents();
    }, [setInitialTest,initialQuestionsComponents]);

    return renderQuestions();
}

export default TestView;