import Test from "components/Test";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Box, Input, Line } from "UIKit";
import './quizReport.css'
const QuizReport = (prop) => {
    const [quizesRecords, setQuizRecords] = useState([]);
    const topic = useSelector(state=>state.topic.topic)
    const tests = useSelector(state => state.tests.tests);
    const [viewedTests,setViewedTests] = useState([]);
    const [orderBy,setOrderBy]= useState(1);
    useEffect(() => {
        console.log(tests);
        setViewedTests(tests)
    }, [])


    const sortByKey = (key) => {
        const temp = tests.sort((q1, q2) => q1[key] > q2[key] ? orderBy : -orderBy);//.slice(0,5);
        setViewedTests(temp);
        setOrderBy(-orderBy)
        console.log('key:', key, 'first value:', temp[0][key]);
    }
    const sortByDateString = (key) => {
        const temp = tests.sort((q1, q2) => new Date(q1[key]) > new Date(q2[key]) ? orderBy : -orderBy)//.slice(0,5);
        setViewedTests(temp);
        setOrderBy(-orderBy);
        console.log('key:', key, 'first value:', temp[0][key]);
    }
    const sortByArrayLength = (key) => {
        const temp = tests.sort((q1, q2) => q1[key].length > q2[key].length ? orderBy : -orderBy)//.slice(0,5);
        setViewedTests(temp);
        setOrderBy(-orderBy);
        console.log('key:', key, 'first value:', temp[0][key]);
    }
    const renderQuestions = () => {
        return (viewedTests.length === 0 ? <h2>No Questions Available For The Selected Topic: {topic.name}.</h2> :
            viewedTests.map((q) => <Test key={q._id} {...q} />))
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
            <Line>
                <label>tags:</label>
                <div style={{ width: '250px', margin: 'var(--gap-m) 0', padding: 0 }}>
                    <Input placeholder="Search by tags..." onChange={() => { }} />
                </div>
            </Line>
            <div className='tests-wrapper'>
            {renderHeader()}
                <div className='questions-container '>
                    {renderQuestions()}
                </div>
            </div>
        </div>
    )
}
export default QuizReport;