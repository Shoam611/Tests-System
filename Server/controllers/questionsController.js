const repo = require("../dal/repository.js");

class QuestionsController {
  //Get Questions
  getAllQuestions = () => {
    return db.getAllQuestions();
  };

  addQuestion = (question) => {
    if (!question) return "Invalid Question";
    return db.addQuestion(question);
  };
}

module.exports = QuestionsController;
