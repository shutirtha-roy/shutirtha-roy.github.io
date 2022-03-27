//Array Review
const arr = [1, 3, 5, 8, 10];
console.log(arr);
//Getting elements
console.log(arr[1]);

arr[1] = 5;
console.log(arr);

for(let num of arr) {
    console.log(num);
}


//Adding Elements into array
const numbers = [1, 3, 5, 7, 10];
//Ending
//numbers.push(12);
// //Beginning
//numbers.unshift(-3);


//Middle
numbers.splice(2, 0, 4, 7, 9);
console.log(numbers);




//Removing Elements

//Ending
numbers.pop(12);

//Beginning
numbers.shift();


//Middle
numbers.splice(2, 2);
console.log(numbers);





//Finding elements(Primitive)
/* const includedOrNot = numbers.indexOf(3);
console.log(includedOrNot);
const result = (includedOrNot === -1) ? "Not included" : "included";
console.log(result); */

const resultInclude = numbers.includes('3');
console.log(resultInclude);




//Finding Element (Reference)
const products = [
    {
        id: 1,
        name: 'T-Shirt',
        price: 10
    },
    {
        id: 2,
        name: 'Shoes',
        price: 60
    },
    {
        id: 2,
        name: 'T-Shirt',
        price: 60
    }
]


const result = products.find(function (productInfo){
    return productInfo.name === "T-Shirt";
});

console.log(result);





//Find vs Filter
const newResult = products.filter((productInfo) => productInfo.name === "T-Shirt");

console.log(newResult);





//Combining array
const num1 = [2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
//const result = num1.contact(num2);
const combined = [...num1, ...num2]

console.log(combined);




//Split and join
const resultJoin = num1.join(' ');
console.log(resultJoin);

const str = 'I am samim';
const result = str.split(' ');
console.log(result);
