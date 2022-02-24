class Question{
    constructor(topic,questionType,questionText ,textAbove,textBelow,tags,awnsers,correctAwnserIndex,presentaionAxis,isAnActiveQuestion=false){
        this.topic = topic;
        this.questionType=questionType;
        this.questionText=questionText;
        this.textAbove=textAbove;
        this.textBelow=textBelow;
        this.tags=  tags.split(',')
                        .map(tag =>  tag.trim() )
                        .filter(tag => (!!tag) && tag);
        this.awnsers=awnsers;
        this.correctAwnserIndex=correctAwnserIndex;
        this.presentaionAxisId=presentaionAxis;
        this.isAnActiveQuestion=isAnActiveQuestion;
    }
}
export default Question;