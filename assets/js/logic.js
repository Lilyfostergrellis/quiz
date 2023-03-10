// File for js logic
const NUM_QUESTIONS = questions.length
const TRANSITION_DELAY = 500
const TIMER_PERIOD = 1000
const PENALTY = 10
let quizDuration = 60
let questionsIndex = 0
let scoreCount = 0
//declaration of global variable

let questionsScreen = document.querySelector("#questions");
let feedbackEl = document.querySelector("#feedback");
let startQuizBtn = document.querySelector("#start");
let endQuizScreen = document.querySelector("#end-screen");
let initialInputEl = document.querySelector("#initials");
let submitBtn = document.querySelector("#submit");
//linking functions via HTML ids

function startQuiz() {
    hideStartScreen();
    startTimer();
    showQuiz();
}

startQuizBtn.addEventListener("click", startQuiz);
//Call functions to start the quiz

function hideStartScreen(){
    let startScreenDiv = document.querySelector("#start-screen");
    startScreenDiv.classList.add("hide");
}
//Hide initial start screen

function startTimer(){
    let timerEl = document.querySelector("#time");
    let timer = setInterval(function(){
        if (quizDuration >=0){
            timerEl.textContent = quizDuration
            quizDuration -= (TIMER_PERIOD / 1000);
        }
        else {
            clearInterval(timer);
            timerEl.textContent = ""
            stopQuiz();
        }
    }, TIMER_PERIOD)
}
//Timer Countdown