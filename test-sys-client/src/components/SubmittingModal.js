import React from "react";
import ReactDOM from "react-dom";
import { Article, Btn, Line } from "UIKit";
import Card from "UIKit/Layouts/Card";
import "./ShowQuestionsModal.css";

const SubmittingModalBackdrop = (props) => {
    return <div className="backdrop" onClick={props.onConfirm} />;
};
const SubmittingModalOverlay = (props) => {
    return (
        <Card className="modal">
            <header className="header">
                <h2>Submit Test?</h2>
            </header>
            <div className="content">
                <Article>
                    <h2>Are You Sure You Would Like To Submit The Test?</h2>
                    <h3>Pressing Sumbit Will End The Test And Will Submit The Test Even If You Didn't Answer All Questions.</h3>
                    <h4>Press Cancel To Continue With The Test.</h4>
                </Article>
            </div>
            <footer className="actions">
                <Line justify="space-between">
                    <Btn onClick={props.onConfirm}>Cancel</Btn>
                    <Btn onClick={props.onSubmit}>Submit</Btn>
                </Line>
            </footer>
        </Card>
    );
}

const SubmittingModal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <SubmittingModalBackdrop onConfirm={props.onConfirm} />,
                document.getElementById("backdrop-root-submit")
            )}
            {ReactDOM.createPortal(
                <SubmittingModalOverlay
                    {...props}
                    onConfirm={props.onConfirm}
                    onSubmit={props.onSubmit}
                />,
                document.getElementById("overlay-root-submit")
            )}
        </>
    );
};

export default SubmittingModal;