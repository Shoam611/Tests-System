import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const TestView = prop => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const topic = useSelector(state => state.topic.topic);
    const test = useSelector(state => state.tests.tests).find(t => t._id === id);
    const questions = useSelector(state => state.questions.questions);
    const [viewedTest, setViewedTest] = useState();

    const setInitialTest = useCallback(() => {
        setViewedTest(test);
    })

    useEffect(() => {
        setInitialTest();
    }, [setInitialTest]);

    return (<>
        
    </>);
}

export default TestView;