class QuestionsController {

  constructor({ mongoRepository }) {
    this.mongoRepository = mongoRepository;
  }
  runRequest() {   }

  getQuestions = () => {
    this.mongoRepository.getAllAsync();
   };

  addQuestion = (req) => {
    console.log('inController');
    const { newQuestion } = req.body;
    // console.log("new question: ", newQuestion);
    if (!newQuestion) {
      console.log("Invalid Question");
      return;
    }
    this.mongoRepository.addAsync(newQuestion);
  };
}

module.exports = QuestionsController;
