//TEST JS NOT FOR PROJECT

const inputGuessNumber = document.querySelector("#input-guess-number");
const outputGuessNumber = document.querySelector("#hidden-guess-number");
const playerContainer = document.querySelector(".player-container");
const incorrectEnterNumber = document.querySelector("#incorrect-number");
const gameCondition = document.querySelector(".game-condition");
const gameConditionMessage = document.querySelector(".game-condition").children[0];
const playerOne = document.querySelector("#p-1");
const playerTwo = document.querySelector("#p-2");

let playerOneTurn;
let playerTwoTurn;
let playerOneValue;
let playerTwoValue;


const randomNumber = () => {
    return Math.floor(Math.random() * 10);
}

const initialMessage = () => {
    gameConditionMessage.removeAttribute("hidden");
    gameConditionMessage.textContent = "Please wait for the game to start";
}


const initialTurn = () => {
    playerOneTurn = true;
    playerTwoTurn = false;
    playerTwo.setAttribute("disabled", "disabled");
    outputGuessNumber.textContent = "?";
    gameCondition.setAttribute("hidden", "hidden");
    playerOneValue = -1;
    playerTwoValue = -1;
}

initialMessage();
setTimeout(initialTurn, 1000);



const playerConditions = (playerOneValue, playerTwoValue) => {
    let guessValue = randomNumber();
    outputGuessNumber.textContent = guessValue;
    gameCondition.removeAttribute("hidden");

    if(guessValue === playerOneValue && guessValue === playerTwoValue) {
        gameConditionMessage.textContent = "Both of the players won the game";
    }
    else if(guessValue === playerOneValue) {
        gameConditionMessage.textContent = "Player One won the game";
    } else if(guessValue === playerTwoValue) {
        gameConditionMessage.textContent = "Player Two won the game";
    } else {
        gameConditionMessage.textContent = "Both of the players entered the incorrect guess the number";
    }

    setTimeout(initialMessage, 1000);
    setTimeout(initialTurn, 2000);
};


const inputGuesser = (e) => {
    console.log(e.target.value);

    if(e.target.value >= 0 && e.target.value <= 9) {
        incorrectEnterNumber.setAttribute("hidden", "hidden");

        if(playerOneTurn) {
            playerTwo.removeAttribute("disabled");
            playerOne.setAttribute("disabled", "disabled");
            playerOneTurn = false;
            playerTwoTurn = true;
            playerOneValue = parseInt(e.target.value);
            e.target.value = "";

        } else if(playerTwoTurn) {
            playerOne.removeAttribute("disabled");
            playerTwo.setAttribute("disabled", "disabled");
            playerOneTurn = true;
            playerTwoTurn = false;
            playerTwoValue = parseInt(e.target.value);

            playerConditions(playerOneValue, playerTwoValue);


            e.target.value = "";
        }


    } else {
        incorrectEnterNumber.removeAttribute("hidden");
    }
};


inputGuessNumber.addEventListener("keyup", inputGuesser);







"keyup"