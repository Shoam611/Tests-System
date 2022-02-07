import { Routes, Route, Outlet } from 'react-router-dom';
import App from 'App';
import DefaultView from 'views/defaultView';
import TestsView from '../views/TestsView'
import QuestionsView from '../views/QuestionsView'
const MainNavigator = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="questions" element={<QuestionsView />} />
          <Route path="tests" element={<TestsView />} />
          <Route path="default" element={<DefaultView />} />
          <Route path="*" element={<> <h2>404 not found</h2> </>} />
        </Route>
      </Routes>
    </div>

  )
}
export default MainNavigator;
