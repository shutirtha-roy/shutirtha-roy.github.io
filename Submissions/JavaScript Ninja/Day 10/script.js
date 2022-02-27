//Function Review
//function greet(name) {
//    return 'hi' + name;
//}

/* const greet = function(name) {
    return 'hi' + name;
}

greet.lastName = 'Hasan';

console.log(greet("sanin"));
console.log(greet.lastName); */


//Arguments
/* function product() {
    let info = '';
    for(const property of arguments) {
        info += property + " ";
    }
    return info;
    //return `${name}-${price}`
}

const shirt = product('printed T-shirt', 30, 0, true);
console.log(shirt); */


//Rest operator
/* function product(name, ...property) {
    console.log(property);
    return `${property[0]}`;
}

const shirt = product("printed T-shirt", 30, 0, true, 'T-shirt category');
console.log(shirt); */


//Default parameter
/* function product(name, price, discount = 0.1, shipping, category = "T-shirt") {
    console.log(name, price, discount, shipping, category);
}

const shirt = product("printed T-shirt", 30, 0, true, 'T-shirt category');
console.log(shirt); */


//Evolution of function

/* function add(num1, num2) {
    return num1 + num2;
}

const add = function(num1, num2) {
    return num1 + num2;
}

//Arrow funtion
const add = (num1, num2) => {
    return num1 + num2;
}

const add = (num1, num2) => num1 + num2;

const result = add(3, 2);
console.log(result);

const multiply = num => num * num;
const result = multiply(3);
console.log(result); */


//Arrow function and “this”
/* const product = {
    name: 'T-shirt',
    price: '$10',
    showInfo() {
        return `${this.name}-${this.price}`;
    }
}

const info = product.showInfo();
console.log(info); */




//Array and object destructuring

const product = ["T-shirt", 10, 0, true];

//const name = product[0];
//const price = product[1];
//const discount = product[2];

const [name, price, ...others] = product;

console.log(name, price, others);

const product = {
    name: 'T-shirt',
    price: '$10',
    showInfo() {
        return `${this.name}-${this.price}`;
    }
}

const { name, price, ...others } = product;
console.log(name, price);


function productOut({name, price, showInfo}) {
    console.log(name, price);
}

productOut(product);


/* function productOut({name, price, showInfo}) {
    console.log(name, price);
}

productOut(product); */


//First class function
/* const greet() {
    return "Hi";
} */


//Callback function
/* const greet = () => {
    return function(){
        return "Hi";
    }
}

console.log(greet()()); */


const greet = (fn) => {
    console.log(fn());
}

greet(function(){
    return "Hi";
});