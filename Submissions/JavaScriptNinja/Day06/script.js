//Introduction to Logic & condition

//If && else statement

/* const age = 18;

if (age === 18) {
    console.log("Yeah I am 18");
} else {
    console.log("Some stupid lie");
} */

//Combining multiple condition

/* const isAdmin = true;
const profileOwner = true;

if(isAdmin && profileOwner) {
    console.log("Yes I am the admin and I am the owner of the profile");
} else {
    console.log("Something went wrong");
}
 */



//Ternary Operator
/* const isAdmin = true;
const profileOwner = true;


const isEverythingRight = (isAdmin && profileOwner) ? "Yes I am the admin and I am the owner of the profile"
 : "Something went wrong";

console.log(isEverythingRight); */


//Logic AND OR operator
/* const isAdmin = true;

const isEverythingRight = isAdmin && "Yes I am the admin and I am the owner of the profile";

if(!isEverythingRight) {
    console.log("Something went wrong");
}

//console.log(isEverythingRight);
 */




//If and Else if

/* const price = 15;

if (price <= 10) {
    console.log("No shipping");
} else if (price > 10 || price <= 20) {
    console.log("Free shipping avaliable");
} else {
    console.log("Special discount applied");
} */



//Switch statement
/* const product = "Blue Yeti";

switch(product) {
    case "Blue Yeti":
        console.log("Better Microphone");
        break;
    case "Snowball":
        console.log("Good Microphone");
        break;
    case "Rode":
        console.log("OK");
        break;
    default:
        console.log("Some unknown microphone");
    
} */



//Exercise
const age = 22;

if (age < 10) {
    console.log("You are under your mom's supervision");
} else if(age >= 10 && age < 15) {
    console.log("Try to gain knowledge from outside of home");
} else if(age >= 15 && age < 18) {
    console.log("prepare to cast vote");
} else if(age > 18) {
    console.log("cast you vote");
} else {
    console.log("You are out of range");
}


switch(age) {
    case age < 10:
        console.log("You are under your mom's supervision");
        break;
    case age >= 10 && age < 15:
        console.log("Try to gain knowledge from outside of home");
        break;
    case age >= 15 && age < 18:
        console.log("prepare to cast vote");
        break;
    case age > 18:
        console.log("cast you vote");
        break;
    default:
        console.log("You are out of range")
}
