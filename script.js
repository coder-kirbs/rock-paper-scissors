/* console.log("Hello, World!") */

let rps = ["Rock", "Paper", "Scissors"];
let getComputerChoice = Math.floor(Math.random() * rps.length)+1;
let playerSelection= prompt("Rock, Paper, or Scissors?")
let computerSelection;

    if (getComputerChoice===1) {
        computerSelection="rock";
        console.log("rock")
    } else if (getComputerChoice===2) {
        computerSelection="paper";
        console.log("paper")
    } else {
        computerSelection="scissors";
        console.log("scissors")
    }
    
    function playRound() {
        if (computerSelection==="paper" && playerSelection==="rock") {
            return ("You lose");
        } else if (computerSelection==="rock" && playerSelection==="scissors") {
            return ("You lose");
        } else if (computerSelection==="scissors" && playerSelection==="paper") {
            return ("You lose");
        } else if (computerSelection==="paper" && playerSelection==="scissors") {
            return ("You win");
        } else if (computerSelection==="rock" && playerSelection==="paper") {
            return ("You win");
        } else if (computerSelection==="scissors" && playerSelection==="rock") {
            return ("You win");
        } else {
            return ("Tie")
        }}
    console.log(playRound())






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