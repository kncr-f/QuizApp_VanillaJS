function UI() {
    this.btn_start = document.querySelector(".btn_start"),
        this.next_btn = document.querySelector(".next_btn"),
        this.quiz_box = document.querySelector(".quiz_box"),
        this.optionList = document.querySelector(".option_list"),
        this.correctIcon = '<div class="icon"><i class="fas fa-check"></i></div>',
        this.inCorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>'
}

UI.prototype.showQuestion = function (ques) {
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
    this.optionList.innerHTML = options;

    const allOptions = this.optionList.querySelectorAll(".option");

    for (let opt of allOptions) {
        opt.setAttribute("onclick", "optionSelected(this)")
    }

};

UI.prototype.showNumberOfQuestion = function (index, total) {
    let content = `
    <span class="badge bg-warning">${index} / ${total}</span>
    `;

    document.querySelector(".question_index").innerHTML = content;
}