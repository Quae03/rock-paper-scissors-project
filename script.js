const randChoiceArray = ["rock", "paper", "scissors"];
// The array with elements that will represent the computer's choice

function getComputerChoice() {

const randomNum = Math.floor(Math.random() * 3);
// Generate a number between 0 and 2 to be used in an array

let computerChoice = randChoiceArray[randomNum];
// Assignment of random computer element

return computerChoice;

};

function getUserChoice() {

let userChoice = prompt("Type rock, paper or scissors to play").toLowerCase();
// Assignment of user input

return userChoice;

};

function playRound(userChoice, computerChoice) {

    if (!randChoiceArray.includes(userChoice)) {
        console.log("Your input is invalid");
    } else {
        console.log(userChoice + " vs " + computerChoice);
    
        if (userChoice == computerChoice) {
            console.log("Draw");
        } else {
            const outcomes = {
                rock: {paper: "You lose", scissors: "You win"},
                paper: {rock: "You win", scissors: "You lose"},
                scissors: {rock: "You lose", paper: "You win"}
            };
    
            if (outcomes[userChoice][computerChoice].includes("win")) {
                console.log(outcomes[userChoice][computerChoice] + " " + userChoice + " beats " + computerChoice);
                userScore += 1;
            } else {
                console.log(outcomes[userChoice][computerChoice] + " " + computerChoice + " beats " + userChoice);
                computerScore += 1;
            }
        }
    };
}

let userScore = 0;
let computerScore = 0;
// Variables to track the scores to determine a winner

function playGame() {

    for (let i=0; i<5; i++) {
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();
        playRound(userChoice, computerChoice);
        console.log("User: " + userScore + "\n Computer: " + computerScore);
    }

    if (userScore == computerScore) {
        console.log("Its a draw!" + "\n" + userScore + " - " + computerScore);
    } else {
        if (userScore > computerScore) {
            console.log("You win! " + "\n" + userScore + " - " + computerScore);
        } else {
            console.log("You lose! " + "\n" + computerScore + " - " + userScore);
        }
    }
}

playGame()