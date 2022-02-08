import './Icon.css'
const Icon = (props) => {
    return (
        <div className="Icon">
            <i className={`fas fa-${props.i}`} color="#fefefe"> </i>
        </div>
    )
}

export default Icon;