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

// function to get action of player
function getHumanChoice(){
    let choice = (prompt("Please pick your action (rock, paper, scissors).","")).toLowerCase();
    while((choice!="rock")&&(choice!="paper")&&(choice!="scissors")){
        choice = (prompt("Please pick your action, use an exact option (rock, paper, scissors).","")).toLowerCase();
    }
    return choice;
}

function playGame(){
    // game variables
    let playerScore = 0;
    let computerScore = 0;
    let pChoice;
    let cChoice;

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
        return `You ${result}! ${playerChoice} ${verb} ${computerChoice}.`;
    }

    // play round 5 times
    for(let i = 0; i <5; i++){
        console.log(`The score is currently: PLAYER-${playerScore} COMPUTER-${computerScore}`);
        pChoice = getHumanChoice();
        cChoice = getComputerChoice();
        console.log(playRound(pChoice,cChoice));
    }
    console.log(`FINALSCORE: PLAYER-${playerScore} COMPUTER-${computerScore}`);
}

playGame();