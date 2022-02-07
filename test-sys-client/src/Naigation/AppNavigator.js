import {  Outlet, Route, Routes } from 'react-router-dom';
import App from 'App';
import QuestionsViews from '../views/QuestionsView'
import TestsView from '../views/TestsView'
const AppNavigator = () => {
return(
    <>
    <Routes>
        <Route path='/' element={<App />} />
        <Route path='*/questions' element={<QuestionsViews />}     />
        <Route path='*/tests' element={<TestsView />} />
    </Routes>
    <Outlet />
    </>
)
} 
export default AppNavigator;