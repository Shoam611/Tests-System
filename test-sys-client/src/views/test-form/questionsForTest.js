import { useEffect, useState } from "react";
import Card from "UIKit/Layouts/Card";
import QuestionItem from "./questionItem";
const { Btn } = require("UIKit");
const axios = require('axios');

const QuestionsForTest = (props) => {
    const [questions, setQuestions] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);

    const getQuestion = () => {
        axios.get('http://localhost:4200/questions?oneOrMany=many&skip=0&take=20')
            .then((response) => {
                const myData = response.data;
                setFetchedData(myData);
            })
    }

    useEffect(() => getQuestion(), []);

    const addQuestion = (obj) => {
        setQuestions(oldArray => [...oldArray, obj]);
        console.log(questions);
    }
    const removeQuestion = (index) => {
        var tempArray = [...questions];
        var index = tempArray.indexOf(index);
        tempArray.splice(index, 1);
        setQuestions(tempArray);
        console.log(questions);
    }

    return (
        <>
            <h1>Choose Questions</h1>
            <Card>
                <ul>
                    {fetchedData.map((question) => (
                        <QuestionItem 
                            key={Math.random()}
                            id={question.id}
                            textAbove={question.textAbove}
                            tags={question.tags}
                            myself={question}
                            onAdd={addQuestion}
                            onRemove={removeQuestion}
                        />
                    ))}
                </ul>
            </Card>
            <Btn i="chevron-left" onClick={() => props.prev()}>Back</Btn>
        </>
    );
}

export default QuestionsForTest;