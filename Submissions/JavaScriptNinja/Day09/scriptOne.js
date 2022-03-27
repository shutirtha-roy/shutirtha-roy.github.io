//Copying object

const product1 = {
    name: 'T Shirt',
    price: 20,
    availability: true
}

let product2 = {};
for(let key in product1) {
    product2[key] = product1[key];
}

const product3 = Object.assign({color: 'red'}, product1);

const product4 = {...product1}

console.log(product3);
console.log(product4);



//Functions as a object
function sayHi() {
    console.log("Hi");
}

sayHi.firstName = 'samim';

console.dir(sayHi);

sayHi();





//Math Object

//floor
//random
//abs
//round

console.log(Math.floor(Math.random() * 10));

//3.456

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

console.log(getRandomInt(2, 6));




//Date Object

const now = new Date();
let date = new Date(1000);
date = new Date('December 17, 1995 03:24:00');
date = new Date(2018, 10, 1, 10, 15,50);
date.setFullYear(2010);
date.setMonth(1);
console.log(date);






//Exercise
//=================================================================

//1. Max of Define a function that outputs max of two function;

function max(a, b){
    if(a >= b) {
        return a;
    } else {
        return b;
    }
}

console.log(max(5, 7));

//2. Show numbers in between with the types 


function showNumber(num){
    for(let i = 0; i < num; i++) {
        console.log(i);
    }
}

showNumber(10)





//3. Sum of all numbers upto passed limit
function sum(num){
    let total = 0;

    for(let i = 1; i <= num; i++) {
        total += i;
    }

    return total;
}

console.log(sum(10));



//4. calculate Average
//Number - Grade
//<60-F
//60-69-D
//70-79-C
//80-89-B
//>90-A

let calculateAverage = (arr) => {
    let average = 0;

    for(let i = 0; i < arr.length; i++) {
        average += arr[i];
    }

    return average / arr.length;
}

console.log(calculateAverage([60, 70, 90, 50, 55]));



//5. Show properties of only value of stringtype

const movie = {
    title: 'a',
    releaseYear: 2018,
    reting: 4.5,
    director: 'b'
};

function showProperties(movieData){
    for(let key in movieData)
    {
        if(typeof movieData[key] == 'string'){
            console.log(movieData[key]);
        }
    }
}

showProperties(movie);