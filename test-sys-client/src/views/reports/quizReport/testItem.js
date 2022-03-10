import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Box, Btn } from "UIKit";

const TestItem = (props) => {
    const dispatch = useDispatch();
    const navigate =useNavigate();
    //handelers
    const normalizeDate = (inputDate) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(inputDate).toLocaleDateString('en-EN', options);
    }
    const generateReport = () => {
      navigate(props._id);
    }
    //render
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
export default TestItem;