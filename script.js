/* console.log("Hello, World!") */

let rps = ["Rock", "Paper", "Scissors"];
let getComputerChoice = Math.floor(Math.random() * rps.length)+1;

let computerSelection;
let playerScore=0;
let computerScore=0;

    if (getComputerChoice===1) {
        computerSelection="rock";
    } else if (getComputerChoice===2) {
        computerSelection="paper";
    } else {
        computerSelection="scissors";
    }
    





function playRound() {
    let playerSelection= prompt("Rock, Paper, or Scissors?");
    if (computerSelection==="paper" && playerSelection.toLocaleLowerCase()==="rock") {
        ++computerScore;
        return ("CPU chose paper. You lose. Paper covers rock.");
    } else if (computerSelection==="rock" && playerSelection.toLocaleLowerCase()==="scissors") {
        ++computerScore;
        return ("CPU chose rock. You lose. Rock breaks scissors.");
    } else if (computerSelection==="scissors" && playerSelection.toLocaleLowerCase()==="paper") {
        ++computerScore;
        return ("CPU chose scissors. You lose. Scissors cut paper.");
    } else if (computerSelection==="paper" && playerSelection.toLocaleLowerCase()==="scissors") {
        ++playerScore;
        return ("CPU chose paper. You win! Scissors cut paper.");
    } else if (computerSelection==="rock" && playerSelection.toLocaleLowerCase()==="paper") {
        ++playerScore;
        return ("CPU chose rock. You win! Paper covers rock.");
    } else if (computerSelection==="scissors" && playerSelection.toLocaleLowerCase()==="rock") {
        ++playerScore;
        return ("CPU chose scissors. You win! Rock breaks scissors.");
    } else {
        return ("You and the CPU chose the same. Tie!")
    }
}
console.log(playRound());
console.log("You: "+playerScore);
console.log("CPU: "+computerScore);

function game() {
    playRound();
}




/* function playRound() {
    if (computerSelection==="rock" && playerSelection==="rock") {
       return ("Tie");
    } else if (computerSelection==="paper" && playerSelection==="rock") {
        return ("You lose");
    } else {
        return ("You win");
    }}
console.log(playRound()) */

/* function game() {
    if (computerSelection==="rock" && playerSelection==="rock") {
        return ("Tie");
     } else if (computerSelection==="paper" && playerSelection==="rock") {
         return ("You lose");
     } else {
         return ("You win");
     }
} */