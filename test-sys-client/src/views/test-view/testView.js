import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Box, Btn } from "UIKit";
import QuestionViewer from "./QuestionViewer";
import './testView.css'
const TestView = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const test = useSelector(state => state.tests.tests).find(t => t._id === id);
    const questions = useSelector(state => state.questions.questions).filter(q => test.questions.includes(q._id));
    const [questionsViews] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const [orderOfQuestions, setOrderOfQuestions] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const onPrev = () => setCurrentQuestion(prevState => { return prevState - 1 });
    const onNext = () => setCurrentQuestion(prevState => { return prevState + 1 });

    //handlers
    const handleSubmit = () => {
        console.log('submitted');
    }

    const onAnsweredHandler = useCallback((item, value, id) => {
        console.log('item', item, 'value', value, 'id:', id);

        // const wasRightTemp = questions.find(q => q._id == id).correctAnswerIds.every(a => a === item.id);
        // console.log('wasRight', wasRightTemp);
        console.log('question example', questions[1]);
        value ?
            answeredQuestions.push({ id: id, selectedAnswersIds: item.id }) :
            answeredQuestions.splice(answeredQuestions.indexOf(item._id), 1);

        console.log(answeredQuestions);
    }, [answeredQuestions, currentQuestion, questionsViews])

    const shuffle = arr => {
        return [...arr].map((_, i, arrCopy) => {
            var rand = i + (Math.floor(Math.random() * (arrCopy.length - i)));
            [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
            return arrCopy[i]
        })
    };

    const initialQuestionsComponents = useCallback(() => {
        let shuffeledQuestions = shuffle(questions);
        const orderOfQuestionsTemp = shuffeledQuestions.map((q) => (q._id));
        orderOfQuestions.push(...orderOfQuestionsTemp);

        const temp = shuffeledQuestions.map((q) => (
            <QuestionViewer onChange={onAnsweredHandler} key={q._id} {...q} />
        ));
        questionsViews.push(...temp);
    }, [onAnsweredHandler, orderOfQuestions, questions, questionsViews]);

    //side effects
    useEffect(() => {
        initialQuestionsComponents();
    }, [initialQuestionsComponents]);

    //render
    const renderQuestions = () => {
        if (!test) return (< h1 >Loading Data...</h1 >)

        if (+currentQuestion >= 0) {
            return (
                <Box justify="center">
                    {questionsViews[currentQuestion]}
                    <Btn onClick={onPrev}>Previous</Btn>
                    {questionsViews.length - currentQuestion === 1 ? <Btn onClick={handleSubmit}>Submit</Btn> : <Btn onClick={onNext}>Next</Btn>}
                </Box>
            )
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

/*
UserId,
Date of Taking The Test,
TestId,
Questions:[{ questionId, selectedAnswersIds[], wasRight}],
Score
*/