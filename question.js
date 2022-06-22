function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer
}


let questions = [
    new Question("1-which is javascript package management application ? ", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),
    new Question("2-which is javascript package management application ? ", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),
    new Question("3-which is javascript package management application ? ", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),
    new Question("4-which is .net package management application ? ", { a: "Node.js", b: "Nuget", c: "Npm" }, "b")

];