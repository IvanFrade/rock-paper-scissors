function init() {

}

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
    roundResult.textContent = `Your choice: ${humanChoice}\nComputer choice: ${computerChoice}\n`;
    if (humanChoice === computerChoice) {
        roundResult.textContent += "\nIt's a draw!"
        return;
    }
    else if (humanChoice === "rock")
        computerChoice === "paper" ? computerScore++ : humanScore++;        
    else if (humanChoice === "paper")
        computerChoice === "scissors" ? computerScore++ : humanScore++;
    else if (humanChoice === "scissors")
        computerChoice === "rock" ? computerScore++ : humanScore++;    

    humanScoreText.textContent = `Your score: ${humanScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;
    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        let gameOverMessage = document.createElement("h3");
        gameOverMessage.textContent = `Game over! You ${humanScore > computerScore ? "win" : "lose"}!`;
        document.querySelector("body").appendChild(gameOverMessage);
    }
}

let computerScore = 0;
let humanScore = 0;

const resultsContainer = document.querySelector("#results");
const roundResult = document.querySelector("#roundResult")

const humanScoreText = document.createElement("p");
humanScoreText.textContent = `Your score: ${humanScore}`;
const computerScoreText = document.createElement("p");
computerScoreText.textContent = `Computer score: ${computerScore}`;

resultsContainer.appendChild(humanScoreText);
resultsContainer.appendChild(computerScoreText);

const buttons = document.querySelectorAll("button");
const buttonsArray = [...buttons];
for (const btn of buttonsArray)
    btn.addEventListener("click", () => { 
        playRound(btn.textContent.toLowerCase(), getComputerChoice());
    });