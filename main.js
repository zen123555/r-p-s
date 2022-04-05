
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');

let scoreboard = document.querySelector('#scoreboard');;

let playerWinTotal = 0;
let compWinTotal = 0;
let tieTotal = 0;

//configuring elements for results output
let resultsContainer = document.querySelector('#results-container');
const resultsContent = document.createElement('p');
resultsContent.classList.add('results-content');

rock.addEventListener('click', () => playRound('rock'));
paper.addEventListener('click', () => playRound('paper'));
scissors.addEventListener('click', () => playRound('scissors'));

function computerPlay(){
    let result;
    switch (Math.floor(Math.random()*(3-1+1)) + 1){ //gets random number for comp selection 
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
            console.log('default case reached, not correct behavior in computerPlay function.');
    }
    return result;
}

function playRound(playerSelection, computerSelection = computerPlay()){

    let player = playerSelection; //need to handle user input

    const playerWinTemplate = `You win! ${player} beats ${computerSelection}`;
    const playerLoseTemplate = `You lose! ${computerSelection} beats ${playerSelection}`;
    const sameChoiceTemplate = `You and the computer both chose ${playerSelection}!`;

    const scoreTemplate = `Human win total: ${playerWinTotal} 
    Computer win total: ${compWinTotal}
    Tie total: ${tieTotal}`;
        
        if(playerWinTotal == 5) {
            alert('Congratulations, you beat the computer.')

        }else if(compWinTotal == 5){
            alert('Computer beat you, too bad.')

        }else{
 
            switch (player) {
                case 'rock':
                    if(computerSelection == 'paper'){
                        ++compWinTotal;
                        //alert(playerLoseTemplate); 
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = playerLoseTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }else if(computerSelection == 'scissors'){
                        ++playerWinTotal;
                        //alert(playerWinTemplate);
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = playerWinTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }else{ //player and computer made same choice
                        ++tieTotal;
                        //alert(sameChoiceTemplate);
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = sameChoiceTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }
                case 'paper':
                    if(computerSelection == 'scissors'){
                        ++compWinTotal;
                        //alert(playerLoseTemplate);
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = playerLoseTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }else if(computerSelection == 'rock'){
                        ++playerWinTotal;
                        //alert(playerWinTemplate);
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = playerWinTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }else{ //player and computer made same choice
                        ++tieTotal;
                        //alert(sameChoiceTemplate);
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = sameChoiceTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }
                case 'scissors':
                    if(computerSelection == 'rock'){
                        ++compWinTotal;
                        //alert(playerLoseTemplate);
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = playerLoseTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }else if(computerSelection == 'paper'){
                        ++playerWinTotal;
                        //alert(playerWinTemplate);
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = playerWinTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }else{ //player and computer made same choice
                        ++tieTotal;
                        //alert(sameChoiceTemplate);
                        scoreboard.textContent = scoreTemplate;
                        resultsContent.textContent = sameChoiceTemplate;
                        resultsContainer.appendChild(resultsContent);
                        break;
                    }
                default:
                    console.log('switch in playRound is not working correcty');
                }

        }

}


/*
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
*/





    



