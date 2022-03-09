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
        // console.log('index > ', index, 'question >', orderOfQuestions[index]);
        console.log(answersList.map(a => ({ id, isSelected: a.isSelected })));
    }

    //handlers
    const handleSubmit = () => {
        console.log('submitted');
        console.log('User >', user);
        console.log('Questions >', questions);
        console.log('Test >', test);
    }

    const shuffle = arr => {
        return [...arr].map((_, i, arrCopy) => {
            var rand = i + (Math.floor(Math.random() * (arrCopy.length - i)));
            [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
            return arrCopy[i]
        })
    };

    const initialQuestionsComponents = () => {
        if (orderOfQuestions.length === 0)
            orderOfQuestions.push(...shuffle(questions));

        if (currentQuestionIndex < 0 || currentQuestionIndex >= orderOfQuestions.length) return null;

        const currentAnswers = (orderOfQuestions.map((q) => (q.answers))[currentQuestionIndex]).map(answer => ({
            id: answer.id,
            render: <Line>{answer.value}</Line>,
            value: answer,
            isSelected: false,
        }));

        answersList.splice(0, answersList.length, ...currentAnswers);

        return <QuestionViewer key={orderOfQuestions[currentQuestionIndex]._id} list={answersList} {...orderOfQuestions[currentQuestionIndex]} />;
    }

    return (
        <div>
            {!test && < h1 >Loading Data...</h1 >}

            {+currentQuestionIndex >= 0 ?
                (<Box justify="center">
                    {/* {questionsViews[currentQuestionIndex]} */}
                    {initialQuestionsComponents()}
                    <Line>
                        {currentQuestionIndex >= 1 && <Btn onClick={onPrev}>Previous</Btn>}
                        {orderOfQuestions.length - currentQuestionIndex === 1 ? <Btn onClick={handleSubmit}>Submit</Btn> : <Btn onClick={onNext}>Next</Btn>}
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