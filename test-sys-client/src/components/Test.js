import { useNavigate } from "react-router";
import { Box, Btn } from "UIKit";
import './Test.css';

const Test = (props) => {
    const navigate = useNavigate();
    const normalizeDate = (inputDate) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(inputDate).toLocaleDateString('en-EN', options);
    }

    return (
        <Box>
            <div className='tests-container-item'>
                <h4>{props.name}</h4>
                <h4>{props.questions.length} Questions</h4>
                <h4>{normalizeDate(props.updatedAt)}</h4>
                <div className="actions">
                    <Btn i='' onClick={() => { navigate(`editTest/${props._id}`, { replace: false }) }}>Edit</Btn>
                    <Btn i='' onClick={() => { navigate(`/qweezes/run/${props._id}`, { replace: false }) }}>Run</Btn>
                </div>
            </div>
        </Box>
    )
}
export default Test;