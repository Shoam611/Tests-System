import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Rows, Columns } from 'UIKit';
import Header from 'components/header';
import SideNav from './components/SideNav';
import { fetchQuestions } from 'Store/actions/question';
import { fetchTests } from 'Store/actions/test';
import { fetchTopic } from 'Store/actions/topic';
import './App.css';
function App() {
  const [isLoading, setIsLoading] = useState();

  const dispatch = useDispatch();
  const loadTopic = useCallback(async () => {
    await dispatch(fetchTopic())
  }, [dispatch]);

  const loadData = useCallback(async () => {
    await dispatch(fetchQuestions());
    await dispatch(fetchTests());
  }, [dispatch]);

  useEffect(() => {
    setIsLoading(true);
    loadTopic().then(() => {
      loadData().then(() => {
        setIsLoading(false)
      });
    })
  }, [loadData, loadTopic])

  return (
    isLoading ? (<div><h1>Our servers are down ;( try to refresh later</h1></div>) :
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