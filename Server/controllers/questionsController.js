class QuestionsController {

  constructor({ mongoRepository }) {
    this.mongoRepository = mongoRepository;
  }

  getQuestions = (req) => {
     this.mongoRepository.getAsync();
    // const {oneOrMany} = req;
    // if(fetch=="many")
    // if(fetch=="one")
    // this.mongoRepository.getOneAsync();
   };

  addQuestion = (req) => {
    console.log('inController');
    const { newQuestion } = req.body;
    if (!newQuestion) {console.log("Invalid Question");return;}
    this.mongoRepository.addAsync(newQuestion);
  }
  deleteQuestion = (req)=>{
    console.log('in delete controller');
    const {id} = req.body;
    console.log('delete id' , id);
    this.mongoRepository.DeleteOneAsync(id)
  }
}

module.exports = QuestionsController;
