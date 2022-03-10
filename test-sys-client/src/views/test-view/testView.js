import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { submitRecord, updateQuestion } from "Store/actions/test_event";
import { Article, Btn, Line } from "UIKit";
import Card from "UIKit/Layouts/Card";
import QuestionViewer from "./QuestionViewer";
import './testView.css';
const TestView = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const test = useSelector(state => state.tests.tests).find(t => t._id === id);
    const questions = useSelector(state => state.questions.questions).filter(q => test?.questions.includes(q._id));
    const user = useSelector(state => state.testRecord.user);
    const pickedAnswers = useSelector(state => state.testRecord.questionRecords);
    const [currentQuestionIndex, setCurrentQuestion] = useState(-1);
    const [orderOfQuestions] = useState([]);
    const [answersList] = useState([]);

    const onPrev = () => {
        updateSelectedAnswers();
        setCurrentQuestion(prevState => { return prevState - 1 });
    }
    const onNext = () => {
        updateSelectedAnswers();
        setCurrentQuestion(prevState => { return prevState + 1 });
    }
    const updateSelectedAnswers = () => {
        const selectedAnswersIndexes = answersList.filter(a => a.isSelected).map(a => ({ id: a.id }));

        if (currentQuestionIndex < 0 || currentQuestionIndex >= orderOfQuestions.length) return;
        dispatch(updateQuestion(orderOfQuestions[currentQuestionIndex]._id, selectedAnswersIndexes));
    }

    //handlers
    const handleSubmit = () => {
        updateSelectedAnswers();
        dispatch(submitRecord(user._id, test._id, questions, pickedAnswers));
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

        const indexesOfPickedAnswers = pickedAnswers[currentQuestionIndex];
        const currentAnswers = (orderOfQuestions.map((q) => (q.answers))[currentQuestionIndex]).map(answer => ({
            id: answer.id,
            render: <Line>{answer.value}</Line>,
            value: answer,
            isSelected: indexesOfPickedAnswers ? indexesOfPickedAnswers.selectedAnswersIds.find(a => a.id === answer.id) : false,
        }));

        answersList.splice(0, answersList.length, ...currentAnswers);

        return <QuestionViewer key={orderOfQuestions[currentQuestionIndex]._id} list={answersList} {...orderOfQuestions[currentQuestionIndex]} />;
    }

    return (
        <div>
            {!test && < h1 >Loading Data...</h1 >}

            {+currentQuestionIndex >= 0 ?
                (<div>
                    <Card >
                        {initialQuestionsComponents()}
                    </Card>
                    <Line>
                        {currentQuestionIndex >= 1 && <Btn onClick={onPrev}>Previous</Btn>}
                        {orderOfQuestions.length - currentQuestionIndex === 1 ? <Btn onClick={handleSubmit}>Submit</Btn> : <Btn onClick={onNext}>Next</Btn>}
                    </Line>

                </div>
                )
                :
                <div>
                    <Article><h1>{test?.header}</h1></Article>
                    <Btn onClick={onNext}>Start</Btn>
                </div>}

        </div>

    )
}

export default TestView;