//JavaScript Fundamentals

//1.Let's talk to machine with it's own language
//Primitive
//Numebers
/* 4
9.3
-10 */

//Strings
/* 'Hello World'
'43' */

//Booleans
/* true
false */

//null and undefined
/* null
undefined */

//Symbol
/* Symbol('samin') !== Symbol('samin') */



//2.JavaScript data type-String
//Single or Double quotes OK
/* "hello world"
'hello world' */

//Concatenation
/* "charlie" + "brown" //"charliebrown" */

//Escape Characters start with "\"
/* "Singin \"Do wah diddy, diddy, dum diddy do\" "
"This is a backslash: \\" */

//Strings have a length property
/* "hello world".length //11 */

//Access individual characters using [] and an index
/* "hello"[0] //"h"
"hello"[1] */



//3.JavaScript Primitive-Number
//Numbers
/* 4
9.3
-10 */

//We can do some math
/* 4 + 10 //14
1/5 //0.2 */

//Modulo - remainder operator
/* 10 % 3 // 1
24 % 2 // 0 */


//Null/Undefined
/* var name;
var age;

var currentPlayer = "charlie";
currentPlayer = null; */



//4.Concept of variable
//var, let, const



//5.let vs const
/* let firstName = 'samin';
firstName = 'Anis'; //You can change reference

const firstName = 'samim';
firstName = 'Anis' // Throw you an error */



//write down the data in a memory space and call them
//=====================================================

const sentenceOne = "Karim is a bad boy";
const sentenceTwo = "Karim is a \"bad\"";
console.log(sentenceOne);

//checking the type and explain your answer

const numberOne = typeof 43; //It is integer since no there are no inverted commas
const numberTwo = typeof '43'; //It is string since no there are inverted commas
console.log(numberOne);
console.log(numberTwo);

//Write your Bio
//============================================
const name = "I am shutirtha roy.";
const age = "I am 22.";
const status = "I'm a student."
const favourite = "I love \"Javascript\""
const space = " ";


const bio = name + space + age + space + status + space + favourite;
console.log(bio);