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
        this.presentaionAxisId = presentaionAxis;
        this.isAnActiveQuestion = isAnActiveQuestion;
    }

    validate() {
        if (+this.questionType < 1 || +this.questionType > 3)
            return [false, 'Please Choose a Question Types.'];
        if (!this.topic)
            return [false, 'Please Choose a Topic.'];

        if (this.questionText.length === 0)
            return [false, 'Question Text Cannot be Empty.'];

        if (this.textAbove.length === 0)
            return [false, 'Text Above Question Be Empty.'];

        if (this.textBelow.length === 0)
            return [false, 'Text Below Question Be Empty.'];

        if (this.tags.length === 0)
            return [false, 'You Must Enter At Least One Tag.'];

        for (let answer of this.answers)
            if (answer.value.length === 0)
                return [false, 'Answers Cannot Be Empty.'];

        if (this.correctAnswerIds.length === 0)
            return [false, 'You Must Choose Right Answer/s.'];

        return [true, 'Preceding Create Question...'];
    }
}
export default Question;