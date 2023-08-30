/* console.log("Hello, World!") */

let rps = ["Rock", "Paper", "Scissors"];
let getComputerChoice;
let computerSelection;
let playerSelection;
let playerScore=0;
let computerScore=0;

//console.log(game())


// functions below //

function game() { 
    console.log(playRound());
    console.log("You: "+playerScore);
    console.log("CPU: "+computerScore); 
    console.log(playRound());
    console.log("You: "+playerScore);
    console.log("CPU: "+computerScore); 
    console.log(playRound());
    console.log("You: "+playerScore);
    console.log("CPU: "+computerScore); 
    console.log(playRound());
    console.log("You: "+playerScore);
    console.log("CPU: "+computerScore); 
    console.log(playRound());
    console.log("You: "+playerScore);
    console.log("CPU: "+computerScore);
    console.log(checkWinner()) 
}

function fiveRounds() {
    
};

const rockBtn = document.querySelector('#rock');
rockBtn.addEventListener('click', function(e){
    playerSelection = "rock";
    console.log('player:'+playerSelection);
    choices();
    playRound();
});
 
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', function(e) {
    playerSelection = "paper";
    console.log('player:'+playerSelection);
    choices();
    playRound();
});
const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', function(e) {
    playerSelection = "scissors";
    console.log('player:'+playerSelection);
    choices();
    playRound();
});

const resultsDiv = document.createElement('h3');


const yourScoreDOM = document.createElement('p');
const yourScorePara = document.querySelector('#yourScorePara');
yourScoreDOM.textContent = playerScore;
yourScorePara.append(yourScoreDOM);

const compScoreDOM = document.createElement('p');
const compScorePara = document.querySelector('#compScorePara')
compScoreDOM.textContent = computerScore
compScorePara.append(compScoreDOM);


function choices() {
    getComputerChoice = Math.floor(Math.random() * rps.length)+1;
    if (getComputerChoice===1) {
        computerSelection="rock";
    } else if (getComputerChoice===2) {
        computerSelection="paper";
    } else {
        computerSelection="scissors";
    }
};
        
function playRound() { 
    if (computerSelection==="paper" && playerSelection==="rock") {
        ++computerScore;
        resultsDiv.textContent = "CPU chose paper. You lose. Paper covers rock.";
    } else if (computerSelection==="rock" && playerSelection==="scissors") {
        ++computerScore;
        resultsDiv.textContent = "CPU chose rock. You lose. Rock breaks scissors.";
    } else if (computerSelection==="scissors" && playerSelection==="paper") {
        ++computerScore;
        resultsDiv.textContent = "CPU chose scissors. You lose. Scissors cut paper.";
    } else if (computerSelection==="paper" && playerSelection==="scissors") {
        ++playerScore;
        resultsDiv.textContent = "CPU chose paper. You win! Scissors cut paper.";
    } else if (computerSelection==="rock" && playerSelection==="paper") {
        ++playerScore;
        resultsDiv.textContent = "CPU chose rock. You win! Paper covers rock.";
    } else if (computerSelection==="scissors" && playerSelection==="rock") {
        ++playerScore;
        resultsDiv.textContent = "CPU chose scissors. You win! Rock breaks scissors.";
    } else {
        resultsDiv.textContent = "You and the CPU chose the same. Tie!"
    }
    console.log("You:"+" "+playerScore)
    console.log("Computer:"+" "+computerScore)
    checkWinner();
};

/*let playerSelection= alert("Rock, Paper, or Scissors?");
if (computerSelection==="paper" && playerSelection==="rock") {
    ++computerScore;
    return ("CPU chose paper. You lose. Paper covers rock.");
} else if (computerSelection==="rock" && playerSelection==="scissors") {
    ++computerScore;
    return ("CPU chose rock. You lose. Rock breaks scissors.");
} else if (computerSelection==="scissors" && playerSelection==="paper") {
    ++computerScore;
    return ("CPU chose scissors. You lose. Scissors cut paper.");
} else if (computerSelection==="paper" && playerSelection==="scissors") {
    ++playerScore;
    return ("CPU chose paper. You win! Scissors cut paper.");
} else if (computerSelection==="rock" && playerSelection==="paper") {
    ++playerScore;
    return ("CPU chose rock. You win! Paper covers rock.");
} else if (computerSelection==="scissors" && playerSelection==="rock") {
    ++playerScore;
    return ("CPU chose scissors. You win! Rock breaks scissors.");
} else {
    return ("You and the CPU chose the same. Tie!")
}*/


function checkWinner() {
    if (computerScore===5) {
        console.log ("Game over! You lose!")
    } else if (playerScore===5) {
        console.log ("Game over! You win!")
    } else 
        return 
}

/* 
Player picks a choice (clicks a button)
Button signals to begin playRound

Computer tells whether they have won the round or not 
*/