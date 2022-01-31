const headingChildren = document.querySelector(".text-section").children

const firstChild = Array.from(headingChildren)[0];
const lastChild = Array.from(headingChildren).at(-1);
const secondLastChild = Array.from(headingChildren).at(-2);
let stringAdder = "";



const headerName = () => {
    const headingValue = "I'm Shutirtha Roy";

    /* for (let character of headingValue) {
        stringAdder += character;
        //console.log(stringAdder);
        setInterval(characterAdder, 1000);
    } */
    firstChild.innerHTML = headingValue;

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
    setTimeout(headerCapitalize, 500);
    setTimeout(headingQuote, 1000);
    setTimeout(headingAuthor, 1500);
};

headerName();
QuoteCreator();




const date = new Date(document.lastModified);
console.log(date);