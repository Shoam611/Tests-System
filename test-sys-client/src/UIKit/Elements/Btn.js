import './Btn.css';
import { Line, Icon, Box } from 'UIKit';

const Btn = (props) => {
    return (
        <div className="Btn" onClick={props.onClick}>
            <Line justify="between">
                {props.children}
                {props.i ? <Icon i={props.i} /> : null}
            </Line>
        
        </div>
    )
}
export default Btn;