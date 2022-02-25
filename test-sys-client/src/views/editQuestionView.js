import { useSelector } from "react-redux";
import { Btn } from "UIKit";

const { useNavigate, useParams } = require("react-router-dom");

const EditQuestionView = (props) => {
    const navigate = useNavigate();
    const { id } = useParams();
    const question = useSelector(state => state.questions.questions).find(q => q._id === id);
    // const closeBtnRef=useRef();
    const onDismiss = () => {
        navigate(-1);
    }
    console.log(question)
    return (
        <div>
            
            <h2>
                Edit Question {question._id}
            </h2>
            <Btn onClick={navigate.bind(this, -1)}>Go back</Btn>
        </div>
    )
}
export default EditQuestionView;