import { uri } from "../api"

export const state = {
    question: {}
}

export const loadQuestion = async (id) => {

    try {
        await fetch(uri + "questions/" + id)
        .then(res => res.json())
        .then(data => state.question = data)

    } catch(err) {
        alert(err);
    }
}