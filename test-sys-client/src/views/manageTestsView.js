import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Btn, Line } from "UIKit";

const ManageQuestionView = props => {
    const dispatch = useDispatch();
    const [topic, setTopic] = useState();
    const tests = useSelector(state => state.tests.tests)
    useEffect(() => {
        setTopic('def-topic')
    }, []);

    const handleShowPrev = () => { console.log(tests); }
    const handleShownext = () => { }

    const renderTests = () => {
        console.log(tests);
        return (
            tests.map((t) => {
                return (
                    <Box key={t._id}>
                        <Line>
                            <h4>Test Name: <span>{t.name}</span></h4> <Btn />
                        </Line>
                    </Box>
                )
            }))
    }

    return (
        <>
            <h1>
                Inside of ManageQuestionView
            </h1>
            {renderTests()}
        </>
    );
}

export default ManageQuestionView;