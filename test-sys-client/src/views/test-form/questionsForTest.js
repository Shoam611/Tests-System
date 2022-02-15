import { useState } from "react";

const { Btn } = require("UIKit")

const QuestionsForTest = (props) => {

    const [questions, setQuestions] = useState([]);

    const addQuestion = () => {
        setQuestions(oldArray => [...oldArray, 1]);
        console.log(questions);
    }
    const removeQuestion = (index = 1) => {
        var tempArray = [...questions];
        var index = tempArray.indexOf(index);
        tempArray.splice(index, 1);
        setQuestions(tempArray);
        console.log(questions);
    }

    return (
        <>
            <h1>Choose Questions</h1>
            <div>
                <button onClick={addQuestion}>Plus 1</button>
                <button onClick={removeQuestion}>Minus 1</button>
            </div>
            <Btn onClick={() => props.prev()}>Back</Btn>
            <Btn onClick={() => props.next()}>Submit</Btn>
        </>
    );
}

export default QuestionsForTest;