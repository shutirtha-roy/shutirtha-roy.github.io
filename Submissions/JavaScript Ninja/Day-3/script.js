//Introduction to Function
/* function square(num) {
    console.log(num * num);
}

square(10);
square(5);

function area(length, width) {
    console.log(length * width);
}

area(9, 2); //18

function greet(person1, person2, person3) {
    console.log("hi " + person1);
    console.log("hi" + person2);
    console.log("hi" + person3);
}


//Function in Practice
function profileBuilderwithDynamicInput(firstName, lastName, age, job, learnInFuture) {
    console.log('My name is ' + firstName + ' ' + lastName + '. I am ' + age + ', I worked as a ' + job + ' . I want to learn ' + learnInFuture);
}

profileBuilderwithDynamicInput('samim', 'Hasan', 25, 'Web engineer', 'Machine Learning'); */




//JavaScript statement
/* let firstName = 'samim';
firstName
console.log(firstName); */



//Template String
/* function profileBuilderwithDynamicInputF(firstName, lastName, age, job, learnInFuture) {
    console.log(`My name is ${firstName} ${lastName}. I am ${age}, I worked as a ${job}. I want to learn ${learnInFuture}`);
}

profileBuilderwithDynamicInputF('samim', 'Hasan', 25, 'Web engineer', 'Machine Learning'); */




//Return Keyword

/* function profileBuilderwithDynamicInputF(firstName, lastName, age, job, learnInFuture) {
    return `My name is ${firstName} ${lastName}. I am ${age}, I worked as a ${job}. I want to learn ${learnInFuture}`;
}


const coutput = profileBuilderwithDynamicInputF('samim', 'Hasan', 25, 'Web engineer', 'Machine Learning');
console.log(coutput); */


//Excercise function
//Problem 1
//===========================================
function bioInfoMaker(firstName, lastName, age, job, learnInFuture) {
    return 'My name is ' + firstName + ' ' + lastName + '. I am ' + age + ', I worked as a ' + job + ' . I want to learn ' + learnInFuture;
}

const info = bioInfoMaker('Shutirtha', 'Roy', 22, 'web developer', 'Javascript');
console.log(info);


//Problem 2
//============================================
const movie = [
    {
        id: 1,
        name: 'Demo movie Name',
        rating: 4,
        category: 'Sci-fi'
    },
    {
        id: 2,
        name: 'Demo movie Name 2',
        rating: 4,
        category: 'drama'
    }
];

const movieIndex = movie[0];

function infomationMovieOutput(movieIndex){
    return movieIndex + ' got' + movieIndex.rating + 'rating and under' + movieIndex.category + 'category';
}

const individualMovieInfo = infomationMovieOutput(movieIndex);

console.log(individualMovieInfo);


//Null vs undefined
let price = 30;
let customerRating;
console.log(typeof customerRating)
console.log(typeof price);
let productIsAvaliable = null;