import { uri } from "../api"

export const state = {
    question: {},
    number: 0
}

let questions = [];

export const loadQuestion = async (id) => {

    try {
        await fetch(uri + "questions")
        .then(res => res.json())
        .then((data) => {
            questions = data;
            state.number = questions.length;
        })
        .then(() => {
            state.question = questions?.filter((question) => {
                if(question.id == id) {
                    return question;
                }
            })[0]
        })
    } catch(err) {
        alert(err);
    }
}