function computerPlay(){
    let result;
    switch (Math.floor(Math.random()*(3-1+1)) + 1) {
        case 1:
            result = 'scissors'
            break;
        case 2:
            result = 'paper';
            break;
        case 3:
            result = 'rock';
            break;
        default:
            console.log('default case reached, not correct behavior.');
    }
    return result;
}

const computerSelection = computerPlay();
const playerSelection = "rock";
const playerWinTemplate = () => `You win! ${playerSelection} beats ${computerPlay()}`;
const playerLoseTemplate = () => `You lose! ${computerPlay()} beats ${playerSelection}`;


    /*
        rock
        paper 
        scissors

function playRound(playerSelection, computerSelection){

    let player = playerSelection.toLowerCase();

    if((player == 'rock') && (computerSelection == 'paper')){

        return 

    }
        



    */



