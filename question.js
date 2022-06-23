function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer
}


let questions = [

    new Question("1-Which one is javascript package management application?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Question("2-Which one is not considered a frontend-tools?", { a: "css", b: "html", c: "javascipt", d: "sql" }, "d"),
    new Question("3-Which one is considered as backend-tools?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Question("4-Which one does not use the javascript programming language?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")

];