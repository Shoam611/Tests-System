import { Outlet, Route, Routes } from 'react-router-dom';
import { Rows, Columns } from 'UIKit';
import Header from 'components/header';
import SideNav from './components/SideNav';
import QuestionsViews from './views/QuestionsView'
import TestsView from './views/TestsView'
import DefaultView from 'views/defaultView';
import './App.css';
function App() {
  return (
    <div className="App">
      <Rows>
        {/* top bar */}
        <Header />
        {/* body */}
        <div>
          <Columns>
            {/* navigation menue */}
            <SideNav />
            {/* content placeholder*/}
            <div>
              <Outlet />
            </div>
          </Columns>
        </div>

      </Rows >
    </div >
  );
}

export default App;
