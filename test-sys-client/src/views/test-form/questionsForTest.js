import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import QuestionItem from "./questionItem";
import { Btn, Checkbox, Input } from "UIKit";

const QuestionsForTest = ({ onQuestionSelected, selectedQuestios, prev }) => {
    //states
    const [list, setList] = useState([]);
    const questions = useSelector(state => state.questions.questions);
    const topic = useSelector(state => state.topic.topic);

    //handlers
    const buildDisplayList = useCallback((list) => {
        const temp = list.map((value, index) => ({
            id: value._id,
            render: <QuestionItem {...value} index={index} topicName={topic.name} />,
            value: value,
            isSelected: selectedQuestios.indexOf(value._id) > -1,
            onChange: onQuestionSelected,
        }))
        setList(temp);
    }, [setList, selectedQuestios, onQuestionSelected, topic.name]);

    const filterList = (e) => {
        const { value } = e.target
        const tags = value.toLowerCase();
        const newTagsArray = tags.split(',')
            .map(tag => tag.trim())
            .filter(tag => (!!tag) && tag);
        const newArray = questions.filter(question => question.tags.find(tag => newTagsArray.includes(tag.toLowerCase())));
        value.trim().length === 0 ? buildDisplayList(questions) : buildDisplayList(newArray);
    }

    //Side Effects
    useEffect(() => {
        buildDisplayList(questions);
    }, [questions, buildDisplayList]);

    return (
        <div className='AddTForm'>
            <div className="form-container">
                <h1>Choose Questions</h1><div />
                <h4>Filter by Tags:</h4>
                <Input onChange={filterList} placeholder="Filter By Tags..." />
                <h4>Questions Selected:{selectedQuestios.length} </h4>
                {questions.length === 0 ? <h4>No Quesitons Found For Topic: {topic.name} </h4> : <Checkbox list={list} />}
                <Btn i="chevron-left" onClick={() => prev()}>Previous</Btn>
            </div>
        </div>
    );
}

export default QuestionsForTest;