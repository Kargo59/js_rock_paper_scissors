function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    // choose a random element from the array
    let chosen = Math.floor(Math.random() * options.length);
    chosen = options[chosen];
    // console.log(chosen);
    return chosen
};



let score_player = 0;
let score_computer = 0;

function game(){
    for (let i = 0; i <5; i++) {
        const computerSelection = computerPlay();

        let playerSelection = prompt('Rock, paper, scissors?').toLowerCase();

        playRound(playerSelection, computerSelection);

    }

    if (score_player > score_computer) {
        alert('You win the game!');
    } else if (score_computer > score_player) {
        alert ('You lose the game!');
    }else if (score_player === score_computer) {
        alert('Nobody wins the game!');
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            alert('It\'s a draw!');
        }
        else if (computerSelection === 'paper') {
            alert('You win!');
            score_player += 1
        }
        else if (computerSelection === 'scissors') {
            alert('You lose!');
            score_computer += 1;
        }  
    }

    else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            alert('It\'s a draw!');
        }
        else if (computerSelection === 'rock') {
            alert('You win!');
            score_player += 1
        }
        else if (computerSelection === 'scissors') {
            alert('You lose!');
            score_computer += 1;
        }  
    }
    else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            alert('It\'s a draw!');
        }
        else if (computerSelection === 'paper') {
            alert('You win!');
            score_player += 1
        }
        else if (computerSelection === 'rock') {
            alert('You lose!');
            score_computer += 1;
        }  
    }
    
    console.log(playerSelection, computerSelection);
    console.log(score_player, score_computer)
}

//initializes the game
game()