import { Route, Routes } from "react-router-dom";
import App from "App";
import DefaultView from "views/defaultView";
import TestsView from "../views/test-form/TestsView";
import ManageQuestionView from "views/questions-manager/manageQuestionsView";
import ManageTestsView from "views/tests-manager/manageTestsView";
import EditQuestionView from "views/questions-manager/editQuestionView";
import EditTestView from "views/tests-manager/editTestView"
import QuizReport from "views/reports/quizReport/quizReport";
import NewUserForm from "views/test-view/newUserForm";
import TestView from "views/test-view/testView";
import CreateQuestionForm from "views/question-form/createQuestionForm";
import ReportView from "views/reports/quizReport/reportView";
const AppNavigator = () => {
  return (
    <div id="AppNavigatorContainer">
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="questions/questions" element={<CreateQuestionForm />} />
          <Route path="questions/edit" element={<ManageQuestionView />} />
          <Route path="questions/edit/editQuestion/:id" element={<EditQuestionView />} />

          <Route path="qweezes/create/*" element={<TestsView />} />
          <Route path="qweezes/edit" element={<ManageTestsView />} />
          <Route path="qweezes/edit/editTest/:id" element={<EditTestView />} />
          <Route path="qweezes/run/:id" element={<NewUserForm />} />
          <Route path="qweezes/run/viewTest/:id" element={<TestView />} />

          <Route path="topics/topics" element={<DefaultView />} />
          <Route path="topics/edit" element={<DefaultView />} />

          <Route path="reports/qweezes" element={<QuizReport />} />
          <Route path="reports/qweezes/:id" element={<ReportView />} />

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
