import useInput from "hooks/useInput";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Btn, Input, Line } from "UIKit";
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
    }, [setViewedTests, tests])

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
        <div className='report-tests-table-header'>
            <div />
            <Box onClick={sortByKey.bind(this, 'name')}> <h4> Test</h4> </Box>
            <Box onClick={sortByArrayLength.bind(this, 'questions')}> <h4> Num. of question</h4> </Box>
            <Box onClick={sortByDateString.bind(this, 'updatedAt')}>     <h4>Updated at</h4> </Box>
            <div />
        </div>
    )

    const filterListHandler =(e)=>{
        let keyWords = e.target.value.toUpperCase();
        setViewedTests(tests.filter(test => test.name.toUpperCase().includes(keyWords)));
        if (keyWords.trim().length === 0) setViewedTests(tests);
    }
    const renderFilters = () => (
        <Line justify="between">
            <Line>
                <label>filter:</label>
                <div style={{ width: '250px', margin: 'var(--gap-m) 0', padding: 0 }}>
                    <Input placeholder="Search by name..." onChange={filterListHandler} />
                </div>
            </Line>
            <Line> from: <Input type="date" {...minDate} /> to: <Input type="date" {...maxDate} /> </Line>
        </Line>
    )
    return (
        <div className="report-by-quiz-view">
            <h2>Report By Quiz</h2>
            {renderFilters()}
            <div className='report-tests-wrapper'>
                {renderHeader()}
                <div className='report-tests-container'>
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
    const generateReport = () => { }
    return (
        <Box>
            <div className="report-tests-container-item" onClick={generateReport}>
                <div />
                <h4>{props.name}</h4>
                <h4>{props?.questions.length} questions</h4>
                <h4>{normalizeDate(props.updatedAt)}</h4>
                <Btn>Create report</Btn>
            </div>
        </Box>
    )
}







export default QuizReport;