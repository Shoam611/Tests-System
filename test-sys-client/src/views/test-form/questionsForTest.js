import { useEffect, useState } from "react";
import question from "Store/reducers/question";
import QuestionItem from "./questionItem";
const { Btn, Checkbox, Line, Input } = require("UIKit");
const axios = require('axios');

const QuestionsForTest = (props) => {
    //states
    const [fetchedData, setFetchedData] = useState([]);
    const [list, setList] = useState([]);
    const [selectedCounter, setSelectedCounter] = useState(0);
    const [isAllChecked, setIsAllChecked] = useState(false);

    //Side Effects
    useEffect(() => {
        buildDisplayList(fetchedData);
    }, [fetchedData, setList]);

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
        value ? setSelectedCounter(prevState => { return prevState + 1 }) : setSelectedCounter(prevState => { return prevState - 1 });
    }

    const buildDisplayList = (list, checked) => {
        console.log(list);
        const temp = list.map((value, index) => ({
            id: value._id,
            render: <Line justify="start"><QuestionItem {...value} index={index} /></Line>,
            value: value,
            checked: checked,
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

    const checkAll = (e) => {
        setIsAllChecked(e.target.checked);

        buildDisplayList(fetchedData, e.target.checked);
    }

    return (
        <div className='AddTForm'>
            <h1>Choose Questions</h1>
            <div className="form-container">
                <div className="inline-button-text">
                    Questions Selected:{selectedCounter}
                    <label> {isAllChecked ? 'Deselect All' : 'Select All'}
                        <input onChange={checkAll} type="checkbox" />
                    </label>
                    <Input type="text" onChange={filterList} placeholder="Filter By Tags..." />
                </div>
                <Checkbox list={list} />
                <Btn i="chevron-left" onClick={() => props.prev()}>Back</Btn>
            </div>

        </div>
    );
}

export default QuestionsForTest;