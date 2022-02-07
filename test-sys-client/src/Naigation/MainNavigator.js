import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import App from 'App';
import DefaultView from 'views/defaultView';
import AppNavigator from './AppNavigator';
const MainNavigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/app'   element={<AppNavigator />} />
        <Route path='/login' element={<DefaultView />} />
        <Route path='/test'  element={<DefaultView />} />
      </Routes>
      {/* <Outlet /> */}
    </BrowserRouter>
  )
}
export default MainNavigator;