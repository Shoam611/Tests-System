import './navigators.css'
import { Routes, Route, useLocation } from 'react-router-dom';

import AppNavigator from './AppNavigator';
import TestNavigator from './TestNavigator';
import AdminView from './AdminView'
import Modal from 'UIKit/Elements/Modal';
const MainNavigator = () => {
  let location = useLocation();
  let state = location.state;
  return (

    <div id='MainNavigatiorContainer'>
      {
        state?.backgroundLocation && (
          <Routes location={location}>
            <Route path='/qmodal/:id' element={<Modal />} />
          </Routes>
        )
      }
      {console.log('bg: ', state?.backgroundLocation, 'current: ', location)}
      <Routes location={state?.backgroundLocation ? state.backgroundLocation : location}>
        <Route path="/" element={<AdminView />} />
        <Route path="/app/*" element={<AppNavigator />} />
        <Route path="/test/*" element={<TestNavigator />} />
      </Routes>
    </div>

  )
}
export default MainNavigator;
