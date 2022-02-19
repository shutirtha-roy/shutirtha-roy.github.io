//Quote Box
const colorBoxes = document.querySelector(".all-color-boxes");
const textBox = document.getElementById('text-content');
const quoteTextContent = document.querySelector(".quote-text-content");
const boxContentText = document.querySelector("#text-content");



const greenBox = document.getElementById("green");
const lightOrangeBox = document.getElementById("light-orange");
const lightBlue = document.getElementById("light-blue");
const darkOrange = document.getElementById("dark-orange");

const quotes = ["True wisdom comes not from knowledge, but from understanding.",
                "Life is too short for long term grudges.",
                "Life is a first impression. You get one shot at it. Make it everlasting.",
                "After all, life is too short to be anything but happy.",
                "Be patient and understanding. Life is too short to be vengeful or malicious.",
                "Enjoy the little things in life, for one day you may look back and realize they were the big things.",
                "Life is an opportunity, benefit from it. Life is beauty, admire it. Life is a dream, realize it.",
                "Every life is precious to God. God created every one of us. He gave us a soul, and that soul will live as long as God lives.",
                "Enjoy every moment you have. Because in life, there are no rewinds, only flashbacks."
];

const randomNumber = Math.floor(Math.random() * 9);
boxContentText.textContent = quotes[randomNumber];



let boxContentChanger = (textBox, backgroundColor, border) => {
    textBox.style.backgroundColor = backgroundColor;
    textBox.style.border = border;
};

let containsGreen = () => {
    boxContentChanger(textBox, "rgb(37, 168, 37)", "0.7vh solid green");
};

let containsLightOrange = () => {
    boxContentChanger(textBox, "rgb(251, 198, 100)", "0.7vh solid orange");
};

let containsLightBlue = () => {
    boxContentChanger(textBox, "rgb(104, 172, 199)", "0.7vh solid blue");
};

let containsDarkOrange = () => {
    boxContentChanger(textBox, "rgb(202, 113, 12)", "0.7vh solid red");
};

let containsId = (targetId) => {
    if(targetId === "green") {
        containsGreen();
    } 
    else if(targetId === "light-orange"){
        containsLightOrange();
    }
    else if(targetId === "light-blue"){
        containsLightBlue();
    }
    else if(targetId === "dark-orange"){
        containsDarkOrange();
    }
}

colorBoxes.addEventListener("click", (e) => {
    containsId(e.target.id)
});





//Hero Converter
const converterSelecter = document.getElementById("convert-value");
const submitGoButton = document.getElementById("go-button");
const inputValue = document.querySelector(".input-container");
const resultValue = document.querySelector(".convert-result-box");
let output = 0;


let convertFromLbToKg = (value) => {
    return `${(value / 2.2046).toPrecision(4)} kilograms`;
};

let convertFromKgToLb = (value) => {
    return `${(value * 2.2046).toPrecision(4)} pounds`;
};


submitGoButton.addEventListener("click", (e) => {
    if(inputValue.value == parseInt(inputValue.value)){
        console.log(e.target);
        console.log(converterSelecter.value);
        console.log(inputValue.value);

        if(converterSelecter.value === "lbToKg") {
            output = convertFromLbToKg(parseInt(inputValue.value));
        }
        else if(converterSelecter.value === "KgToLb") {
            output = convertFromKgToLb(parseInt(inputValue.value));
        }

        resultValue.textContent = output;
    } 
    else {
        resultValue.textContent = "Result";
    }   
});




//Max, Min, Sum, Average and Reverse Order
const inputNumber = document.getElementById("input-number");
const maxVariable = document.getElementById("max");
const minVariable = document.getElementById("min");
const sumVariable = document.getElementById("sum");
const averageVariable = document.getElementById("average");
const reverseOrderVariable = document.getElementById("reverse-order");


let stringSplitter = (numbers) => {
    const getValue = numbers.includes(",") ? numbers.split(",") : numbers.split(" ");

    for(let i = 0; i < getValue.length; i++)
    {
        getValue[i] = parseInt(getValue[i]);
    }

    return getValue;
}


let getMaxValue = (numberValue) => {
    return Math.max(...numberValue);
};

let getMinValue = (numberValue) => {
    return Math.min(...numberValue);
};

let getSummationValue = (numberValue) => {
    return numberValue.reduce((x, y) => x + y, 0);
};

let getAverageValue = (numberValue) => {
    return getSummationValue(numberValue) / numberValue.length;
}

let getReverseValue = (numberValue) => {
    return numberValue.reverse();
}

inputNumber.addEventListener("keyup", (e) => {
    const numberValue = stringSplitter(e.target.value);
    if(!(e.target.value.endsWith(",") || e.target.value.endsWith(" ")) || e.target.value == "") {
        maxVariable.value = getMaxValue(numberValue);
        minVariable.value = getMinValue(numberValue);
        sumVariable.value = getSummationValue(numberValue);
        averageVariable.value = getAverageValue(numberValue);
        reverseOrderVariable.value = getReverseValue(numberValue);
    }
    if(e.target.value == "") {
        maxVariable.value = "";
        minVariable.value = "";
        sumVariable.value = "";
        averageVariable.value = "";
        reverseOrderVariable.value = "";
    }
});



//Magic
