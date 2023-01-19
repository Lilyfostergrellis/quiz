// js leaderboard
let scoresContainer = document.querySelector("#highscores")
let clearBtn = document.querySelector("#clear")

showScores()

function showScores(){
}

function getScores (){
    let scores = localStorage.getItem("")
    return JSON.parse(scores)
}

clearBtn.addEventListener("click", function(){
    localStorage.clear();
    scoresContainer.classList.add("hide");
})