import './Icon.css'
const Icon = (props) => {
    const style ={
        color: props.color?props.color: '#000',
        fontSize:props.fontSize ? props.fontSize : 'inherit' 
    }
    return (
        <div className="Icon" >
            <i className={`fas fa-${props.i}`} style={{...style}}> </i>
        </div>
    )
}

export default Icon;