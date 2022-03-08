let formElement = document.querySelector(".form-input");
let userInputElement = document.querySelector("#luck-input");
let luckyNumberElement = document.querySelector(".lucky-number-value");
let p1BtnElement = document.querySelector(".player-buttons").children[0];
let p2BtnElement = document.querySelector(".player-buttons").children[1];
let p1InputElement = document.querySelector(".p1");
let p2InputElement = document.querySelector(".p2");
let winnerElement = document.querySelector(".winner");
let resetBtnElement = document.getElementById("resetBtn");


let luckyNumber, p1Value, p2Value, p1Turn, p2Turn, gameOver;

let random = () =>  Math.random();

let randNum = (num = 0) => Math.floor(random() * num) + 1;

let removeDisabled = () => {
    p1BtnElement.removeAttribute("disabled");
    p2BtnElement.removeAttribute("disabled");
}

let initialize = () =>  {
    initialState();
    initialView();
}

let initialState = () => {
    luckyNumber = randNum(10);
    p1Value = 0;
    p2Value = 0;
    p1Turn = true;
    p2Turn = true;
    gameOver = false;
}

let initialView = () => {
    luckyNumberElement.textContent = luckyNumber;
    p1InputElement.textContent = 0;
    p2InputElement.textContent = 0;
    removeDisabled();
    winnerElement.textContent = '';
}

initialize();


let disablePlayers = () => {
    p1BtnElement.setAttribute('disabled', 'disabled');
    p2BtnElement.setAttribute('disabled', 'disabled');
}


let winnerState = (player) => {
    gameOver = true;
    winnerElement.textContent = `${player} is winner`;
    disablePlayers();
}

let submitState = evt => {
    evt.preventDefault();
    luckyNumber = parseInt(userInputElement.value);
    luckyNumberElement.textContent = luckyNumber;
    userInputElement.value = "";
}

let playerSetAndRemove = (playerCondition, playerOne, playerTwo) => {
    if(playerCondition) {
        playerOne.setAttribute('disabled', 'disabled');
        playerTwo.removeAttribute("disabled");
    } else {
        playerTwo.setAttribute('disabled', 'disabled');
        playerOne.removeAttribute("disabled");
    }
}

let winnerCheckPlayerOne = (p1Value, luckyNumber) => {
    return p1Value === luckyNumber ? winnerState("p1") : false;
};

let winnerCheckPlayerTwo = (p2Value, luckyNumber) => {
    return p2Value === luckyNumber ? winnerState("p2") : false;
};

let togglePlayerCondition = (player) => {
    if(player) {
        p1Turn = false;
        p2Turn = true;
    } else {
        p2Turn = false;
        p1Turn = true;
    }
}

let playerState = (player) => {
    if(player) {
        if(p1Turn && luckyNumber !== p1Value && luckyNumber !== p2Value) {
            p1Value += randNum();
            p1InputElement.textContent = p1Value;
            togglePlayerCondition(true);
            playerSetAndRemove(true, p1BtnElement, p2BtnElement);
        }
    } else {
        if(p2Turn && luckyNumber !== p1Value && luckyNumber !== p2Value) {
            p2Value += randNum();
            p2InputElement.textContent = p2Value;
            togglePlayerCondition(false);
            playerSetAndRemove(false, p1BtnElement, p2BtnElement);
        }
    }
}

let playerOneState = evt => {
    playerState(true);
    winnerCheckPlayerOne(p1Value, luckyNumber);
}

let playerTwoState = evt => {
    playerState(false);
    winnerCheckPlayerTwo(p2Value, luckyNumber);
}

let resetState = evt => initialize();


formElement.addEventListener("submit", submitState);
p1BtnElement.addEventListener("click", playerOneState);
p2BtnElement.addEventListener("click", playerTwoState);
resetBtnElement.addEventListener("click", resetState);