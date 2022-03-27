//Javascript String properties and methods

const text = 'I love Programming';
//finding length
console.log(text.length);
//finding character/element
console.log(text[0]);

//finding character by index
console.log(text.charAt(5));

//finding index by character
console.log(text.indexOf('e'));


//uppercase
console.log(text.toUpperCase());
//lowercase
console.log(text.toLowerCase());
//check whether text is included or not
console.log(text.includes('w'));

//remove space
console.log(text.trimStart().length);
console.log(text.trimEnd().length);

//pulling out text
console.log(text.slice(0));
console.log(text.substr(0, 6));


//converting/creating array from a string

console.log(text.split(' '));






//Javascript Array properties and method
const arr = ["I", "Love", "Programming"];
//finding length
console.log(arr.length);
//accessing specific element
console.log(arr[0]);

//adding or removing element at the end of the array
console.log(arr.push('!'));
console.log(arr.pop('!'));

//adding or removing element at the beginning of the array
console.log(arr.unshift("we"));
console.log(arr.shift('we'));


//accessing specific part of array
console.log(arr.slice(0, 2));
//console.log(arr.splice(0, 2));

//concat
console.log(arr.concat(["!"]));

//emptying array
arr.length = 0;


console.log(arr);


//Working with Javascript Math Object
console.log(Math.random());
console.log(Math.floor(5.444));
console.log(Math.round(5.4999));
console.log(Math.ceil(5.4999));
console.log(Math.abs(-4.6));


//Generate a Random Number (0-10)
console.log(Math.floor(Math.random() * 11));

console.log(Math.min(10, 5, 1, 54, 56454, 5344));







//Javascript date Object
const date = new Date();

console.log(date);
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getFullYear());
console.log(date.getYear());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getTime());
console.log(Date.now());
console.log(date.getUTCDate());
console.log(date.getUTCHours());
console.log(date);