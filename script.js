//OOP: Object Oriented Programming

function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;

    console.log(this)
}

Question.prototype.checkAnswer = function (answer) {
    return answer === this.correctAnswer
}

let question1 = new Question("which is javascript package management application ? ", { a: "Node.js", b: "Typscript", c: "Npm" }, "c");
let question2 = new Question("which is .net package management application ? ", { a: "Node.js", b: "Nuget", c: "Npm" }, "b");

let questions = [
    new Question("which is javascript package management application ? ", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),
    new Question("which is javascript package management application ? ", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),
    new Question("which is javascript package management application ? ", { a: "Node.js", b: "Typscript", c: "Npm" }, "c"),
    new Question("which is .net package management application ? ", { a: "Node.js", b: "Nuget", c: "Npm" }, "b")

];

console.log(question1.checkAnswer("c"))