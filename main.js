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

let playerWinTotal = 0;
let compWinTotal = 0;
let tieTotal = 0;

function playRound(playerSelection = window.prompt('Enter rock, paper, or scissors'), computerSelection = computerPlay()){

    let player = playerSelection.toLowerCase();

    const playerWinTemplate = `You win! ${player} beats ${computerSelection}`;
    const playerLoseTemplate = `You lose! ${computerSelection} beats ${playerSelection}`;
    const sameChoiceTemplate = `You and the computer both chose ${playerSelection}!`;

    switch (player) {
        case 'rock':
            if(computerSelection == 'paper'){
                compWinTotal++;
                return playerLoseTemplate;
            }else if(computerSelection == 'scissors'){
                playerWinTotal++;
                return playerWinTemplate;
            }else{ //player and computer made same choice
                tieTotal++;
                return sameChoiceTemplate;
            }
        case 'paper':
            if(computerSelection == 'scissors'){
                compWinTotal++;
                return playerLoseTemplate;
            }else if(computerSelection == 'rock'){
                playerWinTotal++;
                return playerWinTemplate;
            }else{ //player and computer made same choice
                tieTotal++;
                return sameChoiceTemplate;
            }
        case 'scissors':
            if(computerSelection == 'rock'){
                compWinTotal++;
                return playerLoseTemplate;
            }else if(computerSelection == 'paper'){
                playerWinTotal++;
                return playerWinTemplate;
            }else{ //player and computer made same choice
                tieTotal++;
                return sameChoiceTemplate;
            }
        default:
            console.log('switch in playRound is not working correcty');
    }

}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
     }
     console.log(`Results
                  Player wins: ${playerWinTotal}
                  Computer wins: ${compWinTotal}
                  Ties: ${tieTotal}`
                  );

}
        



    



