const quizData = [
    {
        question: "The president of The United States appoints the cabinet members, ____ appointments are subject to Senate approval.",
        A: "their",
        B: "with their",
        C: "because their",
        D: "but their",
        correct: "D"
    }, {
        question: "The prisoners were prevented from speaking to reporters because _____.",
        A: "not wanting the story in the papers",
        B: "the story in the papers the superintendent did not want",
        C: "the public to hear the story",
        D: "the superintendent did not want the story in the papers",
        correct: "D"
    }, {
        question: "Like Thomas Berger's fictional character Little Big Man, Lauderdale managed to find himself where ____ of important events took place.",
        A: "it was an extraordinary number",
        B: "there was an extraordinary number",
        C: "an extraordinary number",
        D: "an extraordinary number existed",
        correct: "C"
    }, {
        question: "_____ sucked groundwater from below, some parts of the city, have begun to sink as much as ten inches annualy.",
        A: "Pumps have",
        B: "As pumps have",
        C: "So pumps have",
        D: "With pumps",
        correct: "B"
    }, {
        question: "Case studies are the target of much skepticism in the scientific community, _____ used extensively by numerous researchers.",
        A: "they are",
        B: "are",
        C: "yet they",
        D: "yet they are",
        correct: "D"
    }, {
        question: "According to the hypothesis in the study, the monarchs pick up the magnetic field of the ____ migrate by following magnetic fields",
        A: "target monarchs",
        B: "target since monarchs",
        C: "target since monarchs are",
        D: "target",
        correct: "B"
    }, {
        question: "_____ show the relations among neurons, they do not preclude the possibility that other aspects are important.",
        A: "Neural theories",
        B: "A neural theory",
        C: "Although neural theories",
        D: "However neural theories",
        correct: "C"
    }, {
        question: "_____ or refinanced, the lender will generally require setting up an escow account to ensure the payment of property taxes and homeowner's insurance.",
        A: "A home is",
        B: "A home is bought",
        C: "When a home",
        D: "When a home is bought",
        correct: "D"
    }, {
        question: "If ultraviolet radiation enters the Earth's atmosphere, _____ generally blocked by the ozone concentrated in the atmosphere.",
        A: "it",
        B: "it is",
        C: "so it is",
        D: "then it",
        correct: "B"
    }, {
        question: "Among human chromosomes, the Y chromosome is unusual _____ most of the chromosome does not participate in meiotic recombination.",
        A: "in",
        B: "so",
        C: "and",
        D: "in that",
        correct: "D"
    }
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.A;
    b_text.innerHTML = currentQuizData.B;
    c_text.innerHTML = currentQuizData.C;
    d_text.innerHTML = currentQuizData.D;


};

function getSelected() {

    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML =
                `<h2>You answered correctly ${score}/${quizData.length} questions.</h2> 
                <button onclick="location.reload()">Reload</button>`;
        }
    }


});