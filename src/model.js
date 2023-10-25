import { uri } from "../api"

export const state = {
    question: {},
    number: 0,
    time: 120,
    clientAnswers: [],
    T: 0,
    F: 0,
    N: 0,
}

let questions = [
    {
        "id": 1,
        "text": "Sumation of 100 and 500 equals to:",
        "answers": [
            { "id": 1, "answer": 700 },
            { "id": 2, "answer": 400 },
            { "id": 3, "answer": 600 },
            { "id": 4, "answer": 300 }
        ],
        "true": 3
    },
    {
        "id": 2,
        "text": "Root of the number '1234321':",
        "answers": [
            { "id": 1, "answer": 1111 },
            { "id": 2, "answer": 1110 },
            { "id": 3, "answer": 1101 },
            { "id": 4, "answer": 1011 }
        ],
        "true": 1
    },
    {
        "id": 3,
        "text": "2, 8, 18, 32, ?",
        "answers": [
            { "id": 1, "answer": 48 },
            { "id": 2, "answer": 52 },
            { "id": 3, "answer": 46 },
            { "id": 4, "answer": 50 }
        ],
        "true": 4
    },
    {
        "id": 4,
        "text": "sin(53):",
        "answers": [
            { "id": 1, "answer": 0.7 },
            { "id": 2, "answer": 0.8 },
            { "id": 3, "answer": 0.9 },
            { "id": 4, "answer": 0.5 }
        ],
        "true": 2
    },
    {
        "id": 5,
        "text": "Is a JS library:",
        "answers": [
            { "id": 1, "answer": "Vue" },
            { "id": 2, "answer": "Angular" },
            { "id": 3, "answer": "Svelte" },
            { "id": 4, "answer": "Jquery" }
        ],
        "true": 4
    }
];



export const loadQuestion = async (id) => {

    state.number = questions.length;

    questions.map((q) => {
        if(state.clientAnswers.length < state.number) {
            state.clientAnswers = [ ...state.clientAnswers, { id: q.id, choice: 0, t: 0, f: 0, n: 1 } ]
        }
    })
    
    state.question = questions?.filter((question) => {
        if(question.id == id) {
            return question;
        }
    })[0]


    
    // try {
    //     await fetch(uri + "questions")
    //     .then(res => res.json())
    //     .then((data) => {
    //         questions = data;
    //         state.number = questions.length;
    //     })
    //     .then(() => {
    //         questions.map((q) => {
    //             if(state.clientAnswers.length < state.number) {
    //                 state.clientAnswers = [ ...state.clientAnswers, { id: q.id, choice: 0, t: 0, f: 0, n: 1 } ]
    //             }
    //         })
    //     })
    //     .then(() => {
    //         state.question = questions?.filter((question) => {
    //             if(question.id == id) {
    //                 return question;
    //             }
    //         })[0]
    //     })
    // } catch(err) {
    //     alert(err);
    // }
}