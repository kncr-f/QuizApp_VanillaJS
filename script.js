const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimerLine();
    ui.showQuestion(quiz.fetchQuestion());
    ui.showNumberOfQuestion(quiz.questionIndex + 1, quiz.questions.length);
    ui.next_btn.classList.remove("show");
});

ui.next_btn.addEventListener("click", function () {
    if (quiz.questions.length != quiz.questionIndex + 1) {
        quiz.questionIndex += 1;
        ui.showQuestion(quiz.fetchQuestion());
        startTimer(10);
        startTimerLine();
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
    clearInterval(counter);
    clearInterval(line)
    let answer = option.querySelector("span b").textContent;
    if (answer == quiz.fetchQuestion().correctAnswer) {
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
        quiz.numberOfCorrect += 1;


    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
    }
    let children = document.querySelector(".option_list").children;

    for (let i = 0; i < children.length; i++) {
        children[i].classList.add("disabled");
    }
    ui.next_btn.classList.add("show")
}

let counter;
function startTimer(time) {

    counter = setInterval(timer, 1000);
    function timer() {
        ui.time_second.textContent = time;
        time--;
        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = "Time is up!";
            // ui.time_second.remove();

            for (let option of ui.optionList.children) {
                if (option.querySelector("span b").textContent == quiz.fetchQuestion().correctAnswer) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            }
            ui.next_btn.classList.add("show")


        }
    }

}
let line;
function startTimerLine() {
    let line_width = 0;
    line = setInterval(timer, 19);

    function timer() {
        line_width += 1;
        ui.time_line.style.width = line_width + "px";
        if (line_width > 575) {
            clearInterval(line)
        }

    }
}
