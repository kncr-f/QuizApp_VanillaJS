//OOP: Object Oriented Programming

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
function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.fetchQuestion = function () {
    return this.questions[this.questionIndex]
}

const quiz = new Quiz(questions);

console.log(quiz.fetchQuestion());

document.querySelector(".btn_start").addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex) {
        document.querySelector(".quiz_box").classList.add("active");
        console.log(quiz.fetchQuestion())
        quiz.questionIndex += 1;
    } else {
        console.log("there is no more question")
    }
})