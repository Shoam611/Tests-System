import SubmittingModal from "components/SubmittingModal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { submitRecord, updateQuestion } from "Store/actions/test_event";
import { Article, Box, Btn, GradientBorder, Line } from "UIKit";
import Card from "UIKit/Layouts/Card";
import QuestionViewer from "./QuestionViewer";
import './testView.css';
const TestView = props => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const test = useSelector(state => state.tests.tests).find(t => t._id === id);
    const questions = useSelector(state => state.questions.questions).filter(q => test?.questions.includes(q._id));
    const user = useSelector(state => state.testRecord.user);
    const pickedAnswers = useSelector(state => state.testRecord.questionRecords);
    const [currentQuestionIndex, setCurrentQuestion] = useState(-1);
    const [orderOfQuestions] = useState([]);
    const [answersList] = useState([]);
    const [score, setScore] = useState(0);
    const [answeredRight, setAnsweredRight] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onPrev = () => {
        updateSelectedAnswers();
        setCurrentQuestion(prevState => { return prevState - 1 });
    }
    const onNext = () => {
        updateSelectedAnswers();
        setCurrentQuestion(prevState => { return prevState + 1 });
    }
    const updateSelectedAnswers = () => {
        if (currentQuestionIndex < 0 || currentQuestionIndex >= orderOfQuestions.length) return;
        const selectedAnswersIndexes = answersList.filter(a => a.isSelected).map(a => ({ id: a.id }));
        dispatch(updateQuestion(orderOfQuestions[currentQuestionIndex]._id, selectedAnswersIndexes));
    }

    //handlers
    const handleSubmit = () => {
        updateSelectedAnswers();
        const tempTcore = calcScore(questions, pickedAnswers);
        setScore(tempTcore);
        dispatch(submitRecord(user._id, test._id, tempTcore));
        setIsSubmitted(true);
    }

    const calcScore = (questions, pickedAnswers) => {
        let score = 100;
        let answers = [];
        let subtract = 100 / questions.length;
        for (let i = 0; i < questions.length; i++) {
            for (let j = 0; j < pickedAnswers.length; j++) {
                if (questions[i]._id === pickedAnswers[j].questionId) {
                    if (questions[i].correctAnswerIds) {
                        const result = questions[i].correctAnswerIds.map(a => pickedAnswers[j].selectedAnswersIds.some(ab => a === ab.id));
                        if (result.every(r => r === true)) {
                            pickedAnswers[j].wasRight = true;
                            answers.push(true);
                        }
                        else {
                            pickedAnswers[j].wasRight = false;
                            answers.push(false);
                        }
                    }
                }
            }
        }
        let answeredRightTemp = 0;
        answers.forEach(element => (
            element === true ? answeredRightTemp++ : score -= subtract
        ))
        setAnsweredRight(answeredRightTemp);
        return Math.floor(score);
    }

    const shuffle = arr => {
        return [...arr].map((_, i, arrCopy) => {
            var rand = i + (Math.floor(Math.random() * (arrCopy.length - i)));
            [arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
            return arrCopy[i]
        })
    };

    const onFullShowHandler = () => {
        setShowModal(!showModal);
    }

    //renders
    const questionNavigation = (index) => {
        updateSelectedAnswers();

        setCurrentQuestion(index);
    }

    const renderQuestionNavigation = () => orderOfQuestions.map((q, index) => (
        <Box key={q._id} onClick={() => { questionNavigation(index) }}> {index + 1} </Box>
    ));

    const initialQuestionsComponents = () => {
        if (orderOfQuestions.length === 0)
            orderOfQuestions.push(...shuffle(questions));

        if (currentQuestionIndex < 0 || currentQuestionIndex >= orderOfQuestions.length) return null;

        const indexesOfPickedAnswers = pickedAnswers[currentQuestionIndex];
        const currentAnswers = orderOfQuestions[currentQuestionIndex].answers.map(answer => ({
            id: answer.id,
            render: <Line>{answer.value}</Line>,
            value: answer,
            isSelected: indexesOfPickedAnswers ? indexesOfPickedAnswers.selectedAnswersIds.findIndex(a => a.id === answer.id) > -1 : false,
        }));

        answersList.splice(0, answersList.length, ...currentAnswers);

        return <QuestionViewer key={orderOfQuestions[currentQuestionIndex]._id} list={answersList} {...orderOfQuestions[currentQuestionIndex]} />;
    }

    const renderQweez = () => {
        return (
            <div>
                {!test && < h1 >Loading Data...</h1 >}

                {+currentQuestionIndex >= 0 ?
                    (<>
                        <Card >
                            {initialQuestionsComponents()}
                        </Card>

                        <Line justify="space-between">
                            {currentQuestionIndex >= 1 && <Btn onClick={onPrev}>Previous</Btn>}
                            {orderOfQuestions.length - currentQuestionIndex === 1 ? <Btn onClick={onFullShowHandler}>Submit</Btn> : <Btn onClick={onNext}>Next</Btn>}
                            {showModal ? <SubmittingModal onConfirm={onFullShowHandler} onSubmit={handleSubmit} /> : ''}
                        </Line>

                        <GradientBorder to="left" top>
                            <Line >
                                {renderQuestionNavigation()}
                            </Line>
                        </GradientBorder>
                    </>) :
                    <>
                        <Article><h1>{test?.header}</h1></Article>
                        <Btn onClick={onNext}>Start</Btn>
                    </>}
            </div>
        );
    }

    const renderPostQweez = () => {
        return (
            <div>
                <h1>{score >= test.passingGrade ? test.msgOnSucc : test.msgOnFail}</h1>
                <h3>You Scored {score}.</h3>
                <h4>Answered {answeredRight} Out of {questions.length} Questions Right!</h4>
            </div>
        );
    }

    return (
        <>
            {!isSubmitted ? renderQweez() : renderPostQweez()}
        </>
    )
}

export default TestView;