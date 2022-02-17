//QUOTE BOX
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


