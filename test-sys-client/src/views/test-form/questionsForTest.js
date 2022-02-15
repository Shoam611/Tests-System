import { useState } from "react";
const axios = require('axios')

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

     const getQuestions = async () => {
        let result = await axios.get('http://localhost:4200/questions?oneOrMany=many&skip=0&take=20');
        console.log(result.data);
    }

    return (
        <>
            <h1>Choose Questions</h1>
            <button onClick={addQuestion}>Plus 1</button>
            <button onClick={removeQuestion}>Minus 1</button>
            <Btn onClick={() => props.prev()}>Back</Btn>
            <Btn onClick={() => props.next()}>Submit</Btn>
            <Btn onClick={getQuestions}>Get Questions</Btn>
        </>
    );
}

export default QuestionsForTest;