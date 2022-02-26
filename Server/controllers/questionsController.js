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
        const { skip, take ,topic} = query;
        let filter = {};
        if(topic)filter = {topic: topic}
        console.log('in many case', skip, take);
        return await this.questionRepository.getAsync(skip, take,filter)
      default: return undefined;
    }
  };

  updateQuestion = async ({ body }) => {
    const {newQuestion,id} = body;
    console.log(id,newQuestion);
    await this.questionRepository.updateOneAsync(id,newQuestion)
  }

}

module.exports = QuestionsController;
