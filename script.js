const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const resultsDiv = document.getElementById('resultsDiv');

const randChoiceArray = ["Rock", "Paper", "Scissors"];
// The array with elements that will represent the computer's choice

function getComputerChoice() {

const randomNum = Math.floor(Math.random() * 3);
// Generate a number between 0 and 2 to be used in an array

let computerChoice = randChoiceArray[randomNum];
// Assignment of random computer element

return computerChoice;

};

function getUserChoice(element) {

userChoice = element.textContent;

return userChoice;
};

let userScore = 0;
let computerScore = 0;
// Variables tracking the scores of the user and computer

function playRound(userChoice, computerChoice) {

    resultsDiv.innerHTML = "<div>" + userChoice + " vs " + computerChoice + "</div>";
    
    if (userChoice == computerChoice) {

        resultsDiv.style.display = "block";
        resultsDiv.innerHTML += "<div>" + "Draw" + "</div>";
    } else {
        const outcomes = {
            Rock: {Paper: "You lose!", Scissors: "You win!"},
            Paper: {Rock: "You win!", Scissors: "You lose!"},
            Scissors: {Rock: "You lose!", Paper: "You win!"}
        };

        if (outcomes[userChoice][computerChoice].includes("win")) {
            
            resultsDiv.style.display = "block";
            resultsDiv.innerHTML += "<div>" + outcomes[userChoice][computerChoice] + " " + userChoice + " beats " + computerChoice + "</div>";
            userScore += 1;

            if (userScore == 5) {
                resultsDiv.innerHTML += "<div>" + "You win! " + userScore + " - " + computerScore + "</div>";
                userScore = 0;
                computerScore = 0;
            } 

        } else {

            resultsDiv.style.display = "block";
            resultsDiv.innerHTML += "<div>" + outcomes[userChoice][computerChoice] + " " + computerChoice + " beats " + userChoice + "</div>";
            computerScore += 1;

            if (computerScore == 5) {
                resultsDiv.innerHTML += "<div>" + "You lose! " + computerScore + " - " + userScore + "</div>";
                userScore = 0;
                computerScore = 0;
            }
        }
    }
};

