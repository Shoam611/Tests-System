class QuestionsController {
  
  constructor(proxy)
  {

  }
  runRequest(){
    //call service or repository
  }

  getAllQuestions = () => {
    return db.getAllQuestions();
  };

  addQuestion = (question) => {
    if (!question) return "Invalid Question";
    return db.addQuestion(question);
  };
}

module.exports = QuestionsController;
