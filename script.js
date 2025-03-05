const randomNum = Math.floor(Math.random() * 3);
// Generate a number between 0 and 2 to be used in an array

const randChoiceArray = ["rock", "paper", "scissors"];
// The array with elements that will represent the computer's choice

let compChoice = randChoiceArray[randomNum];
// Assignment of random computer element

let userChoice = prompt("Type rock, paper or scissors to play").toLowerCase();
// Assignment of user input

if (!randChoiceArray.includes(userChoice)) {
    console.log("Your input is invalid");
} else {
    console.log(userChoice + " vs " + compChoice);

    if (userChoice == compChoice) {
        console.log("Draw");
    } else {
        const outcomes = {
            rock: {paper: "You lose", scissors: "You win"},
            paper: {rock: "You win", scissors: "You lose"},
            scissors: {rock: "You lose", paper: "You win"}
        };

        console.log(outcomes[userChoice][compChoice]);
    }
};
// User input validation