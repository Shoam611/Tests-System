import { Outlet } from 'react-router-dom';
import { Rows, Columns } from 'UIKit';
import Header from 'components/header';
import SideNav from './components/SideNav';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from 'Store/actions/question'
import { fetchTests } from 'Store/actions/test';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchQuestions());
    dispatch(fetchTests());
  }, [])

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