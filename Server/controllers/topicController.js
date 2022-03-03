class TopicController{

    constructor({topicRepository}){
        this.topicRepository=topicRepository;
    }
    getDefaultTopic = async () =>{
      return await this.topicRepository.getDefaultAsync();
    }   
}
module.exports = TopicController