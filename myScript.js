function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    // choose a random element from the array
    let chosen = Math.floor(Math.random() * options.length);
    computerSelection = options[chosen];
    // console.log(chosen);
    return computerSelection;
};



let score_player = 0;
let score_computer = 0;

// function game(){
//     for (let i = 0; i <5; i++) {
//         const computerSelection = computerPlay();

//         let playerSelection = prompt('Rock, paper, scissors?').toLowerCase();

//         playRound(playerSelection, computerSelection);

//     }

//     if (score_player > score_computer) {
//         alert('You win the game!');
//     } else if (score_computer > score_player) {
//         alert ('You lose the game!');
//     }else if (score_player === score_computer) {
//         alert('Nobody wins the game!');
//     }
// }

const button_rock = document.querySelector('#rock');
const button_paper = document.querySelector('#paper');
const button_scissors = document.querySelector('#scissors');


function displayCurrentScore () {
    //displays the current results, first line
    const score_paragraph = document.getElementById('current_score');
    const text = document.createTextNode('Player: ' + score_player + '   Computer: ' + score_computer)
    score_paragraph.textContent = ' ';
    score_paragraph.appendChild(text);

    //displays the current round, second line
    const round_paragraph = document.querySelector('#current_round');
    text_round_number = document.createTextNode(`Current round: ${number_of_rounds}`);
    round_paragraph.textContent = ' ';
    round_paragraph.appendChild(text_round_number);
}


button_rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    playRound(playerSelection);
    displayCurrentScore();
});

button_paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    playRound(playerSelection);
    displayCurrentScore();    
});

button_scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    playRound(playerSelection);
    displayCurrentScore();    
});

// the game will stop after five rounds. function playRound() modifies the variable number_of_rounds
let number_of_rounds = 0

function playRound(playerSelection) {
    computerPlay();
    console.log('The computer chose ' + computerSelection)

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            alert('It\'s a draw!');
        }
        else if (computerSelection === 'paper') {
            alert('You lose!');
            score_computer += 1
        }
        else if (computerSelection === 'scissors') {
            alert('You win!');
            score_player += 1;
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

    number_of_rounds += 1

    //determines the end result after five games
    if (number_of_rounds === 5) {
        if (score_player > score_computer) {
        alert('You win the game!');
    } else if (score_computer > score_player) {
        alert ('You lose the game!');
    }else if (score_player === score_computer) {
        alert('Nobody wins the game!');
        }
    }
}