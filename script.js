function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Your choice: ", "Rock").toLowerCase();
}

function playRound() {
    console.log("Playing round...");
    
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) 
        return;
    else if (humanChoice === "rock") {
        computerChoice === "paper" ? computerScore++ : humanScore++;
    } else if (humanChoice === "paper") {
        computerChoice === "scissors" ? computerScore++ : humanScore++;
    } else if (humanChoice === "scissors") {
        computerChoice === "rock" ? computerScore++ : humanScore++;
    }
}

let computerScore = 0;
let humanScore = 0;

playRound()
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
