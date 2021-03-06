import Test from "components/Test";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Input, Line } from "UIKit";
import './manageTestsView.css';

const ManageTestView = () => {
    const topic = useSelector(state => state.topic.topic);
    const tests = useSelector(state => state.tests.tests);
    const [viewedTests, setViewedTests] = useState([]);

    useEffect(() => { setViewedTests(tests); }, [setViewedTests, tests]);

    const filterListHandler = (e) => {
        let keyWords = e.target.value.toUpperCase();
        setViewedTests(tests.filter(test => test.name.toUpperCase().includes(keyWords)));
        if (keyWords.trim().length === 0) setViewedTests(tests);
    }
    const [orderBy, setOrderBy] = useState(1);

    const sortByName = () => {
        const temp = viewedTests.sort((t1, t2) => t1.name > t2.name ? orderBy : -orderBy).slice(0, 10);
        setViewedTests(temp);
        setOrderBy(-orderBy);
    }
    const sortByQuestions = () => {
        const temp = viewedTests.sort((t1, t2) => t1.questions.length > t2.questions.length ? orderBy : -orderBy).slice(0, 10);
        setViewedTests(temp);
        setOrderBy(-orderBy);
    }
    const sortByDateString = (key) => {
        const temp = viewedTests.sort((t1, t2) => new Date(t1[key]) > new Date(t2[key]) ? orderBy : -orderBy).slice(0, 10);
        setViewedTests(temp);
        setOrderBy(-orderBy);
    }
    const renderHeader = () => (
        <div className='tests-table-header'>
            <Box onClick={sortByName}>     <h4> Test Name</h4> </Box>
            <Box onClick={sortByQuestions}>     <h4> No. of Questions</h4> </Box>
            <Box onClick={sortByDateString.bind(this, 'updatedAt')}> <h4> Updated at</h4> </Box>
            <Box> <h4> Actions</h4> </Box>
        </div >
    )
    const renderTests = () => {
        return (viewedTests.length === 0 ? <h2>No Tests Available For The Selected Topic: {topic.name}</h2> :
            viewedTests.map((t) => <Test key={t._id} {...t} />));
    }

    return (
        <div className="mange-test-view">
            <h1>Tests for: <span>{topic.name}</span></h1>

            <Line>
                <div style={{ width: '250px', margin: 'var(--gap-m) 0', padding: 0 }}>
                    <Input type="text" onChange={filterListHandler} placeholder="Filter by Key Words..." />
                </div>
            </Line>

            <div className='test-wrapper'>
                {renderHeader()}
                <div className="tests-container">
                    {renderTests()}
                </div>
            </div>
        </div>
    );
}

export default ManageTestView;