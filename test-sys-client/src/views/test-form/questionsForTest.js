import { useEffect, useState } from "react";
import QuestionItem from "./questionItem";
const { Btn, Checkbox, Line, Input } = require("UIKit");
const axios = require('axios');

const QuestionsForTest = (props) => {
    //states
    const [fetchedData, setFetchedData] = useState([]);
    const [list, setList] = useState([]);
    const [counter, setCounter] = useState(0);

    //Side Effects
    useEffect(() => {
        buildDisplayList(fetchedData);
    }, [fetchedData]);

    useEffect(() => getQuestion(), []);

    //methods
    const getQuestion = () => {
        axios.get('http://localhost:4200/questions?oneOrMany=many&skip=0&take=20')
            .then((response) => {
                const myData = response.data;
                setFetchedData(myData);
            })
    }

    const questionSelectedHandler = (item, value) => {
        props.onQuestionSelected(item, value);
    };

    const buildDisplayList = (list) => {
        const temp = list.map((value, index) => ({
            id: value._id,
            render: <Line justify="start"><QuestionItem {...value} index={index} /></Line>,
            value: value,
            checked: false,
            onChange: questionSelectedHandler,
        }))
        setList(temp);
    }

    const filterList = (e) => {
        let tags = e.target.value.toUpperCase();
        let tagsArray = tags.split(',')
            .map(tag => tag.trim())
            .filter(tag => (!!tag) && tag);

        let newArray = fetchedData.filter(question => question.tags.find(tag => tagsArray.includes(tag.toUpperCase())));

        console.log(newArray);
        buildDisplayList(newArray);
        if (e.target.value.trim().length === 0) {
            buildDisplayList(fetchedData);
        }
    }

    return (
        <div className='AddTForm'>
            <h1>Choose Questions</h1>
            <div className="form-container">
                <div className="inline-button-text">
                    Questions Selected:{props.counter}
                    <Input type="text" onChange={filterList} placeholder="Filter By Tags..." />
                </div>
                <Checkbox list={list} />
                <Btn i="chevron-left" onClick={() => props.prev()}>Back</Btn>
            </div>

        </div>
    );
}

export default QuestionsForTest;