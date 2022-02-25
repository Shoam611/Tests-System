import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { testTypes } from '../models/presentationAxis';
import { Box, Btn } from "UIKit";
import './Test.css';

const Test = (props) => {
    const normalizeDate = (inputDate) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(inputDate).toLocaleDateString('en-EN', options);
    }

    const setBackgroundLocation = () => { }
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const onLinkClicked = () => {
        dispatch(setBackgroundLocation(location))
        navigate(`/qmodal/${props._id}`);
    }

    return (
        <Box >
            <div className='tests-container-item'>
                <h4>{props.name}</h4>
                <h4>{props.questions.length}</h4>
                <h4>{normalizeDate(props.updatedAt)}</h4>
                <Btn i='' onClick={() => { navigate(`editTest/${props._id}`) }}>Edit</Btn>
            </div>
        </Box>
    )
}
export default Test;