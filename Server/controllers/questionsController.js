class QuestionsController {

  constructor({ questionRepository }) {
    this.questionRepository = questionRepository;
  }
  addQuestion = async ({ body }) => {
    console.log('inController');
    const { newQuestion, } = body;
    if (!newQuestion) { console.log("Invalid Question"); return; }
    return await this.questionRepository.addAsync(newQuestion);
  }

  deleteQuestion = ({ body }) => {
    const { id } = body;
    console.log('in delete controller', id);
    this.questionRepository.DeleteOneAsync(id)
  }
  //--------------------------------------
  getQuestions = async ({ query }) => {
    console.log('in get questions');
    const { oneOrMany } = query;
    console.log('one or Many', oneOrMany);
    switch (oneOrMany) {
      case "one":
        console.log('in one case');
        const { id } = query;
        return await this.questionRepository.getOneAsync(id)
      case "many":
        const { skip, take } = query;
        console.log('in many case', skip, take);
        return await this.questionRepository.getAsync(skip, take)
      default: return undefined;
    }
  };

  updateQuestion = ({ body }) => {
    throw new Error('not implimented');
  }

}

module.exports = QuestionsController;
