function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    if (choice === 0) return "Rock";
    else if (choice === 1) return "Paper";
    else return "Scissors";
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());

