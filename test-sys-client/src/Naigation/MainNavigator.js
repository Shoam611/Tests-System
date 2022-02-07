import { Routes, Route, Link } from 'react-router-dom';

import AppNavigator from './AppNavigator';
import TestNavigator from './TestNavigator';
import AdminView from './AdminView'
const MainNavigator = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminView />} />
        <Route path="/app/*" element={<AppNavigator />} />
        <Route path="/test/*" element={<TestNavigator />} />
      </Routes>
      {/* <Link to="/app">to app</Link>
      <Link>to navigation test</Link> */}
    </div>

  )
}
export default MainNavigator;
