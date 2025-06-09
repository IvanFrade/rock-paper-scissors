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
    console.log(`Human choice: ${humanChoice} - Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice)
        return;
    else if (humanChoice === "rock")
        computerChoice === "paper" ? computerScore++ : humanScore++;        
    else if (humanChoice === "paper")
        computerChoice === "scissors" ? computerScore++ : humanScore++;
    else if (humanChoice === "scissors")
        computerChoice === "rock" ? computerScore++ : humanScore++;    
}

let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll("button");
const buttonsArray = [...buttons];
for (const btn of buttonsArray)
    btn.addEventListener("click", () => { 
        playRound(btn.textContent.toLowerCase(), getComputerChoice());
    });

if (humanScore > computerScore)
    console.log("Game over. You win!");
else if (humanScore < computerScore)
    console.log("Game over. You lose!");
else  
    console.log("Game over. It's a draw...");