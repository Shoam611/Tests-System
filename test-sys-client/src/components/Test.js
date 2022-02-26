import { useNavigate } from "react-router-dom";
import { Box, Btn } from "UIKit";
import './Test.css';

const Test = (props) => {
    const navigate = useNavigate();

    const normalizeDate = (inputDate) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(inputDate).toLocaleDateString('en-EN', options);
    }

    return (
        <Box >
            <div className='tests-container-item'>
                <h4></h4>
                <h4>{props.name}</h4>
                <h4>{props.questions.length} Questions</h4>
                <h4>{normalizeDate(props.updatedAt)}</h4>
                <Btn i='' onClick={() => { navigate(`editTest/${props._id}`, { replace: false }) }}>Edit</Btn>
            </div>
        </Box>
    )
}
export default Test;