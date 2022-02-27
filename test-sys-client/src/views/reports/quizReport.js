import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const QuizReport = (prop) =>{
    const [quizesRecords,setQuizRecords] = useState([]);
    const tests=useSelector(state=>state.tests.tests);
    useEffect(()=>{},[])
    return (
        <div>
            <h2>Report By Quiz</h2>
            <h3> pick a quiz to generate report </h3>

        </div>
    )
}
export default QuizReport;