class QuestionsController {

  constructor({ questionRepository }) {
    this.questionRepository = questionRepository;
  }
  addQuestion = async ({ body }) => {
    try{
      const { newQuestion, } = body;
      if (!newQuestion) { console.log("Invalid Question"); return; }
      return await this.questionRepository.addAsync(newQuestion);
    }catch(err){}
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
