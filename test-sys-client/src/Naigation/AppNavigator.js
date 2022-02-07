import { Route, Routes } from 'react-router-dom';
import App from 'App';
import QuestionsViews from '../views/QuestionsView';
import DefaultView from 'views/defaultView';
import TestsView from '../views/TestsView';
const AppNavigator = () => {
    return (
        <div id='AppNavigatorContainer'>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="questions" element={<QuestionsViews />} />
                    <Route path="tests"     element={<TestsView />} />
                    <Route path="default"   element={<DefaultView />} />
                </Route>
            </Routes>
        </div>
    )
}
export default AppNavigator;