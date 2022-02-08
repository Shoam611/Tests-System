import { Link } from "react-router-dom"
import { Line, Icon, Box } from "UIKit"
import './header.css'
const Header = (props) => {
  return (
    <Line justify="between">
      <Line>
        <Box>
          <Icon i="holly-berry" />
        </Box>
        <div>
            <Link to="/" className="header-title">
                Quiz-It
            </Link>
        </div>
      </Line>
      <Line>
        <div>
          <Box>
            <a href='https://github.com/Shoam611/Tests-System'>GitHub</a>
          </Box>
        </div>
      </Line>
    </Line>
  )
}
export default Header