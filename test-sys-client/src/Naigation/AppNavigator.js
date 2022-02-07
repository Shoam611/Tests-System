import { Outlet, Route, Routes } from 'react-router-dom';
import App from 'App';
import QuestionsViews from '../views/QuestionsView'
import TestsView from '../views/TestsView'
const AppNavigator = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                {/* <Route path='/app/questions' element={<QuestionsViews />} />
                <Route path='/app/tests' element={<TestsView />} /> */}
            </Routes>
            <Outlet />
        </div>
    )
}
export default AppNavigator;