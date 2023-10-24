class view {
    data;
    headerContainer = document.querySelector("header");
    questionContainer = document.querySelector(".question");
    paginationContainer = document.querySelector(".pagination");


    render(data) {
        this.data = data;
        console.log(this.data);
        
        this.headerContainer.innerHTML = "";
        this.generateHeaderMarkup();

        this.questionContainer.innerHTML = "";
        this.generateQuestionMarkup();

        this.paginationContainer.innerHTML = "";
        this.generatePagination();
    }

    generateHeaderMarkup() {
        const markup =  `
        <div class="title">
        <h2 style="text-align: center; margin-top: 5px; margin-bottom: 15px;">Quiz App</h2>
        <div class="counter">
          Question ${ this.data.question.id + " of " + this.data.number }
        </div>
        <div class="progressBar" style="width:${ (this.data.question.id / this.data.number) * 100 }%"></div>
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

    generatePagination() {
        const markup = `
        <div>
        ${ this.data.question.id - 1 > 0 ? `<button id="previous">${this.data.question.id - 1}</button>` : `<button>-</button>` }
        <button>${this.data.question.id}</button>
        ${ this.data.question.id + 1 <= this.data.number ? `<button id="next">${this.data.question.id + 1}</button>` : `<button>-</button>` }
        </div>
        `
        this.paginationContainer.innerHTML = "";
        this.paginationContainer.insertAdjacentHTML("afterbegin", markup);

        if(document.querySelector("#previous")) {
            document.querySelector("#previous").addEventListener("click", () => {
                if(this.data.question.id - 1 > 0) {
                  window.location.hash = `#${this.data.question.id - 1}`;
                }
            })
        }

        if(document.querySelector("#next")) {
            document.querySelector("#next").addEventListener("click", () => {
                if(this.data.question.id + 1 <= this.data.number) {
                  window.location.hash = `#${this.data.question.id + 1}`;
                }
            })
        }
    }
}

export default new view();