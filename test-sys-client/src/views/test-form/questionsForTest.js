import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QuestionItem from "./questionItem";
import { Btn, Checkbox, Input } from "UIKit";

const QuestionsForTest = (props) => {
    //states
    const [fetchedData, setFetchedData] = useState([]);
    const [list, setList] = useState([]);
    const [selectedCounter, setSelectedCounter] = useState(0);
    const questions = useSelector(state => state.questions.questions);
    useEffect(() => { setFetchedData(questions); }, [questions, setFetchedData])
    //handlers
    const { onQuestionSelected } = props
    const questionSelectedHandler = useCallback((item, value) => {
        onQuestionSelected(item, value);
        value ? setSelectedCounter(prevState => { return prevState + 1 }) : setSelectedCounter(prevState => { return prevState - 1 });
    }, [onQuestionSelected, setSelectedCounter])
    const isExists = useCallback((value) => {
        for (let question of props.questions) {
            if (question === value) {
                setSelectedCounter(prevState => { return prevState + 1 });
                return true;
            }
        }
        return false;
    },[setSelectedCounter,props.questions])
    const buildDisplayList = useCallback((list) => {
        const temp = list.map((value, index) => ({
            id: value._id,
            render: <QuestionItem {...value} index={index} />,
            value: value,
            isSelected: isExists(value._id),
            onChange: questionSelectedHandler,
        }))
        setList(temp);
    }, [isExists, questionSelectedHandler]);
    //Side Effects
    useEffect(() => {
        buildDisplayList(fetchedData);
    }, [fetchedData, buildDisplayList]);

    const filterList = (e) => {
        let tags = e.target.value.toUpperCase();
        let tagsArray = tags.split(',')
            .map(tag => tag.trim())
            .filter(tag => (!!tag) && tag);

        let newArray = fetchedData.filter(question => question.tags.find(tag => tagsArray.includes(tag.toUpperCase())));
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
                    Questions Selected:{selectedCounter}
                    <Input type="text" onChange={filterList} placeholder="Filter By Tags..." />
                </div>
                <Checkbox list={list} />
                <Btn i="chevron-left" onClick={() => props.prev()}>Back</Btn>
            </div>
        </div>
    );
}

export default QuestionsForTest;