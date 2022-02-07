import { Routes, Route } from 'react-router-dom';
import DefaultView from 'views/defaultView';
import TestsView from '../views/TestsView'
import QuestionsView from '../views/QuestionsView'
import Test from '../views/Tests'

const TestNavigator = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Test />} >
          <Route path="questions" element={<QuestionsView />} />
          <Route path="tests" element={<TestsView />} />
          <Route path="default" element={<DefaultView />} />
        </Route>
      </Routes>
    </div>

  )
}
export default TestNavigator;