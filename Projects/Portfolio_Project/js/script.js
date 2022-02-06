//Header Section
const wholeHeading = document.querySelector("header");
const headingChildren = document.querySelector(".text-section").children
const firstChild = Array.from(headingChildren)[0];
const lastChild = Array.from(headingChildren).at(-1);
const secondLastChild = Array.from(headingChildren).at(-2);
let stringAdder = "";


const headerName = async () => {
    const headingValue = "I'm Shutirtha Roy";

    for (let character of headingValue) {
        stringAdder += character;
        await sleep(100);
        firstChild.innerHTML = stringAdder;
    } 
    firstChild.innerHTML = headingValue;
}


const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
};


const headerFormatChanger = () => {
    firstChild.innerHTML = firstChild.innerHTML.italics();
    if(screen.width >= 600) {
        firstChild.style.color = "#6b6d4e";
    }
    
};


const characterAdder = () => {
    firstChild.innerHTML = stringAdder;
    console.log(firstChild.innerHTML);
}


const headingQuote = () => {
    secondLastChild.innerHTML = "The way to get started is to quit talking and begin doing.";
    
};


const headingAuthor = () => {
    lastChild.innerHTML = "-Walt Disney";
};


const QuoteCreator = () => {
    setTimeout(headerFormatChanger, 2000);
    setTimeout(headingQuote, 2500);
    setTimeout(headingAuthor, 3000);
};

headerName();
QuoteCreator();




//Mobile Background View
if(screen.width < 600) {
    wholeHeading.style.backgroundImage = "linear-gradient(to right top, #242f41, #33475e, #40607c, #4d7b9a, #5897b9)";
}




//Interest Section
const interestContainer = document.querySelector(".interest-content");
const modal = document.getElementById("Modal");
const closeTag = document.getElementsByClassName("close")[0];
const addImage = document.querySelector(".add-image");
let newElement = "";
let newClassName = "";


interestContainer.addEventListener("click", (e) => {
    if(e.target.className.includes("box") == true){
        modal.style.display = "block";
        newElement = e.target.cloneNode(true);
        newClassName = newElement.className;
        newElement.classList.add("image-property");
        addImage.className = newClassName + " image-property close";
    }
});

closeTag.addEventListener("click", (e) => {
    modal.style.display = "none";
});

document.addEventListener("click", (e) => {
    console.log(e.target);
    console.log(e.target === modal);
    if (e.target === modal) {
        modal.style.display = "none";
    }
});




//Footer Section
const pageLocation = window.location.href;
const date = new Date(document.lastModified);
const footer = document.querySelector(".footer-text-content");
console.log(footer);
const pageLocationTag = footer.children[0];
const dateTag = footer.children[1];

pageLocationTag.innerHTML += "<br>"+ pageLocation;
dateTag.innerHTML += "<br>"+ date;