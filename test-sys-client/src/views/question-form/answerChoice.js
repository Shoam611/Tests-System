import {Line,Input,Btn} from 'UIKit';
const AnswerChoice = props => {    
    const onValueChange = (e) => {props.onChange(e.target.value,props.id)}
    return (
        <Line>
            <Input onChange={(e)=>{onValueChange(e)}} value = {props.value}/>
            <Btn i="minus" onClick={() => { props.onRemove(props.id) }}  />
        </Line>
    )
}
export default AnswerChoice