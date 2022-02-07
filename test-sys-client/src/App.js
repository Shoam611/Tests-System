import { Outlet, Routes, Route } from 'react-router-dom';
import { Rows, Columns } from 'UIKit';
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
              <Outlet />
            </div>
          </Columns>
        </div>
      </Rows >
    </div >
  );
}

export default App;
