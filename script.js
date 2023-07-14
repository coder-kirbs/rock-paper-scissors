/* console.log("Hello, World!") */

let playerSelection;
let computerSelection;
let rps = ["Rock", "Paper", "Scissors"];

let getComputerChoice = Math.floor(Math.random() * rps.length)+1;
console.log(getComputerChoice)