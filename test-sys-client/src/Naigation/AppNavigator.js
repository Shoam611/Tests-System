import { Route, Routes } from 'react-router-dom';
import App from 'App';
import QuestionsViews from '../views/QuestionsView';
import DefaultView from 'views/defaultView';
import TestsView from '../views/TestsView';
const AppNavigator = () => {
    return (
        <div id='AppNavigatorContainer'>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route path="questions/questions" element={<QuestionsViews />} />
                    <Route path="questions/edit" element={<QuestionsViews />} />
                   
                    <Route path="qweezes/qweezes" element={<QuestionsViews />} />
                    <Route path="qweezes/edit" element={<QuestionsViews />} />
                   
                    <Route path="topics/topics" element={<QuestionsViews />} />
                    <Route path="topics/edit" element={<QuestionsViews />} />

                    <Route path="reports/qweezes" element={<QuestionsViews />} />
                    <Route path="reports/respondant" element={<QuestionsViews />} />
                    <Route path="reports/statistics" element={<QuestionsViews />} />

                    <Route path="accounts/fields" element={<QuestionsViews />} />
                    <Route path="accounts/details" element={<QuestionsViews />} />
                    <Route path="accounts/lang" element={<QuestionsViews />} />
                    <Route path="accounts/ui" element={<QuestionsViews />} />
                    
                    <Route path="admin/permissions" element={<QuestionsViews />} />
                    <Route path="admin/annount" element={<QuestionsViews />} />
                </Route>
            </Routes>
        </div>
    )
}
export default AppNavigator;