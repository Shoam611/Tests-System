class QuestionsController {

  constructor({ questionRepository, logger }) {
    this.questionRepository = questionRepository; this.logger = logger
  }
  addQuestion = async ({ body }) => {
    const { newQuestion, } = body;
    if (!newQuestion) { return; }
    return await this.questionRepository.addAsync(newQuestion);
  }

  deleteQuestion = ({ body }) => {
    const { id } = body;
    this.questionRepository.DeleteOneAsync(id)
  }
  //--------------------------------------
  getQuestions = async ({ query }) => {
    const { topic } = query;
    let filter = {};
    if (topic) filter = { topic: topic }
    return await this.questionRepository.getAsync(filter);
  }

  updateQuestion = async ({ body }) => {
    const { newQuestion, id } = body;
    await this.questionRepository.updateOneAsync(id, newQuestion)
  }

}

module.exports = QuestionsController;
