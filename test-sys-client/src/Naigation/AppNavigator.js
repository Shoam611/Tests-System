import { Route, Routes } from "react-router-dom";
import App from "App";
import QuestionsView from "../views/QuestionsView";
import DefaultView from "views/defaultView";
import TestsView from "../views/test-form/TestsView";
import ManageQuestionView from "views/manageQuestionsView";
import ManageTestsView from "views/manageTestsView";
const AppNavigator = () => {
  return (
    <div id="AppNavigatorContainer">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="questions/questions" element={<QuestionsView />} />
          <Route path="questions/edit" element={<ManageQuestionView />} />

          <Route path="qweezes/create/*" element={<TestsView />} />
          <Route path="qweezes/edit" element={<ManageTestsView />} />

          <Route path="topics/topics" element={<QuestionsView />} />
          <Route path="topics/edit" element={<DefaultView />} />

          <Route path="reports/qweezes" element={<QuestionsView />} />
          <Route path="reports/respondant" element={<DefaultView />} />
          <Route path="reports/statistics" element={<TestsView />} />

          <Route path="accounts/fields" element={<QuestionsView />} />
          <Route path="accounts/details" element={<DefaultView />} />
          <Route path="accounts/lang" element={<DefaultView />} />
          <Route path="accounts/ui" element={<TestsView />} />

          <Route path="admin/permissions" element={<DefaultView />} />
          <Route path="admin/annount" element={<QuestionsView />} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppNavigator;
