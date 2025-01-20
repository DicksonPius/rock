let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

const randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber == 1){
console.log("Rock");
}
else if (randomNumber == 2){
    console.log("Paper");
}
else if (randomNumber == 3){
    console.log("Scissors");
}
}
//console.log(getComputerChoice());

function getHumanChoice(){
    let intputs = prompt("Enter preferred option: ", "Rock | Paper | scissors");
    return getComputerChoice()
}console.log(getHumanChoice());