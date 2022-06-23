function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
    this.numberOfCorrect = 0
}

Quiz.prototype.fetchQuestion = function () {
    return this.questions[this.questionIndex]
}