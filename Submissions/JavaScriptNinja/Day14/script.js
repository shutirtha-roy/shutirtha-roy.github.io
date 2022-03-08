//Copying array
let numbers = [1, 3, 5, 7, 10];
//const copiedArray = [...numbers];
//const copiedArray = numbers;
//const copiedArray = nums.slice(0, numbers.length);
const copiedArray = numbers.slice(0);

console.log(copiedArray);



//Emptying array
let anotherNumbers = numbers;
//numbers = []
numbers.length = 0;
console.log(numbers);
console.log(anotherNumbers);



//Iterating array
numbers = [1, 3, 5, 7, 10];
numbers.forEach(function(num, index, arr) {
    console.log(index);
    //console.log(arr);
    console.log(num);
});

for(let [index, number] of Object.entries(numbers)) {
    console.log(number);
}



//Sorting array
let newNumber = [1, 7, 3, 9];
const sortedArr = newNumber.sort();
console.log(sortedArr);

const products = [
    {
        id: 1,
        name: "T-Shirt",
        price: 10
    },
    {
        id: 3,
        name: "Jeans",
        price: 10
    },
    {
        id: 2,
        name: "Shoes",
        price: 60
    }
];

const sortedResult = products.sort(function(a, b) {
    /* if(a.id > b.id) return 1;
    else if(a.id < b.id) return -1; */
    const valueA = a.name.toLowerCase();
    const valueB = b.name.toLowerCase();
    if(valueA > valueB) return 1;
    if(valueA < valueB) return -1;
    return 0;
    //return (a.id > b.id) ? 1: (a.id < b.id) ? -1 : 0;
});

console.log(sortedResult);



//Reducing Array
const reducedNumbers = [1, 4, 6, 10];
//acc = 1 cur = 4
//acc = 5 cur = 6
//acc = 11 cur = 10
//acc = 21

const sum = reducedNumbers.reduce((accumulator, current) => {
    return accumulator + current;
}, 10);

console.log(sum);





//Every and some helper

//return true or false
let newHelperNumbers = [1, 7, 3, 9];
let numResult = numbers.every((number) => {
    return number >= 1;
});

numResult = numbers.some((number) =>  number > 1);

console.log(numResult);



//Map method and chaining

//must return something

let mapNumber = [1, 7, 3, 9];

let mapResult = mapNumber
.map(number => number * 2)
.join(' ');

mapResult = mapNumber
.map(number => number * 2)
.reduce((a, b) => a + b);

console.log(mapResult);


const productsMap = ["T-shirt", "Shoes"];
let ul = '<ul>';
const resultMapp = productsMap
.map(item => ul += `<li>${item}</li>`)
.join(' ');
ul += '</ul>';
console.log(ul);




//Excercise

/* Exercise-1
========================================
//must result a array including all elements in the defined range
//results will be [1,2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbers = arrayFromRange(1, 10);

console.log(numbers);
function arrayFromRange(min, max) {
//TODO

} */


function arrayFromRange(min, max) {
    let arrayRange = [];
    for(let i = min; i <= max; i++) {
        arrayRange.push(i);
    }
    return arrayRange;
}

const numbersExcerciseOne = arrayFromRange(1, 10);
console.log(numbersExcerciseOne);




/* Exercise-2
==================================
//custom includes methods that is defined by you
//result true or false based on searchElement
const numbers = [1, 2, 3, 4]; 

console.log(includes(numbers, -1));

function includes(array, searchElement) {
  //TODO
} */

function includes(array, searchElement) {
    return array.includes(searchElement);
}


const numbersExerciseTwo = [1, 2, 3, 4]; 
console.log(includes(numbersExerciseTwo, -1));





/* Exercise-3
==================================
//Exclude the numbers you passed to the function  from numbers array
//result will be [3, 4]

const numbers = [1, 2, 3, 4]; 

const output = except(numbers, [1, 2]);

console.log(output); 

function except(array, excluded) {
  //TODO
}  */


function except(array, excluded) {
    let newArr = []
    array.forEach((num, index, arr) => {
        if(!excluded.includes(num)) {
            newArr.push(num);
        };
    });

    return newArr;
}

const numbersExcerciseThree = [1, 2, 3, 4]; 

const output = except(numbersExcerciseThree, [1, 2]);

console.log(output); 



/* 
Exercise-4
==================================
//count the occurrence of numbers 
//result will be number of occurrence .Example case: result will be 2  
//At first use procedural way
//Then use reduce method

const numbers = [1, 2, 3, 1]; 

const count = countOccurrences(numbers, 1); 

console.log(count);

function countOccurrences(array, searchElement) {
  //TODO
} */


function countOccurrences(array, searchElement) {
    let count = 0;
    let newValue = array.map((number) => {
        count += (number === searchElement ? 1 : 0);
    });

    return count;
}


function countOccurrencesReduce(array, searchElement) {
    let count = 0;
    let i = 0;
    array.reduce((accumulator, current) => {
        i++;
        if(i === 1) {
            if(accumulator === searchElement) {
                count += 1;
            }
        } else if(current === searchElement) {
                count += 1;
        }
    });

    return count;
}


const numbersExcerciseFour = [1, 2, 3, 1]; 

//const count = countOccurrences(numbersExcerciseFour, 1); 
const count = countOccurrencesReduce(numbersExcerciseFour, 1); 
console.log(count);





/* Exercise-5
==================================
//Get the maximum number from the array
//At first use procedural way
//THen use reduce method
const numbers = [1, 2, 3, 4]; 

const max = getMax([arr]);

console.log(max); 


function getMax(array) { 
  //TODO
}
 */

function getMax(array) { 
    let maxValue = array[0][0];
    
    for(let i = 1; i < array[0].length; i++) {
        if(array[0][i] > maxValue) {
            maxValue = array[0][i];
        }
    }

    return maxValue;
}

function getMaxReduce(array) { 
    let maxValue = array[0][0];
    
    array[0].reduce((previousValue, currentValue) => {
        if(currentValue > maxValue) {
            maxValue = currentValue;
        }
    });

    return maxValue;
}



const numbersExcerciseFive = [1, 2, 3, 4]; 

//const max = getMax([numbersExcerciseFive]);
const max = getMaxReduce([numbersExcerciseFive]);

console.log(max); 