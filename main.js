import "./src/css/style.css";
import * as model from "./src/model";
import view from "./src/view";


const controlQuestions = async () => {
  const id = window.location.hash.slice(1);

  if(!id) return;

  await model.loadQuestion(id);

  view.render(model.state.question);
}

window.addEventListener("hashchange", controlQuestions);
window.addEventListener("load", controlQuestions);