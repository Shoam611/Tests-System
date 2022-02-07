import { useState } from "react";
import { Btn, Line, Rows } from "UIKit";



const Toggler = props => {
    const [isDisplay, setIsDisplay] = useState(false);

    const handleDisplay = () => {
        setIsDisplay(!isDisplay);
    }
    const renderToggle = () => {
        if (isDisplay) {
            return  props.children
        }
        return null;
    }

    return (
   <div style={{height:"min-content"}}>
            <Line justify="between">
                <h3>{props.title}</h3>
                <Btn onClick={handleDisplay} i={isDisplay ?"sort-up": "sort-down"}>{!isDisplay ? "Expande" : "Collapse"}</Btn>
            </Line>
            <>
                {renderToggle()}
            </>
   </div>
    )
}

export default Toggler;