import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QuestionItem from "./questionItem";
import { Btn, Checkbox, Input } from "UIKit";

const QuestionsForTest = (props) => {
    //states
    const [list, setList] = useState([]);
    const questions = useSelector(state => state.questions.questions);
    const topic = useSelector(state => state.topic.topic);

    //handlers
    // const { onQuestionSelected } = props;

    const questionSelectedHandler = useCallback((item, value) => {
        props.onQuestionSelected(item, value);
    }, [props]);

    const buildDisplayList = useCallback((list) => {
        const temp = list.map((value, index) => ({
            id: value._id,
            render: <QuestionItem {...value} index={index} />,
            value: value,
            isSelected: props.selectedQuestios.indexOf(value._id) > -1,
            onChange: questionSelectedHandler,
        }))
        setList(temp);
    }, [questionSelectedHandler, props.selectedQuestios]);

    const filterList = (e) => {
        let tags = e.target.value.toUpperCase();
        let newTagsArray = tags.split(',')
            .map(tag => tag.trim())
            .filter(tag => (!!tag) && tag);

        let newArray = questions.filter(question => question.tags.find(tag => newTagsArray.includes(tag.toUpperCase())));
        buildDisplayList(newArray);
        if (e.target.value.trim().length === 0) {
            buildDisplayList(questions);
        }
    }

    //Side Effects
    useEffect(() => {
        buildDisplayList(questions);
    }, [questions, buildDisplayList]);

    return (
        <div className='AddTForm'>
            <div className="form-container">
                <h1>Choose Questions</h1><div />
                <h4>filter by tags:</h4>
                <Input type="text" onChange={filterList} placeholder="Filter By Tags..." />
                <h4>Questions Selected:{props.selectedQuestios.length}</h4>
                {questions.length === 0 ? <h4>No Quesitons Found For Topic: {topic.name}</h4> : <Checkbox list={list} />}
                <Btn i="chevron-left" onClick={() => props.prev()}>Back</Btn>
            </div>
        </div>
    );
}

export default QuestionsForTest;