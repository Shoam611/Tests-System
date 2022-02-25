import './Btn.css';
import { Line, Icon } from 'UIKit';
import React, { forwardRef }from "react";

const Btn = (props,ref) => {
    return (
        <div className="Btn" onClick={props.onClick} ref ={ref}>
            <Line justify="between">
                {props.children}
                {props.i ? <Icon i={props.i} color="#fff"/> : null}
            </Line>
        </div>
    )
}
export default forwardRef(Btn);