class Question {
    constructor(topic, questionType, questionText, textAbove, textBelow, tags, answers, correctAwnserIndex, presentaionAxis, isAnActiveQuestion = false) {
        this.topic = topic;
        this.questionType = questionType;
        this.questionText = questionText;
        this.textAbove = textAbove;
        this.textBelow = textBelow;
        this.tags = tags
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => (!!tag) && tag);
        this.answers = answers;
        this.correctAnswerIds = correctAwnserIndex;
        this.presentaionAxisIds = presentaionAxis;
        this.isAnActiveQuestion = isAnActiveQuestion;
    }
}
export default Question;