import { Routes, Route } from 'react-router-dom';

import AppNavigator from './AppNavigator';
import TestNavigator from './TestNavigator';
import App from 'App';
import DefaultView from 'views/defaultView';
import TestsView from '../views/TestsView'
import QuestionsView from '../views/QuestionsView'


const MainNavigator = () => {
  return (
    <div>
      <Routes>
          <Route path="/app/*"  element={<AppNavigator  />} />
          <Route path="/test/*" element={<TestNavigator />} />
      </Routes>
    </div>

  )
}
export default MainNavigator;
