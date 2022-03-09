import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Box, Btn, Line } from "UIKit";
import QuestionViewer from "./QuestionViewer";
import './testView.css'
const TestView = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const test = useSelector(state => state.tests.tests).find(t => t._id === id);
    const questions = useSelector(state => state.questions.questions).filter(q => test?.questions.includes(q._id));
    const user = useSelector(state => state.testRecord.user);
    const [questionsViews] = useState([]);
    const [currentQuestionIndex, setCurrentQuestion] = useState(-1);
    const [orderOfQuestions, setOrderOfQuestions] = useState([]);
    const [answeredQuestions, setAnsweredQuestions] = useState([]);
    const [answersList, setAnswersList] = useState([]);

    const onPrev = () => {
        updateSelectedAnswers(currentQuestionIndex - 1);
        setCurrentQuestion(prevState => { return prevState - 1 });
    }
    const onNext = () => {
        updateSelectedAnswers(currentQuestionIndex + 1);
        setCurrentQuestion(prevState => { return prevState + 1 });
    }

    const updateSelectedAnswers = (index) => {
        console.log('index > ', index, 'question >', orderOfQuestions[index]);
    }

    //handlers
    const handleSubmit = () => {
        console.log('submitted');
        console.log('User >', user);
        console.log('Questions >', questions);
        console.log('Test >', test);
    }

    const onAnsweredHandler = useCallback((item, value, id) => {
        // console.log('item', item, 'value', value, 'question >', questionsViews[currentQuestionIndex]);
        const newAnsweredQuestion = { questionId: id, selectedAnswersIds: [item.id], wasRight: false }
        value ? answeredQuestions.push(newAnsweredQuestion) : answeredQuestions.splice(answeredQuestions.indexOf(item._id), 1);

    }, [])

    const shuffle = arr => {
        return [...arr].map((_, i, arrCopy) => {
            var rand = i + (Math.floor(Math.random() * (arrCopy.length - i)));
            [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
            return arrCopy[i]
        })
    };

    const initialQuestionsComponents = useCallback(() => {
        let shuffeledQuestions = shuffle(questions);

        if (questionsViews.length === 0)
            orderOfQuestions.push(...shuffeledQuestions);

        const tempList = shuffeledQuestions.answers?.map((answer) => ({
            id: answer._id,
            render: <Line>{answer.value}</Line>,
            value: answer,
            isSelected: false,
            onChange: onAnsweredHandler
        }));
        setAnswersList(tempList);

        const temp = shuffeledQuestions.map((q) => (
            <QuestionViewer onChange={onAnsweredHandler} key={q._id} list={answersList} {...q} />
        ));

        if (questionsViews.length === 0)
            questionsViews.push(...temp);
    }, [onAnsweredHandler, orderOfQuestions, questions, questionsViews]);

    //side effects
    useEffect(() => {
        initialQuestionsComponents();
    }, [initialQuestionsComponents]);

    return (
        <div>
            {!test && < h1 >Loading Data...</h1 >}

            {+currentQuestionIndex >= 0 ?
                (<Box justify="center">
                    {questionsViews[currentQuestionIndex]}
                    <Line>
                        {currentQuestionIndex >= 1 && <Btn onClick={onPrev}>Previous</Btn>}
                        {questionsViews.length - currentQuestionIndex === 1 ? <Btn onClick={handleSubmit}>Submit</Btn> : <Btn onClick={onNext}>Next</Btn>}
                    </Line>
                </Box>)
                :
                <div>
                    <h1>{test?.header}</h1>
                    <Btn onClick={onNext}>Start</Btn>
                </div>}

        </div>

    )
}

export default TestView;