//Dynamic Typing

/* let productName = 'Milk';
console.log(typeof productName);
productName = true;
console.log(typeof productName);
 */


//Complex data type
/* const firstName = 'samim';
const lastName = 'Hasan';
const age = 25;
const profession = 'Web engineer';


const profile = ['samim', 'Hasan', 25, 'web engineer'];
console.log(profile[0] + ' ' + profile[1]);

profile[3] = 'developer';

const random_collection = [49, true, "Hermione", null];

const nums = [45, 37, 89, 24];
console.log(nums.length); */

//Array In Practice










//Array Excercise
//Write your Bio(By grouping closely related data)
//=======================================
//I am samim and 25. I'm a web developer. I love "Javascript"

const myInformation = ["Shutirtha", 22, "Developer", "JavaScript"];
const myBio = "I am " + myInformation[0] + " and " + myInformation[1] + ". I'm a " + myInformation[2] + ". I love " + myInformation[3];
console.log(myBio);








//Complex data type-Object
/* const demoProfile = {
    firstName: 'samim',
    age: 25,
    profession: 'web developer',
    'previous prof': 'Engineer'
}

console.log(demoProfile.firstName);
console.log(demoProfile.age);
console.log(demoProfile.profession);
console.log(demoProfile['previous prof']);

demoProfile.futureProf = 'AI';
console.log(demoProfile); */


//Updating Data
/* const profile = {
    name:'samim',
    age:25,
    profession:'web developer'
};

profile["age"] += 1;

profile.city = "London";

//Creating Objects
const profile = {};
profile.name = "Travis";
profile.age = 21;
profile.city = "LA";

//all at once
const person = {
    name: 'samim',
    age: 25,
    city: 'Gazipur'
};

//another way of initializing an Object
const profile = new Object();
profile.name = 'samim';
profile.age = 25;
profile.city = 'LA'; */



//Objects can hold all sorts of data
/* var junkObject = {
    age: 57,
    color: "purple",
    isHungry: true,
    friends: ["Horatio", "Hamlet"],
    pet: {
        name: "Rusty",
        species: "Dog",
        age: 2
    }
} */




//Object Excercise
//Write your Bio(By grouping closely related data)
//=======================================
//I am samim and 25. I'm a web developer. I love "Javascript"

const newBio = {
    name: 'shutirtha',
    age: 22,
    profession: 'web developer',
    favouriteLanguage: 'Javascript'
};

const objectBio = "I am " + newBio.name + " and " + newBio.age + ". I'm a " + newBio.profession + ". I love " + newBio.favouriteLanguage;
console.log(objectBio);


//Invalid key
//====================================================
var someObject = {}

//Which of the following are valid;

//The valid assigning of values are:
someObject._name = "Hedwig";
someObject.age = 6;
var prop = "color";
someObject[prop] = "red";
//They are valid because the variables inside the object does not start with numbers



//structuring a movie database(10 movies)
//=================================================
//id
//name
//rating
//category


const movieInfo = [
    {
        id: 1,
        name: "Jai Bhim (2021)",
        rating: "9.3",
        category: "Crime" 
    },
    {
        id: 2,
        name: "The Shawshank Redemption (1994)",
        rating: "9.3",
        category: "Drama" 
    },
    {
        id: 3,
        name: "The Godfather (1972)",
        rating: "9.2",
        category: "Crime" 
    },
    {
        id: 4,
        name: "The Dark Knight (2008)",
        rating: "9.0",
        category: "Action" 
    },
    {
        id: 5,
        name: "The Godfather: Part II (1974)",
        rating: "9.0",
        category: "Drama" 
    },
    {
        id: 6,
        name: "12 Angry Men (1957)",
        rating: "9.0",
        category: "Crime" 
    },
    {
        id: 7,
        name: "The Lord of the Rings: The Return of the King (2003)",
        rating: "8.9",
        category: "Adventure" 
    },
    {
        id: 8,
        name: "Pulp Fiction (1994)",
        rating: "8.9",
        category: "Drama" 
    },
    {
        id: 9,
        name: "Schindler's List (1993)",
        rating: "8.9",
        category: "History" 
    },
    {
        id: 10,
        name: "Inception (2010)",
        rating: "8.8",
        category: "Sc-Fi" 
    }
]

const singleMovie = movieInfo[0];
console.log(singleMovie.name + ' got ' + singleMovie.rating + " and is of " + singleMovie.category + " category.");
