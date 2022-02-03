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
        //setInterval(characterAdder, 1000);
        firstChild.innerHTML = stringAdder;
    } 
    firstChild.innerHTML = headingValue;
}


const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}


const headerCapitalize = () => {
    firstChild.innerHTML = firstChild.innerHTML.italics();
    firstChild.style.color = "#6b6d4e";
};


const characterAdder = () => {
    firstChild.innerHTML = stringAdder;
    console.log(firstChild.innerHTML);
    //console.log(character);
}


const headingQuote = () => {
    secondLastChild.innerHTML = "The way to get started is to quit talking and begin doing.";
    
};


const headingAuthor = () => {
    lastChild.innerHTML = "-Walt Disney";
};


const QuoteCreator = () => {
    setTimeout(headerCapitalize, 2000);
    setTimeout(headingQuote, 2500);
    setTimeout(headingAuthor, 3000);
};


if (window.innerWidth > 960) {
    headerName();
    QuoteCreator();
} else {
    const headingValue = "I'm Shutirtha Roy";
    firstChild.innerHTML = headingValue;
    headerCapitalize();

    headingQuote();
    headingAuthor();
}



const pageLocation = window.location.href;
const date = new Date(document.lastModified);
const footer = document.querySelector(".footer-text-content");
console.log(footer);
const pageLocationTag = footer.children[0];
const dateTag = footer.children[1];

pageLocationTag.innerHTML += "<br>"+ pageLocation;
dateTag.innerHTML += "<br>"+ date;


