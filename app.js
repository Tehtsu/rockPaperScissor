let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector("#user-score");
const compScore_span = document.querySelector("#comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const resultMsg_p = document.querySelector(".result-msg > p");
const winLose_span = document.getElementsByClassName('winlose');
const rock_div = document.querySelector("#rock");
const paper_div = document.querySelector("#paper");
const scissor_div = document.querySelector("#scissor");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function convertToGermanWord(word) {
    if(word === "rock") return "Stein";
    if(word === "paper") return "Papier";
    return "Schere";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    resultMsg_p.innerHTML = `${convertToGermanWord(userChoice)} schlägt ${convertToGermanWord(compChoice)}.` +  '<br><span class="win">Du gewinnst! 🎉</span>' ;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('green-glow')}, 1500);
}



function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    resultMsg_p.innerHTML = `${convertToGermanWord(userChoice)} schlägt ${convertToGermanWord(compChoice)}.` +  '<br><span class="lose">Du verlierst! 💩</span>' ;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('red-glow')}, 1500);
}

function draw(userChoice, compChoice) {
    resultMsg_p.innerHTML = `${convertToGermanWord(userChoice)} und ${convertToGermanWord(compChoice)}.` +  '<br><span class="draw">Unentschieden! 😮</span>' ;
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout( function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 1500);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, compChoice);
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, compChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
        
    rock_div.addEventListener('click', function() {
        // alert('Rock')
        game("rock");
    })
    
    paper_div.addEventListener('click', function() {
        // alert('Paper')
        game("paper");
    })
    
    scissor_div.addEventListener('click', function() {
        // alert('Scissor')
        game("scissor");
    })
}

main();
