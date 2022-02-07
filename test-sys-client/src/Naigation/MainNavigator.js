import './navigators.css'
import { Routes, Route } from 'react-router-dom';

import AppNavigator from './AppNavigator';
import TestNavigator from './TestNavigator';
import AdminView from './AdminView'
const MainNavigator = () => {
  return (
    <div id='MainNavigatiorContainer'>
      <Routes>
        <Route path="/" element={<AdminView />} />
        <Route path="/app/*" element={<AppNavigator />} />
        <Route path="/test/*" element={<TestNavigator />} />
      </Routes>
    </div>

  )
}
export default MainNavigator;
