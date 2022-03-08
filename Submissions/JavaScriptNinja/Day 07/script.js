//Introduction to while loop

/* var count = 1;

while(count < 6) {
    console.log("count is: " + count);
    count++;
} */



//While loop in practice
/* const text = "I won\'t reperat my code";
let number = 1;
while(number < 6) {
    console.log(`${text} repeated in ${number} times`);
    number++;
} */

//Infinite Loop



//Introduction to For loop
/* const str = "hello";

for(var i = 0; i < str.length; i++) {
    console.log(str[i]);
} */


//For loop in practice
/* for(let number = 1; number < 6; number++){
    console.log(`${text} repeated in ${number} times`);
}

const str = "You are a Hero";

for(let number = 0; number < str.length; number++) {
    console.log(` ${str[number]}`);
} */


//Looping with array
//Break && continue
/* const profile = ["samim", "Hasan", 25, "Web programmer"];

let i = 0;

while(i < profile.length) {
    if(profile[i] == 25) {
        i++;
        continue;
    } else {
        console.log(profile[i]);
    }   
    
    i++;
}

for(let i = 0; i < profile.length; i++) {
    console.log(profile[i]);
} */


//For of loop
/* const profile = ["samim", "Hasan", 25, "Web programmer"];

for(let value of profile) {
    console.log(value);
} */

//For in loop
/* const newProfile = {
    firstName: 'samim',
    lastName: 'Fazlu',
    age: 25,
    profession: 'Web developer'
}

for(let key in newProfile) {
    console.log(newProfile[key]);
} */


//Dynamically access properties
/* const surName = 'firstName';
console.log(newProfile[surName]); //Dynamically access value */




//Excercise-loop
//1)
/* const num = 1;

while(num <= 10) {
    console.log(num);
    num += 2;
} */

//Since const num is being used we cannot change the value but if const
//was not used (let), then in the while loop after each iteration num increases by 2
//and stops when num = 11 in the while loop printing 1,3,5,7,9.




//2)
/* const num = 1;

while(num <= 20) {
    if(num % 4 == 0) {
        console.log(num);
    }
    num++;
}
 */

//Since const num is being used we cannot change the value but if const
//was not used (let), then in the while loop after each iteration num increases by 1
//and prints only if num is divisible by 4
//and stops when num = 21 in the while loop printing 4,8,12,16,20.




//3)
/* const num = 100;

while(num <= 150) {
    console.log(num + 1);
    num--;
} */

//Since const num is being used we cannot change the value but if const
//was not used (let), then in the while loop after each iteration num increases by 1
//and prints only if num is divisible by 4
//and stops when num = 21 in the while loop printing 4,8,12,16,20.



//4)
//Print out all the even numbers between 1 and 100. Write two solutions:
//one with a while loop and one with a for loop.

for(let i = 2; i <= 99; i += 2) {
    console.log(i);
}

let i = 2;
while(i <= 99) {
    console.log(i);
    i += 2;
}


//5)
let newCharacter = "";

for(let i = 0; i < 6; i++) {
    newCharacter += "$";
    console.log(newCharacter);
}


//6)
for(let i = 1; i <= 100; i++) {

    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if(i % 3 == 0) {
        console.log("Fizz");
    } else if(i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}