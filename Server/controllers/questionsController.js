class QuestionsController {

  constructor({ mongoRepository }) {
    this.mongoRepository = mongoRepository;
  }
  addQuestion = ({ body }) => {
    console.log('inController');
    const { newQuestion, } = body;
    if (!newQuestion) { console.log("Invalid Question"); return; }
    this.mongoRepository.addAsync(newQuestion);
  }
  deleteQuestion = ({ body }) => {
    const { id } = body;
    console.log('in delete controller', id);
    this.mongoRepository.DeleteOneAsync(id)
  }
  //--------------------------------------

  getQuestions = (req) => {
    this.mongoRepository.getAsync();
    // const {oneOrMany,skip,take} = req.body;
    // if(fetch=="many")
    // if(fetch=="one")
    // this.mongoRepository.getOneAsync();
  };
  updateQuestion = ({ body }) => {
    throw new Error('not implimented')
    // const {id,newQuestion} = body
    // this.mongoRepository.updateOne(id,newQuestion)
  }

}

module.exports = QuestionsController;
