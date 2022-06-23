const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    ui.showQuestion(quiz.fetchQuestion());
    ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        ui.showQuestion(quiz.fetchQuestion());
        ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length)
        ui.next_btn.classList.remove("show")


    } else {
        console.log("there is no more question");
        //ui.next_btn.classList.remove("show");
        ui.quiz_box.classList.remove("active")
        ui.score_box.classList.add("active");
        ui.showScore(quiz.questions.length, quiz.numberOfCorrect)

    }
});

ui.btn_quit.addEventListener("click", function () {
    window.location.reload()
});

ui.btn_replay.addEventListener("click", function () {
    quiz.questionIndex = 0;
    quiz.numberOfCorrect = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");

});



function optionSelected(option) {

    let answer = option.querySelector("span b").textContent;
    if (answer == quiz.fetchQuestion().correctAnswer) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
        quiz.numberOfCorrect += 1;

    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.inCorrectIcon)

    }
    let children = document.querySelector(".option_list").children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show")
}

