import { Link } from "react-router-dom"
import { Line,Icon } from "UIKit"
const Header = (props) => {
    return (
        <Line justify="between">
            <Line>
              <Icon i="holly-berry" />
              <div><Link to="/">Quiz-It</Link></div>
            </Line>
            <Line>
              <div><a href='https://github.com/Shoam611/Tests-System'>GitHub</a></div>
            </Line>
          </Line>
    )
}
export default Header