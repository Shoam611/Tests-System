import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './reportView.css';
const ReportView = () =>{
    const {id} =useParams();
    const test = useSelector(state=>state.tests.tests).find((t)=>t._id===id);
    const questions = useSelector(state=>state.questions.questions).filter(q=> test.questions.indexOf(q._id)>-1) ;
    useEffect(()=>{
        console.log(test);
        console.log(questions);
    },[test])
    return (
        <div>
            <h1>Report for quiz :{id?id:'quizId'}</h1>
        </div>
    )
}
export default ReportView