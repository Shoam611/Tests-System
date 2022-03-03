class QuestionsController {

  constructor({ questionRepository, logger }) {
    this.questionRepository = questionRepository; this.logger = logger
  }
  addQuestion = async ({ body }) => {
    try { const { newQuestion, } = body;
      if (!newQuestion) { this.logger.eror(new Error('post request to the destenated adress missed nedded arguments')); return null; }
      return await this.questionRepository.addAsync(newQuestion);
    }
    catch (err) {
      return null;
      this.logger.error(new Error('failed to add question to datatabase, controller'));
    }
  }

  deleteQuestion = ({ body }) => {
    const { id } = body;
    this.questionRepository.DeleteOneAsync(id)
  }
  //--------------------------------------
  getQuestions = async ({ query }) => {
    const { topic } = query;
    let filter = {};
    console.log(topic);
    if (topic) filter = { topic: topic }
    return await this.questionRepository.getAsync(filter);
  }

  updateQuestion = async ({ body }) => {
    const { newQuestion, id } = body;
    console.log(id, newQuestion);
    await this.questionRepository.updateOneAsync(id, newQuestion)
  }

}

module.exports = QuestionsController;
