import { Outlet, Link } from 'react-router-dom';
import { Rows, Line, Icon, Columns, Toggler, Accordion } from 'UIKit';
import Header from 'components/header';
import SideNav from './components/SideNav'
import './App.css';
function App() {
  return (
    <div className="App">
      <Rows>
        <Header />
        <div>
          <Columns>
            <SideNav />
            <div>
              
            </div>
          </Columns>
        </div>
      </Rows >
    </div >
  );
}

export default App;
