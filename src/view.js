class view {
    data;
    headerContainer = document.querySelector("header");
    questionContainer = document.querySelector(".question");


    render(data) {
        this.data = data;
        console.log(this.data);
        
        this.headerContainer.innerHTML = "";
        this.generateHeaderMarkup();

        this.questionContainer.innerHTML = "";
        this.generateQuestionMarkup();
    }

    generateHeaderMarkup() {
        const markup =  `
        <div class="header">
        </div>
        `
        this.headerContainer.innerHTML = "";
        this.headerContainer.insertAdjacentHTML("afterbegin", markup);
    }

    generateQuestionMarkup() {
        const markup = `
        <div class="text">
        ${this.data.question.id + "-" + this.data.question.text}
        </div>
        <div class="answers">
        <ul>
        <li>1) ${this.data.question.answers[0].answer} <input type="radio" name="question" id="" value=""></li>
        <li>2) ${this.data.question.answers[1].answer} <input type="radio" name="question" id="" value=""></li>
        <li>3) ${this.data.question.answers[2].answer} <input type="radio" name="question" id="" value=""></li>
        <li>4) ${this.data.question.answers[3].answer} <input type="radio" name="question" id="" value=""></li>
        </ul>
        </div>
        `
        this.questionContainer.innerHTML = "";
        this.questionContainer.insertAdjacentHTML("afterbegin", markup);
    }
}

export default new view();