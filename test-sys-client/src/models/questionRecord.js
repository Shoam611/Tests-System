class QuestionRecord {
    constructor(questionId, selectedAnswersIds, wasRight) {
        this.questionId = questionId;
        this.selectedAnswersIds = selectedAnswersIds;
        this.wasRight = wasRight;
    }
}
export default QuestionRecord