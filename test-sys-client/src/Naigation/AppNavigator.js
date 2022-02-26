import { Route, Routes } from "react-router-dom";
import App from "App";
import QuestionsView from "../views/QuestionsView";
import DefaultView from "views/defaultView";
import TestsView from "../views/test-form/TestsView";
import ManageQuestionView from "views/manageQuestionsView";
import ManageTestsView from "views/manage-tests/manageTestsView";
import EditQuestionView from "views/editQuestionView";
import EditTestView from "views/manage-tests/editTestView"
const AppNavigator = () => {
  return (
    <div id="AppNavigatorContainer">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="questions/questions" element={<QuestionsView />} />
          <Route path="questions/edit" element={<ManageQuestionView />} />
          <Route path="questions/edit/editQuestion/:id" element={<EditQuestionView />} />

          <Route path="qweezes/create/*" element={<TestsView />} />
          <Route path="qweezes/edit" element={<ManageTestsView />} />
          <Route path="qweezes/edit/editTest/:id" element={<EditTestView />} />

          <Route path="topics/topics" element={<DefaultView />} />
          <Route path="topics/edit" element={<DefaultView />} />

          <Route path="reports/qweezes" element={<DefaultView />} />
          <Route path="reports/respondant" element={<DefaultView />} />
          <Route path="reports/statistics" element={<DefaultView />} />

          <Route path="accounts/fields" element={<DefaultView />} />
          <Route path="accounts/details" element={<DefaultView />} />
          <Route path="accounts/lang" element={<DefaultView />} />
          <Route path="accounts/ui" element={<DefaultView />} />

          <Route path="admin/permissions" element={<DefaultView />} />
          <Route path="admin/annount" element={<DefaultView />} />
        </Route>
      </Routes>
    </div>
  );
};
export default AppNavigator;
