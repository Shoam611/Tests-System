import { Line,Icon } from "UIKit"
const Header = (props) => {
    return (
        <Line justify="between">
            <Line>
              <Icon i="holly-berry" />
              <div>Quiz-It</div>
            </Line>
            <Line>
              <div><a href='https://github.com/Shoam611/Tests-System'>GitHub</a></div>
            </Line>
          </Line>
    )
}
export default Header