//Difference between function statement and Expression

/* function greet() {
    console.log("Hi");
}

greet();

const greet = () => {
    console.log("Hi");
} */




//Hoisting
//Difference between function statement and expression
//console.log(firstName);
const firstName = "samim";
const lastName = "Hasan";
console.log(firstName);
console.log(lastName);
function greetS() {
    console.log("Hi");
}
greetS();
greetE();
const greetE = () => {
    console.log("Hi");
}
//greetE();





//Scope
let firstName = "samim";
//Functional scope
function logger() {
    firstName = "Anis";
    //console.log(lastName)
    return function loggerInner() {
        //const firstName = 'Anis';
        //const lastName = 'Hasan';
        console.log(firstName);
    }
}

logger()()
console.log(firstName);



//Var vs let vs const



{
    let firstName = 'samim';
}

for(let i = 0; i < 10; i++){
    console.log(i);
}

//console.log(i)

//console.log(firstName);

var someVar = 'blabla';
var someVar = 'bla';
console.log(someVar);



//Rest and spread operator

//Difference between rest and spread operator

function product(name, ...property) {
    console.log(name);
    console.log(property);
    return `${name}-${property[0]}`;
}

product("printed T-shirt", 30, undefined, true)

const profile = ['samim', 'Hasan', 25, 'web development'];

const copyProfile = [...profile];

console.log(copyProfile);


const product = {
    name: 'T-shirt',
    price: '$10',
    showInfo() {
        console.log(this);
        return `${this.name}-${this.price}`
    }
}

function productOut({name, price, showInfo}) {
    console.log(name, price);
}

productOut({...product});





//Excercise
const array = [0, null, undefined, '', 2, 3]

function truthValueCount(array) {
    let counter = 0;
    for(let value in array) {
        if(!value) {
            counter++;
        }
    }
}

truthValueCount(array);


//Add those numbers
function sum(...values) {
    let summation = 0;
    for(let i = 0; i < values.length; i++){
        summation += individualValue;
    }
    return summation;
}


console.log(sum[1,2,3,4]);