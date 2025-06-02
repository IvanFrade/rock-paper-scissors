function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    if (choice === 0) return "Rock";
    else if (choice === 1) return "Paper";
    else return "Scissors";
}

function getHumanChoice() {
    return prompt("Your choice: ", "Rock");
}

function playRound() {
    console.log("Playing round...");
    

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) 
        return;
    else if (humanChoice === "Rock") {
        computerChoice === "Paper" ? computerScore++ : humanScore++;
    } else if (humanChoice === "Paper") {
        computerChoice === "Scissors" ? computerScore++ : humanScore++;
    } else if (humanChoice === "Scissors") {
        computerChoice === "Rock" ? computerScore++ : humanScore++;
    }
}

let computerScore = 0;
let humanScore = 0;

playRound()
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
