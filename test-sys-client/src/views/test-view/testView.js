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
    const questions = useSelector(state => state.questions.questions).filter(q => test?.questions.includes(q._id));
    const user = useSelector(state => state.testRecord.user);
    const [questionsViews] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(-1);
    const [orderOfQuestions, setOrderOfQuestions] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);

    const onPrev = () => setCurrentQuestion(prevState => { return prevState - 1 });
    const onNext = () => setCurrentQuestion(prevState => { return prevState + 1 });

    //handlers
    const handleSubmit = () => {
        console.log('submitted');
        console.log(user);
        console.log(questions);
        console.log(test);
    }

    /*
    UserId,
    Date of Taking The Test,
    TestId,
    Questions:[{ questionId, selectedAnswersIds[], wasRight}],
    Score
    */

    const onAnsweredHandler = useCallback((item, value, id) => {
        // console.log('item', item, 'value', value, 'id:', id);
        // const wasRightTemp = questions.find(q => q._id == id).correctAnswerIds.every(a => a === item.id);
        // console.log('wasRight', wasRightTemp);
        // console.log('question example', questions[1]);

        const newAnsweredQuestion = { questionId: id, selectedAnswersIds: [item.id], wasRight: false }
        value ? answeredQuestions.push(newAnsweredQuestion) : answeredQuestions.splice(answeredQuestions.indexOf(item._id), 1);
        // console.log('answered object >', answeredQuestions, 'new question >', newAnsweredQuestion);
    }, [answeredQuestions, questionsViews])

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

        if (questionsViews.length === 0)
            orderOfQuestions.push(...orderOfQuestionsTemp);

        const temp = shuffeledQuestions.map((q) => (
            <QuestionViewer onChange={onAnsweredHandler} key={q._id} {...q} />
        ));
        if (questionsViews.length === 0)
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

