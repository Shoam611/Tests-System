import { Outlet } from 'react-router-dom';
import { Rows, Columns } from 'UIKit';
import Header from 'components/header';
import SideNav from './components/SideNav';
import './App.css';
import { useEffect } from 'react';
import { Dispatch } from 'react';
import {fetchQuestions} from 'Store/actions/question'
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchQuestions());
  },[])

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