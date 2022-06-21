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
    document.querySelector(".quiz_box").classList.add("active");
    showQuestion(quiz.fetchQuestion())
});

document.querySelector(".next_btn").addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        showQuestion(quiz.fetchQuestion())

    } else {
        console.log("there is no more question")
    }
})

function showQuestion(ques) {
    let question = `<span>${ques.questionText}</span>`;
    let options = "";
    for (let answer in ques.options) {
        options += `
    <div class="option">
    <span><b>${answer}</b>: ${ques.options[answer]}</span>
    </div>
    `
    }

    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;

}