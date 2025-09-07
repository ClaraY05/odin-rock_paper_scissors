// global vars
let playerScore = 0;
let computerScore = 0;
let pChoice;
let cChoice

// get result
const results = document.querySelector("#resultBox");

// function to get action of computer
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    let option;
    switch(choice){
        case 0:
            option = "rock";
            break;
        case 1:
            option = "paper";
            break;
        case 2:
            option = "scissors";
            break;
    }
    return option;
}

function playGame(){
    // play one round
    function playRound(playerChoice, computerChoice){
        let result;
        let verb;
        // decide result
        if(playerChoice === computerChoice){
            result = "tie";
            verb = "ties with";
        }
        else {
            switch(playerChoice){
                case "rock":
                    if(computerChoice === "paper"){
                        result = "lose"}
                    else{
                        result = "win"}
                    break;
                case "paper":
                    if(computerChoice === "scissors"){
                        result = "lose"}
                    else{
                        result = "win"}
                    break;
                case "scissors":
                    if(computerChoice === "rock"){
                        result = "lose"}
                    else{
                        result = "win"}
                    break;
            }
            if(result === "lose"){
                verb = "is beaten by";
                computerScore += 1;
            }
            else{
                verb = "beats";
                playerScore += 1;
            }
        }

        // print result
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        return `You ${result} this round. ${playerChoice} ${verb} ${computerChoice}.`;
    }
    let roundResult = playRound(pChoice,cChoice);
    let score = getScore();
    let printStatement = "";
    let winnerStatement = "";
    // choose winner statement and reset score
    if ((playerScore === 5)||(computerScore === 5)){
        if(playerScore === 5){
            winnerStatement = "You win!";
        }
        else{
            winnerStatement = "The computer wins!";
        }
        printStatement = roundResult + '\n' + winnerStatement;
        playerScore = 0;
        computerScore = 0;
    }
    else{
        printStatement = roundResult + '\n' + score;
    }
    results.textContent = printStatement;
}

function getScore(){
    return`PLAYER: ${playerScore}, COMPUTER: ${computerScore}`;
}

const choices = document.querySelector("#choices");

choices.addEventListener('click', (event)=>{
    let target = event.target;
    //console.log('click');
    // select pChoice
    switch(target.id){
        case 'rock':
            pChoice = "rock";
            break;
        case 'paper':
            pChoice = "paper";
            break;
        case 'scissors':
            pChoice = "scissors";
            break;
    }
    // select cChoice
    cChoice = getComputerChoice();

    //play game
    playGame();
});