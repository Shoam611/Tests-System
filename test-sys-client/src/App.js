import { Rows, Line, Icon, Columns, Toggler } from 'UIKit';
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Accordion from 'UIKit/Elements/Accordion';

function App() {
  return (
    <div className="App">
      <Rows>
        <div>
          <Line justify="between">
            <Line>
              <Icon i="holly-berry" />
              <div>Quiz-It</div>
            </Line>
            <Line>
              <div><a href='#'>GitHub</a></div>
            </Line>
          </Line>
        </div>
       
        <div>
          <Columns>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}>
            
              <Toggler title={"Manage questions"}>
               <div>
                <ul>
                  <li>Add a question</li>
                  <li>Edit a question</li>
                </ul>
               </div>
              </Toggler>
              <Toggler title={"Manage Tests"}>
              <div>
                <ul>
                  <li>Add a tests</li>
                  <li>Edit tests</li>
                </ul>
               </div>
              </Toggler>
              <Toggler title={"Manage questions"}>
              <div>
                <ul>
                  <li>Add a question</li>
                  <li>Edit a question</li>
                </ul>
               </div>
              </Toggler>
            </div>
            
            <div>

            </div>
          </Columns>
        </div>
      </Rows >
    </div >
  );
}

export default App;
