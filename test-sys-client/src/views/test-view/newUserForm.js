import useInput from "hooks/useInput";
import User from "models/UserModel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Btn, Input } from "UIKit";
import { setUser } from "Store/actions/test_record";

const NewUserForm = props => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const userFirstName = useInput();
    const userLastName = useInput();
    const userEmail = useInput();
    const userPhoneNumber = useInput();
    const [errorMessage, setErrorMessage] = useState('');

    //RegEx validation
    const ValidateEmail = (mail) => {
        if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
            return true;
        }
        return false;
    }
    const ValidatePhoneNumber = (phoneNumber) => {
        if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phoneNumber)) {
            return true;
        }
        return false;
    }
    const formValidation = () => {
        if (userFirstName.value.trim().length === 0) {
            setErrorMessage('First name Cannot Be Empty!');
            return false;
        }
        if (userLastName.value.trim().length === 0) {
            setErrorMessage('Last name Cannot Be Empty!');
            return false;
        }
        if (userEmail.value.trim().length === 0) {
            setErrorMessage('Email Cannot Be Empty!');
            return false;
        }
        if (!ValidateEmail(userEmail.value)) {
            setErrorMessage('Invalid Email Address!');
            return false;
        }
        if (userPhoneNumber.value.trim().length === 0) {
            setErrorMessage('Phone Number Cannot Be Empty!');
            return false;
        }
        if (!ValidatePhoneNumber(userPhoneNumber.value)) {
            setErrorMessage('Invalid Phone Number.');
            return false;
        }
        setErrorMessage('');
        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValidation()) {
            const newUser = new User(userFirstName.value, userLastName.value, userEmail.value, userPhoneNumber.value, [id], ['User']);
            dispatch(setUser(newUser));

            navigate(`/qweezes/run/viewTest/${id}`, { replace: false });
        }
    }

    return (
        <>
            <h2>Personal Information For Test {id}</h2>
            <h4>First Name</h4>
            <Input placeholder="First name" {...userFirstName} />
            <h4>Last Name</h4>
            <Input placeholder="Last Name" {...userLastName} />
            <h4>Email</h4>
            <Input placeholder="Email" {...userEmail} />
            <h4>Phone Number</h4>
            <Input placeholder="Phone Number" {...userPhoneNumber} />
            <p>{errorMessage}</p>
            <Btn onClick={handleSubmit}>Submit</Btn>
        </>);
}

export default NewUserForm;