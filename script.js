/* console.log("Hello, World!") */

let rps = ["Rock", "Paper", "Scissors"];
let getComputerChoice = Math.floor(Math.random() * rps.length)+1;
let playerSelection= "rock";
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
    if (computerSelection==="rock" && playerSelection==="rock") {
       return ("Tie");
    } else if (computerSelection==="paper" && playerSelection==="rock") {
        return ("You lose");
    } else {
        return ("You win");
    }}
console.log(playRound())