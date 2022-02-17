import { useEffect, useState } from "react";
import QuestionItem from "./questionItem";
const { Btn, Checkbox, Line } = require("UIKit");
const axios = require('axios');

const QuestionsForTest = (props) => {
    //states
    const [fetchedData, setFetchedData] = useState([]);
    const [list, setList] = useState([]);

    //fetching method
    const getQuestion = () => {
        axios.get('http://localhost:4200/questions?oneOrMany=many&skip=0&take=20')
            .then((response) => {
                const myData = response.data;
                setFetchedData(myData);
            })
    }

    //Side Effects
    useEffect(() => {
        const temp = fetchedData.map((value, index) => ({
            id: value._id,
            render: <Line justify="start"><QuestionItem {...value} index={index} /></Line>,
            value: value,
            checked: false,
            onChange: props.onQuestionSelected,
            onRemove: () => { }
        }))
        setList(temp);
    }, [fetchedData, setList]);

    useEffect(() => getQuestion(), []);

    return (
        <>
            <h1>Choose Questions</h1>
            <Checkbox list={list} />
            <Btn i="chevron-left" onClick={() => props.prev()}>Back</Btn>
        </>
    );
}

export default QuestionsForTest;