import React from "react";
import ReactDOM from "react-dom";
import { Checkbox } from "UIKit";
import Card from "UIKit/Layouts/Card";
import Btn from "../UIKit/Elements/Btn";
import "./ShowQuestionsModal.css";

const ShowQuestionsModalBackdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm} />;
};
const ShowQuestionsModalOverlay = (props) => {

    return (
        <Card className="modal">
            <header className="header">
                <h2>Questions</h2>
            </header>
            <div className="content">
                <Checkbox list={props.list} />
            </div>
            <footer className="actions">
                <Btn onClick={props.onConfirm}>Okay</Btn>
            </footer>
        </Card>
    );
};

const ShowQuestionsModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <ShowQuestionsModalBackdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ShowQuestionsModalOverlay
                    {...props}
                    onConfirm={props.onConfirm}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ShowQuestionsModal;