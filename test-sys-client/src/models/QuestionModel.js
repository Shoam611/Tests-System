class Question{
    constructor(topic,questionType,questionText ,textAbove,textBelow,tags,awnsers,correctAwnserIndex){
        this.topic = topic;
        this.questionType=questionType;
        this.questionText=questionText;
        this.textAbove=textAbove;
        this.textBelow=textBelow;
        this.tags= tags
        .split(',')
        .map(tag => { if(tag.trim().length > 0) return tag.trim() })
        .filter(tag => (!!tag) && tag);
        this.awnsers=awnsers;
        this.correctAwnserIndex=correctAwnserIndex;
    }
}
export default Question;