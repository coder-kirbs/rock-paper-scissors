/* console.log("Hello, World!") */

let rps = ["Rock", "Paper", "Scissors"];
let getComputerChoice = Math.floor(Math.random() * rps.length)+1;

let computerSelection;
let playerScore=0;
let computerScore=0;

    if (getComputerChoice===1) {
        computerSelection="rock";
        console.log("CPU chose rock.")
    } else if (getComputerChoice===2) {
        computerSelection="paper";
        console.log("CPU chose paper.")
    } else {
        computerSelection="scissors";
        console.log("CPU chose scissors.")
    }
    





function playRound() {
    let playerSelection= prompt("Rock, Paper, or Scissors?");
    if (computerSelection==="paper" && playerSelection.toLocaleLowerCase()==="rock") {
        ++computerScore;
        return ("You lose. Paper covers rock.");
    } else if (computerSelection==="rock" && playerSelection.toLocaleLowerCase()==="scissors") {
        ++computerScore;
        return ("You lose. Rock breaks scissors.");
    } else if (computerSelection==="scissors" && playerSelection.toLocaleLowerCase()==="paper") {
        ++computerScore;
        return ("You lose. Scissors cut paper.");
    } else if (computerSelection==="paper" && playerSelection.toLocaleLowerCase()==="scissors") {
        ++playerScore;
        return ("You win! Scissors cut paper.");
    } else if (computerSelection==="rock" && playerSelection.toLocaleLowerCase()==="paper") {
        ++playerScore;
        return ("You win! Paper covers rock.");
    } else if (computerSelection==="scissors" && playerSelection.toLocaleLowerCase()==="rock") {
        ++playerScore;
        return ("You win! Rock breaks scissors.");
    } else {
        return ("Tie!")
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