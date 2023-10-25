import "./src/components/template";
import "./src/css/style.css";
import * as model from "./src/model";
import view from "./src/view";


const cronometer = setInterval(() => {
  if(model.state.time > 0) {
      model.state.time --;
      if(document.querySelector(".time")) {
        document.querySelector(".time").innerHTML = "Time: " + model.state.time + " s";
      }
  } else if(model.state.time == 0) {
      view.finishQuiz();
      clearInterval(cronometer);
  }
}, 1000)


const controlQuestions = async () => {
  let id = window.location.hash.slice(1);

  id == "" ? window.location.hash = 1 : id;
  id > model.state.number ? window.location.hash = 1 : id;

  id = window.location.hash.slice(1);

  if(!id) return;

  await model.loadQuestion(id);

  view.render(model.state);
}

window.addEventListener("hashchange", controlQuestions);
window.addEventListener("load", controlQuestions);