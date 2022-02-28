import useInput from "hooks/useInput";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Input, Line } from "UIKit";
import './quizReport.css'
const QuizReport = () => {
    const topic = useSelector(state => state.topic.topic)
    const tests = useSelector(state => state.tests.tests);
    const [viewedTests, setViewedTests] = useState([]);
    const [orderBy, setOrderBy] = useState(1);
    const minDate = useInput();
    const maxDate = useInput();
    useEffect(() => {
        setViewedTests(tests)
    }, [setViewedTests,tests])

    //sorts
    const sortByKey = (key) => {
        const temp = tests.sort((q1, q2) => q1[key] > q2[key] ? orderBy : -orderBy);
        setViewedTests(temp);
        setOrderBy(-orderBy)
    }
    const sortByDateString = (key) => {
        const temp = tests.sort((q1, q2) => new Date(q1[key]) > new Date(q2[key]) ? orderBy : -orderBy)
        setViewedTests(temp);
        setOrderBy(-orderBy);
    }
    const sortByArrayLength = (key) => {
        const temp = tests.sort((q1, q2) => q1[key].length > q2[key].length ? orderBy : -orderBy);
        setOrderBy(-orderBy);
        setViewedTests(temp)
    }
    //renderers
    const renderTests = () => {
        return (viewedTests.length === 0 ? <h2>No Tests Available For The Selected Topic: {topic.name}.</h2> :
            viewedTests.map((t) => <TestItem key={t._id} {...t} />))
    }
    const renderHeader = () => (
        <div className='questions-table-header'>
            <div />
            <Box onClick={sortByKey.bind(this, 'name')}> <h4> Test</h4> </Box>
            <Box onClick={sortByArrayLength.bind(this, 'questions')}> <h4> Num. of question</h4> </Box>
            <Box onClick={sortByDateString.bind(this, 'updatedAt')}>     <h4>Updated at</h4> </Box>
            <div />
        </div>
    )
    return (
        <div className="report-by-quiz-view">
            <h2>Report By Quiz</h2>
            <Line justify="between">
                <Line>
                    <label>tags:</label>
                    <div style={{ width: '250px', margin: 'var(--gap-m) 0', padding: 0 }}>
                        <Input placeholder="Search by tags..." onChange={() => { }} />
                    </div>
                </Line>
                <Line>
                    from:
                    <Input type="date" {...minDate}/>
                    to:
                    <Input type="date" {...maxDate}/>
                </Line>
            </Line>
            <div className='tests-wrapper'>
                {renderHeader()}
                <div className='tests-container '>
                    {renderTests()}
                </div>
            </div>
        </div>
    )
}
const TestItem = (props) => {
    const normalizeDate = (inputDate) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(inputDate).toLocaleDateString('en-EN', options);
    }
    const generateReport = () => {
        console.log(props._id);

    }
    return (
        <Box>
            <div className="tests-container-item" onClick={generateReport}>
                <div />
                <h4>{props.name}</h4>
                <h4>{props?.questions.length} s</h4>
                <h4>{normalizeDate(props.updatedAt)}</h4>
            </div>
        </Box>
    )
}







export default QuizReport;