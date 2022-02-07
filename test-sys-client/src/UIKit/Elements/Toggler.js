import { useState } from "react";
import { Btn, Line, Rows } from "UIKit";



const Toggler = props => {
    const [isDisplay, setIsDisplay] = useState(false);

    const handleDisplay = () => {
        setIsDisplay(!isDisplay);
        //console.log("to display: " +!isDisplay);
    }
    const renderToggle = () => {
        if (isDisplay) {
            return  props.children
        }
        return null;
    }

    return (
   <div>
            <Line justify="between">
                <h3>{props.title}</h3>
                <Btn onClick={handleDisplay} i={isDisplay ?"sort-up": "sort-down"}>{!isDisplay ? ("Expand" + "  " ): "Collapse"}</Btn>
            </Line>
            {renderToggle()}
   </div>
    )
}

export default Toggler;