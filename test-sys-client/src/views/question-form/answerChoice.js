import useInput from 'hooks/useInput';
import {Line,Input,Btn} from 'UIKit';
const AnswerChoice = props => {    
    const onValueChange = (e) => {props.onChange(e.target.value,props.id)}
    const input=useInput(props.value);
    return (
        <Line  className={props.className}>
            <Input onChange={(e)=>{input.onChange(e);onValueChange(e);}}  value = {input.value} />
            <Btn i="minus" onClick={() => { props.onRemove(props.id) }}  />
        </Line>
    )
}
export default AnswerChoice