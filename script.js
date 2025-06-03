// Helper function to get a random int in a 1-max range
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Computer choice is randomized 
function getComputerChoice() {
    let choice = getRandomInt(3);

    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Your choice: ", "Rock").toLowerCase();
    // TOOD: error handling
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        return;
    else if (humanChoice === "rock")
        computerChoice === "paper" ? computerScore++ : humanScore++;        
    else if (humanChoice === "paper")
        computerChoice === "scissors" ? computerScore++ : humanScore++;
    else if (humanChoice === "scissors")
        computerChoice === "rock" ? computerScore++ : humanScore++;
}

// For every round, gets computer and human choices, plays round, updates score
function playGame() {
    let maxRounds = 5;

    for (i = 1; i <= maxRounds; i++) {
        console.log(`Playing round ${i}...`);

        let humanChoice = getHumanChoice();
        console.log(`Human choice: ${humanChoice}`);

        let computerChoice = getComputerChoice();
        console.log(`Computer choice: ${computerChoice}`);

        playRound(humanChoice, computerChoice);

        console.log(`Current score:
        Human: ${humanScore}
        Computer: ${computerScore}`);
    }
}

let computerScore = 0;
let humanScore = 0;

playGame();

if (humanScore > computerScore)
    console.log("Game over. You win!");
else if (humanScore < computerScore)
    console.log("Game over. You lose!");
else  
    console.log("Game over. It's a draw...");