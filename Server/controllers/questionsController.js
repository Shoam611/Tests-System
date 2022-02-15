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
  getQuestions = async (req) => {
    console.log('in get questions');
    const { oneOrMany } = req.query;
    console.log('one or Many', oneOrMany);
    switch (oneOrMany) {
      case "one":
        console.log('in one case');
        const { id } = req.query;
         return await this.mongoRepository.getOneAsync(id)
      case "many":
        const { skip, take } = req.query;
        console.log('in many case',skip,take);
        return await this.mongoRepository.getAsync(skip, take)
      default: return undefined;
    }
  };

  updateQuestion = ({ body }) => {
    throw new Error('not implimented')
    // const {id,newQuestion} = body
    // this.mongoRepository.updateOne(id,newQuestion)
  }

}

module.exports = QuestionsController;
