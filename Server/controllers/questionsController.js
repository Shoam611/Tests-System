class QuestionsController {
  
  constructor({proxy})
  {
    this.db = []
  }
  runRequest(){
  }
  getAllQuestions = () => {
    return db.getAllQuestions();
  };

  addQuestion = (req) => {
    const {newQuestion} = req.body;
    console.log("new question: ",newQuestion);
    if (!question) return "Invalid Question";
    
  };
}

module.exports = QuestionsController;
