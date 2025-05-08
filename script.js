let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let middleRock = document.getElementById("m-rock");
let middlePaper = document.getElementById("m-paper");
let middleScissor = document.getElementById("m-scissor");
let icons = document.querySelectorAll(".icon");
let resultIcon = document.querySelectorAll(".middleIcon");
let computerIcon = document.querySelectorAll(".computer-icon");
let computerBoxes = document.querySelectorAll(".computer-box");
let playerBoxes = document.querySelectorAll(".player-box");
let computerWins = document.querySelector(".computer-win");
let playerWins = document.querySelector(".player-win");
let button = document.querySelectorAll(".button");
let playerChoice = 0;
let computerChoice = 0;
let playerScore = 0;
let computerScore = 0;

const choices = ['c-rock', 'c-paper', 'c-scissor'];
const stronger = {
    rock: 'scissor',
    paper: 'rock',
    scissor: 'paper',
}


function disableClick(){
    icons.forEach(function(icon){
        icon.style.pointerEvents = 'none';
        icon.style.opacity = '0.5';
    })
}
function enableClick(){
    icons.forEach(function(icon){
        icon.style.pointerEvents = 'auto';
        icon.style.opacity = '1';
    })
}
function nextRound(){
    resultIcon.forEach(function(el){
        el.classList.add("hidden");
        el.classList.remove("show");
    });
    computerIcon.forEach(function(el){
        el.classList.add("hidden");
        el.classList.remove("show");
    });
}
function computerStrike(){
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomIndex];
    let computerElememt = document.getElementById(computerChoice);
    computerIcon.forEach(function(el){
        el.classList.add("hidden");
        el.classList.remove("show");
    });
    setTimeout(function(){
    computerElememt.classList.remove("hidden");
    computerElememt.classList.add("show");
    }, 500)
}
function scoring(playerChoice){
    let modComputerChoice = computerChoice.replace("c-","");
    if(playerChoice === modComputerChoice){
        playerScore;
        computerScore;
    } else if(stronger[playerChoice] === modComputerChoice ){
        playerBoxes[playerScore].style.backgroundColor = '#0a5586';
        playerScore++;
    }   else{
        computerBoxes[computerScore].style.backgroundColor = '#084D49';
        computerScore++;
    }
}
function reset(){
        playerChoice = 0;
        computerChoice = 0;
        playerScore = 0;
        computerScore = 0;
        resultIcon.forEach(function(el){
            el.classList.add("hidden");
            el.classList.remove("show");
        });
        computerIcon.forEach(function(el){
            el.classList.add("hidden");
            el.classList.remove("show");
        });
        playerBoxes.forEach(function(el){
            el.style.backgroundColor = "transparent"
        })
        computerBoxes.forEach(function(el){
            el.style.backgroundColor = "transparent"
        })
        playerWins.classList.add("hidden");
        playerWins.firstElementChild.nextElementSibling.classList.remove("showup");
        computerWins.classList.add("hidden");
        computerWins.firstElementChild.nextElementSibling.classList.remove("showup");
        enableClick();
}
function restartButton(){
    button.forEach(function(e){
        e.addEventListener("click", function(){
            reset();
        });
    });
}
function winner(){
    if(computerScore === 2){
        console.log("computer wins!");
        setTimeout(function(){
            computerWins.classList.remove("hidden");
        }, 1000);
        setTimeout(function(){
            computerWins.firstElementChild.nextElementSibling.classList.add("showup");
        }, 1000);
    } else if (playerScore === 2){
        console.log("player wins");
        setTimeout(function(){
            playerWins.classList.remove("hidden");
        }, 1000);
        setTimeout(function(){
            playerWins.firstElementChild.nextElementSibling.classList.add("showup");
        }, 1000);
    }
    disableClick();
    restartButton();
}
rock.addEventListener("click", function(){
    resultIcon.forEach(function(el){
        el.classList.add("hidden");
        el.classList.remove("show");
    });
    middleRock.classList.remove("hidden");
    middleRock.classList.add("show");

    computerStrike();
    setTimeout(nextRound , 2000);
    disableClick();
    setTimeout(enableClick, 2000);
    scoring('rock');
    winner();
});
paper.addEventListener("click", function(){
    resultIcon.forEach(function(el){
        el.classList.add("hidden");
        el.classList.remove("show");
    });
    middlePaper.classList.remove("hidden");
    middlePaper.classList.add("show");
    computerStrike();
    setTimeout(nextRound ,2000);
    disableClick();
    setTimeout(enableClick, 2000);
    scoring('paper');
    winner();
});
scissor.addEventListener("click", function(){
    resultIcon.forEach(function(el){
        el.classList.add("hidden");
        el.classList.remove("show");
    });
    middleScissor.classList.remove("hidden");
    middleScissor.classList.add("show");
    computerStrike();
    setTimeout(nextRound ,2000);
    disableClick();
    setTimeout(enableClick, 2000);
    scoring('scissor');
    winner();
});