class TopicController{

    constructor({topicRepository}){
        this.topicRepository=topicRepository;
    }
    getDefaultTopic = async () =>{
        console.log('in topic controller');
      return await this.topicRepository.getDefaultAsync();
    }   
}
module.exports = TopicController