class QuestionsController {

  constructor({ mongoRepository }) {
    this.mongoRepository = mongoRepository;
  }
  addQuestion =async ({ body }) => {
    console.log('inController');
    const { newQuestion, } = body;
    if (!newQuestion) { console.log("Invalid Question"); return; }
   return await this.mongoRepository.addAsync(newQuestion);
  }
  
  deleteQuestion = ({ body }) => {
    const { id } = body;
    console.log('in delete controller', id);
    this.mongoRepository.DeleteOneAsync(id)
  }
  //--------------------------------------
  getQuestions = async ({query}) => {
    console.log('in get questions');
    const { oneOrMany } = query;
    console.log('one or Many', oneOrMany);
    switch (oneOrMany) {
      case "one":
        console.log('in one case');
        const { id } = query;
         return await this.mongoRepository.getOneAsync(id)
      case "many":
        const { skip, take } = query;
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
