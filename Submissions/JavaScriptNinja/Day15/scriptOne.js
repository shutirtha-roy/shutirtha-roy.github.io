//4. OPERATORS in Javascript

//8.Checking non-Boolean value
console.log("Hello" && "World");
console.log("Hello" || "World");

//short circuiting and with logical AND(&&), OR(||) operator
console.log(true && true && false && true);
console.log(true || false && false && true);

//checking truth or falsy value
console.log(!!"Hello");
console.log(!!undefined);
console.log(!!'');



//9. Operator precedence
console.log(1 + (2 * 5));



//10. Interesting case
//true == "1" //true
// 0 == false //true
//null == undefined //true
//NaN == NaN //false



//11.Excercise

//Excercise - 1
var x = 10;
var y = "a";

console.log(y === "b" || x >= 10); 
//The output is true. x is greater than equal to 10 so it is true



//Excercise - 2
var x = 3;
var y = 8;

console.log(!(x == "3" || x === y) && !(y != 8 && x <= y));

//The output is false. Due to ! it is false.



//Excercise - 3

//!"Hello World" <--false

//(!""); <-- true

//!null <-- true

//!0 <-- true

//!-1 <-- false

//!NaN <-- true





//Excercise - 4
const str = "";
const msg = "haha!";
const isFunny = "false";

//!(( str || msg) && isFunny) <-- false
//The condition is true since msg is true and isFunny is true and altogether due to ! it becomes false.




//7. More Objects

//1. Max of Define a function that outputs max of two function;

function max(a, b) {
    return (a >= b) ? a : b;
}

console.log(max(20, 25));


//2. Show numbers in between with the types

function showNumber(num) {

}

showNumber(30);


//3. Sum of all numbers upto passed limit 

function sum(num) {
    for(let i = 0; i < num; i++) {
        console.log(i);
    }
}

sum(20);


//4. Calculate Average
//Number - Grade

function calculateAverage(arr) {
    let total = 0;

    arr.forEach(element => {
        total += element;
    });

    total /= arr.length;

    if(total >= 90) {
        return "A";
    } else if(total >= 80) {
        return "B";
    } else if(total >= 70) {
        return "C";
    } else if(total >= 60) {
        return "D";
    } else {
        return "E";
    }
}

console.log(calculateAverage([60, 70, 90, 50, 55]));




//5. Show properties of only value of string type

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

function showProperties(movieData) {
    for(let key in movieData) {
        if(typeof movie[key] === "string") {
            console.log(movie[key]);
        }
    }
}

showProperties(movie);




// 8. More Function

//14.Excercise


//count the truthy value
const arrayTruth = [0, null, undefined, '', 2, 3];


let countTruthy = (arrayTruth) => {
    let count = 0;
    arrayTruth.forEach(function(value) {
        if(value) {
            count += 1;
        }
    });

    return count;
};

console.log(countTruthy(arrayTruth));




//Add those numbers
function sumRest(...arrayValue) {
    let total = 0;

    for(let value of arrayValue[0]){
        total += value;
    }

    return total;
};

console.log(sumRest([1, 2, 3, 4]));