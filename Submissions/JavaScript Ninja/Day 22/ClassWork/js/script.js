//1) clear idea about the project(granual details)
//2) Visualize the flow


//Thought process
//focus is main key


//accessing lucky number from input
(function(){
    //selector
    const formElm = document.querySelector("form");
    const userInputElm = document.getElementById("luck-input");
    const luckyNumberElm = document.querySelector(".lucky-number span");
    const p1BtnElm = document.querySelector(".p1Btn");
    const p2BtnElm = document.querySelector(".p2Btn");
    const p1InputElm = document.querySelector(".p1");
    const p2InputElm = document.querySelector(".p2");
    const winnerElm = document.querySelector(".winner");
    const resetBtnElm = document.querySelector("#resetBtn");


    let luckyNumber;
    let p1Value;
    let p2Value;
    let p1Turn;
    let p2Turn;
    let gameOver;


    function randNum(num = 0) {
        //0-0.99(not including 1)
        return Math.floor(Math.random() * num) + 1;
    }




    function initialState() {
        luckyNumber = randNum(10);
        p1Value = 0;
        p2Value = 0;
        p1Turn = true;
        p2Turn = true;
        gameOver = false;
    }

    function initialView() {
        //showing into DOM
        luckyNumberElm.textContent = luckyNumber;
        p1InputElm.textContent = 0;
        p2InputElm.textContent = 0;
        p1BtnElm.removeAttribute("disabled");
        p2BtnElm.removeAttribute("disabled");
        winnerElm.textContent = '';
    }

    initialState();
    initialView();


    let winnerState = (player) => {
        gameOver = true;
        //p1 is winner
        winnerElm.textContent = `${player} is winner`;
        //disabling p1Btn player
        p1BtnElm.setAttribute('disabled', 'disabled');
        //disabling p2Btn player
        p2BtnElm.setAttribute('disabled', 'disabled');
    }



    formElm.addEventListener("submit", evt => {
        evt.preventDefault();
        //receiving the input
        luckyNumber = parseInt(userInputElm.value);
        //insert into luckyNumber Element
        luckyNumberElm.textContent = luckyNumber;
        //reset the input
        userInputElm.value = "";
        //console.log(evt);
    });


    p1BtnElm.addEventListener("click", evt => {
        if(p1Turn && luckyNumber !== p1Value && luckyNumber !== p2Value) {
            //Increment the p1 value
            //p1Value++;
            p1Value += randNum();
            //inserting into DOM
            p1InputElm.textContent = p1Value;
            //switch off p1Turn and switch on p2Turn
            p1Turn = false;
            p2Turn = true;
            //show visual market
            //!p1Turn && p1BtnElm.setAttribute('disabled', 'disabled');
            p1BtnElm.setAttribute('disabled', 'disabled');
            p2BtnElm.removeAttribute("disabled");
            console.log(p1Value);
        }

        if(p1Value === luckyNumber) {
            winnerState("p1");
        }
    });


    p2BtnElm.addEventListener("click", evt => {
        if(p2Turn && luckyNumber !== p1Value && luckyNumber !== p2Value) {
            //Increment the p1 value
            //p2Value++;
            p2Value += randNum();
            //inserting into DOM
            p2InputElm.textContent = p2Value;
            //switch off p2Turn and switch on p1Turn
            p2Turn = false;
            p1Turn = true;
            //show visual market
            p2BtnElm.setAttribute('disabled', 'disabled');
            p1BtnElm.removeAttribute("disabled");
            console.log(p2Value);
        }

        if(p2Value === luckyNumber) {
            winnerState("p2");
        }
    });


    resetBtnElm.addEventListener("click", evt => {
        initialState();
        initialView();
    });
}());

