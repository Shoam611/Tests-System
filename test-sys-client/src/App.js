import { Outlet } from 'react-router-dom';
import { Rows, Columns } from 'UIKit';
import Header from 'components/header';
import SideNav from './components/SideNav';
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
            <div className='app-outlet-container'>
              <Outlet />
            </div>
          </Columns>
        </div>
      </Rows >
    </div >
  );
}

export default App;