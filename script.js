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

function playRound(n) {
    console.log(`Playing round ${n}...`);
    
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    console.log(`Human choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return;
    }
    else if (humanChoice === "rock") {
        computerChoice === "paper" ? computerScore++ : humanScore++;        
    } else if (humanChoice === "paper") {
        computerChoice === "scissors" ? computerScore++ : humanScore++;
    } else if (humanChoice === "scissors") {
        computerChoice === "rock" ? computerScore++ : humanScore++;
    }

    console.log(`Current score:
        Human: ${humanScore}
        Computer: ${computerScore}`);
}

function playGame() {
    let maxRounds = 5;

    for (i = 1; i <= maxRounds; i++) {
        playRound(i);
    }
}

let computerScore = 0;
let humanScore = 0;

playGame();