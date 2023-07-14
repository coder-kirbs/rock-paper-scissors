/* console.log("Hello, World!") */

let rps = ["Rock", "Paper", "Scissors"];
let getComputerChoice = Math.floor(Math.random() * rps.length)+1;
if (getComputerChoice===1) {
    console.log("rock")
} else if (getComputerChoice===2) {
    console.log("paper")
}
  else {
    console.log("scissors")
}

let playerSelection= "rock";
let computerSelection= getComputerChoice;
