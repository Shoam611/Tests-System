import { useState } from "react";

const { Btn } = require("UIKit")

const QuestionsForTest = (props) => {

    const [test, setTest] = useState(0);

    const testing = () => {
        setTest(test + 1);
        console.log(test);
    }
    const testing1 = () => {
        setTest(test - 1);
        console.log(test);
    }

    return (
        <>
            <div>
                <button onClick={testing}>Plus 1</button>
                <button onClick={testing1}>Minus 1</button>
            </div>
            <Btn i="sort" onClick={() => props.prev()}>Back</Btn>
            <Btn i="sort" onClick={() => props.next({test}, true)}>Submit</Btn>
        </>
    );
}

export default QuestionsForTest;