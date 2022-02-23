import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Btn, Input, Line } from "UIKit";
import Card from "UIKit/Layouts/Card";
const ManageQuestionView = props => {
    const dispatch = useDispatch();
    const [topic, setTopic] = useState('');
    const [filteredArray, setFilteredArray] = useState(null);
    const tests = useSelector(state => state.tests.tests)
    useEffect(() => {
        setTopic('def-topic')
    }, []);

    const handleShowPrev = () => { console.log(tests); }
    const handleShownext = () => { }

    const filterListHandler = (e) => {
        let keyWords = e.target.value.toUpperCase();

        setFilteredArray(tests.filter(test => test.name.toUpperCase().includes(keyWords)));

        if (keyWords.trim().length === 0) setFilteredArray(null);
    }

    const renderTests = () => {
        let list = [];

        filteredArray === null ? list = tests : list = filteredArray;
        
        const normalizeDate = (inputDate) => {
            const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
            return new Date(inputDate).toLocaleDateString('en-EN', options);
        }

        return (
            list.map((t) => {
                return (
                    <Card key={t._id}>
                        <Line key={t._id}>
                            <h4>Test Name: <span>{t.name}</span></h4>
                            <h5>Number of Questions: <span>{t.questions.length}</span></h5>
                            <h6>Last Edited: <span>{normalizeDate(t.updatedAt)}</span></h6>
                            <Btn>Edit</Btn>
                        </Line>
                    </Card>
                )
            }))
    }

    return (
        <>
            <h1>
                Tests for {topic}
            </h1>
            <div>
                <Input type="text" onChange={filterListHandler} placeholder="Filter by key words" />
            </div>
            {renderTests()}
        </>
    );
}

export default ManageQuestionView;