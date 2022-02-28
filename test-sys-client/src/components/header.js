import { Link } from "react-router-dom"
import { Line, Icon } from "UIKit"
import './header.css'
const Header = (props) => {
  return (
    <Line justify="between">
      <Line>
          <Icon i="holly-berry" className="header-item" color='#7057b1' fontSize="1.5rem"/>
            <Link to="/" className="header-title">
                Quiz-It
            </Link>
      </Line>
      <Line>
        <div  className="header-item">
            <a href='https://github.com/Shoam611/Tests-System'>GitHub</a>
        </div>
        <div className="header-item">
        </div>
      </Line>
    </Line>
  )
}
export default Header