//Understanding object
//Object interface, getter, setter, private properties
//constructor function, factory function
//understanding prototype, prototype chain, advantage
//Declaring our own prototype


//Object oriented javascript

/* const profile = {
    _firstName: 'samim',
    _lastName: 'fazlu',
    _age: 30,
    get firstName() {
        console.log('calling getter');
        return 'Mr ' + this._firstName;
    },
    set firstName(name) {
        console.log('calling setter');
        //validation
        if(name === '') {
            console.log("Name can't be empty");
        } else {
            this._firstName = name;
        }
    },
    fullName() {
        return this._firstName + ' ' + this._lastName + ' ' + this._age;
    }
}; */


//clean your interface simple








/* console.log(profile.firstName);
profile.firstName = 'Anis';
console.log(profile.firstName);
console.log(profile["lastName"]);
//delete profile.lastName;
console.log(profile.fullName()); */
//profile.fName = 'Khalil';
//console.log(profile.fName);


//Don't access like this
//profile._firstName = '';



//factory function
/* function profile(firstName, lastName, age) {
    return {
        firstName,
        lastName,
        age,
        fullName() {
            return this._firstName + ' ' + this._lastName + ' ' + this._age;
        }
    }
}


console.log(profile('samim', 'hasan', 30));
console.log(profile('Koushik', 'Kumar', 25)); */





//constructor function
/* function Profile(firstName, lastName, age) {
//default
//this === {}
    this.fName = firstName;
    this.lName = lastName;
    this.age = age;
    this.fullName = () => {
        return this.fName + ' ' + this.lName + ' ' + this.age;
    }
//return this
}

const samim = new Profile('samim', 'Hasan', 30);
const koushik = new Profile('koushik', 'kumar', 26);
console.log(samim.fullName()); */


//new String(), new Number(), new Array(), new Function()
const str = new String('samim');
console.log(str.length);



//Prototype chain
//base is akways prototype object
//String(own) - String prototype-base object
//Array(own) - Array prototype-base object
//Number(own) - Number prototype-base object
//Object(own) - base object


//Accessing prototype


//by created object (__proto__)
//by contructor function (prototype)

str.__proto__ = String.prototype; //true
str.__proto__.__proto__ = Object.prototype; //true

console.log(str.__proto__);
console.log(str.__proto__.__proto__)
console.log(String.prototype);



//Benefits of prototype
//create single copy and access on demand
function Profile(firstName, lastName, age) {
    let _firstName = firstName;
    let _age = age;
    //default
    //this === {}
    this.lastName = lastName;
    Object.defineProperties(this, {
        firstName: {
            get(){
                return 'Mr' + _firstName;
            },
            set(name){
                if(name === ''){
                    throw new Error("Name can't be empty string");
                }
                _firstName = name;
            },
        age: {
            get() {
                return _age
            },
            set(age) {
                if(age < 18) {
                    throw new Error("Age must be greater than 18");
                }
                _age = age;
            }
        }
        }
    })
    console.log(this);
    //return this
}

Profile.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName + ' ' + this.age;
}


const samim = new Profile('samim', 'Hasan', 30);
//const koushik = new Profile('koushik', 'kumar', 26);
console.log(samim.fullName());