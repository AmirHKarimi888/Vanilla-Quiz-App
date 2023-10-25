class view {
    data;
    app = document.querySelector("#app");
    headerContainer = document.querySelector("header");
    questionContainer = document.querySelector(".question");
    paginationContainer = document.querySelector(".pagination");
    finishBtnContainer = document.querySelector(".finish");


    render(data) {
        this.data = data;
        console.log(this.data.clientAnswers);
        
        this.headerContainer.innerHTML = "";
        this.generateHeaderMarkup();

        this.questionContainer.innerHTML = "";
        this.generateQuestionMarkup();

        this.paginationContainer.innerHTML = "";
        this.generatePaginationMarkup();

        this.finishBtnContainer.innerHTML = "";
        this.generateFinishBtnMarkup();
        
    }


    generateHeaderMarkup() {
        const markup =  `
        <div class="title">
        <h2 style="text-align: center; margin-top: 5px; margin-bottom: 15px;">Quiz App</h2>
        <div class="time">
          Time: ${ this.data.time } s
        </div>
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
        <li>1) ${this.data.question.answers[0].answer} <input class="choice" type="radio" name="question" id="choice1" value="1"></li>
        <li>2) ${this.data.question.answers[1].answer} <input class="choice" type="radio" name="question" id="choice2" value="2"></li>
        <li>3) ${this.data.question.answers[2].answer} <input class="choice" type="radio" name="question" id="choice3" value="3"></li>
        <li>4) ${this.data.question.answers[3].answer} <input class="choice" type="radio" name="question" id="choice4" value="4"></li>
        <li>5) None <input class="choice" type="radio" name="question" id="" value="0"></li>
        </ul>
        </div>
        `
        this.questionContainer.innerHTML = "";
        this.questionContainer.insertAdjacentHTML("afterbegin", markup);


        if(document.getElementById(`choice${this.data.clientAnswers[this.data.question.id-1].choice}`)) {
            document.getElementById(`choice${this.data.clientAnswers[this.data.question.id-1].choice}`).checked = true;
        }


        document.querySelectorAll(".choice").forEach((el) => el.addEventListener("change", (event) => {


            if(parseInt(event.target.value) == this.data.question.true) {
                
                this.data.clientAnswers.filter((ans) => {
                    if(ans.id == this.data.question.id) {
                        ans.choice = parseInt(event.target.value);
                        ans.t = 1;
                        ans.f = 0;
                        ans.n = 0;
                    }
                })
                
            } else if(parseInt(event.target.value) == 0) {
                
                this.data.clientAnswers.filter((ans) => {
                    if(ans.id == this.data.question.id) {
                        ans.choice = parseInt(event.target.value);
                        ans.t = 0;
                        ans.f = 0;
                        ans.n = 1;
                    }
                })

            } else {
                
                this.data.clientAnswers.filter((ans) => {
                    if(ans.id == this.data.question.id) {
                        ans.choice = parseInt(event.target.value);
                        ans.t = 0;
                        ans.f = 1;
                        ans.n = 0;
                    }
                })

            }
        }))
    }

    generatePaginationMarkup() {
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


    generateFinishBtnMarkup() {
        const markup = `
        ${ this.data.question.id == this.data.number ? `<button class="finishBtn">Finish</button>` : '' }
        `

        this.finishBtnContainer.innerHTML = "";
        this.finishBtnContainer.insertAdjacentHTML("afterbegin", markup);

        if(document.querySelector(".finishBtn")) {
            document.querySelector(".finishBtn").addEventListener("click", () => this.finishQuiz());
        }
    }


    finishQuiz() {

        this.data.clientAnswers.forEach((ans) => {
            this.data.T = this.data.T + ans.t;
            this.data.F = this.data.F + ans.f;
            this.data.N = this.data.N + ans.n;
        })

        const grade = (((this.data.T * 3) - (this.data.F))/(this.data.number * 3)) * 100;

        const markup = `
        <div class="result">
          <h4 style="text-align: center; margin-top: 15px; margin-bottom: 15px;">Number of Questions: ${this.data.number}</h4>
          <ul class="records">
            <li>Correct Answers: ${this.data.T}</li>
            <li>Wrong Answers: ${this.data.F}</li>
            <li>Empty Answers: ${this.data.N}</li>
          </ul>
          <h2 style="text-align: center; margin-top: 15px; margin-bottom: 15px; ${ grade >= 60 ? 'color: green;' : grade < 60 && grade >= 40 ? 'color: orange;' : 'color: red;' }">Grade in Percent: ${ grade } %</h2>
          <div class="restart">
            <button class="restartBtn">Restart</button>
          </div>
        </div>
        `

        this.app.innerHTML = "";
        this.app.insertAdjacentHTML("afterbegin", markup);

        document.querySelector(".restartBtn").addEventListener("click", this.restartQuiz);
    }

    restartQuiz() {
        window.location.href = "";
    }
}

export default new view();