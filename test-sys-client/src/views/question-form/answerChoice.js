import {Line,Input,Btn} from 'UIKit';
const AnswerChoice = props => {    
    const onValueChange = (e) => {props.onChange(e.target.value,props.id)}
    console.log(props.className);
    return (
        <Line  className={props.className}>
            <Input onChange={(e)=>{onValueChange(e)}} value = {props.value}/>
            <Btn i="minus" onClick={() => { props.onRemove(props.id) }}  />
        </Line>
    )
}
export default AnswerChoice