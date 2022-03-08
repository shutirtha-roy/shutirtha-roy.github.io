//Object key:value property:value

/* const product = {
    name: 'Print T-shirt',
    price: 10,
    'is avaliable': true
} */


//Dynamically access properties
const avaliability = 'is avaliable';
console.log(product.name);
console.log(product['name']);
console.log(product['is avaliable']);
console.log(product[avaliability]);

//Methods
const product1 = {
    name: 'Print T-shirt',
    price: 10,
    'is avaliable': true,
    productDesc() {
        return `${this.name}-${this.price}`
    }
}

console.log(product1.productDesc());

const product2 = {
    name: 'Sneaker',
    price: 60,
    'is avaliable': true,
    productDesc() {
        return `${this.name}-${this.price}`
    }
}



//Factory Function
function product(name, price, avaliability) {
    return {
        name,
        price,
        'is avaliable': avaliability,
        productDesc() {
            return `${this.name}-${this.price}`
        }
    };
}


console.log(product('Print T-shirt', 10, true));



//Constructor function (follows Pascal Notation)
//const firstName //camel casing
//const FirstName // Pascal Notation

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.productDesc = function() {
        return `${this.name}-${this.price}`;
    }
}

const productOne = new Product('Sneaker', 60);
console.log(productOne);


//"This" in Javascript

//1. this inside method = object
//2. this in a contructor function - some kind of object
//3. otherwise - always indicate window



//Call, bind, apply
/* function sayHi(age, profession) {
    console.log("Hi " + this + " " + age + " " + profession);
}

sayHi.call('roy', 25, 'web developer'); */



/* function sayHi(age, profession) {
    return ("Hi " + this + " " + age + " " + profession);
}

const output = sayHi.apply('roy', [25, 'web developer'])
console.log(output); */


function sayHi(age, profession) {
    return ("Hi " + this + " " + age + " " + profession);
}

sayHi.bind('roy');
console.log(sayHi.apply(undefined, [25, 'web developer']))



//Binding "this" in JavaScript
const sayHiWithBinding = sayHi.bind("samim");
const outputCall = sayHiWithBinding.call(undefined, 25, "web developer");
console.log(outputCall);


//Function expression and this binding
const sayHiExpression = function(age, profession) {
    return ("Hi " + this + " " + age + " " + profession);
}.bind('samim');





//Copy by value(primitive)

let a = 10;
const b = a;
console.log(a);
console.log(b);

a = 20;
console.log(a);
console.log(b);

//copy by reference(reference/complex)
let obj1 = {value: 3};
let obj2 = obj1;

console.log(obj1);
console.log(obj2);

//obj1 = {value: 5}
obj1.value = 5;

console.log(obj1);
console.log(obj2);





//Pass by value
let ab = 10;

function passByValue(a) {
    ab = 20;
}

passByValue(ab);
console.log(ab);


//pass by reference
let obj = {value: 10};

function passByValue(passedObj){
    passedObj.value = 20;
}

passByValue(obj);
console.log(obj);