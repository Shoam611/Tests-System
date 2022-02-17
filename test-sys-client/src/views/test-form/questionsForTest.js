import { useEffect, useState } from "react";
import QuestionItem from "./questionItem";
const { Btn, Checkbox, Line } = require("UIKit");
const axios = require('axios');

const QuestionsForTest = (props) => {
    const [questions, setQuestions] = useState([]);
    const [fetchedData, setFetchedData] = useState([]);
    const [list, setList] = useState([]);

    const getQuestion = () => {
        axios.get('http://localhost:4200/questions?oneOrMany=many&skip=0&take=20')
            .then((response) => {
                const myData = response.data;
                setFetchedData(myData);
            })
    }

    useEffect(() => {
        const temp = fetchedData.map((value, index) => ({
            id: value._id,
            render: <Line justify="start"><QuestionItem {...value} index={index} /></Line>,
            value: value,
            checked: false,
            onChange: onSelectionChange,
            onRemove: () => { }
        }))
        setList(temp);
    }, [fetchedData, setList,addQuestion,removeQuestion]);

    useEffect(() => getQuestion(),[]);

    const onSelectionChange = (item, value) => value ? questions.push(item) : questions.pop(item);

    const removeQuestion = (obj) => {
        console.log(obj.id);
        var tempArray = [...questions];
        var index = tempArray.indexOf(obj.id);
        tempArray.splice(index.id, 1);
        setQuestions(tempArray);
        console.log(questions);
    }

    return (
        <>
            <h1>Choose Questions</h1>
            <Checkbox list={list} />
            <Btn i="chevron-left" onClick={() => props.prev()}>Back</Btn>
        </>
    );
}

export default QuestionsForTest;