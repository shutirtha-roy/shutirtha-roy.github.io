//Array helper methods (map, reduce, find, findIndex, filter, some, every)

let nums = [1, 3, 5, 7];

//map

const total = nums.map(num => {
    return num * 2;
});

console.log(total);



//find

/* const result = nums.find(num => num === 5);*/

let result = nums.find(num => num % 2 !== 0);
console.log(result);




//filter

result = nums.filter(num => num % 2 !== 0);
console.log(result);


result = nums.filter(num => num % 2 == 0);
console.log(result);




//some
result = nums.some(num => num % 2 !== 0);
console.log(result);




//every
result = nums.every(num => num % 2 === 0);
result = nums.every(num => num % 2 !== 0);
console.log(result);




//findIndex
result = nums.findIndex(num => num % 2 !== 0);
console.log(result);



//reduce

nums = [0, 3, 5, 7];

//acc - 0 curr-3 result - 3
//acc - 3 curr-5 result - 8
//acc - 8 curr-7 result - 15

result = nums.reduce((acc, curr) => acc + curr);
console.log(result);

result = nums.reduce(function (acc, curr) {
    return acc + curr;
}, 5);

result = nums.reduce((acc, curr) => acc + curr, 5);
console.log(result);

result = nums.reduce((acc, curr, index, arr) => acc + curr, 5);
console.log(result);


nums = {
    value1: 1,
    value2: 2,
    value3: 3
}




let newTotal = '';
//object looping
for(let num in nums) {
    newTotal = newTotal + nums[num];
    console.log(nums[num]);
}

console.log(total);


console.log(Object.keys(nums));
newTotal = '';

for (let num in Object.keys(nums)) {
    console.log(num);
}

console.log(Object.entries(nums));

for (let [key, value] in Object.entries(nums)) {
    console.log(key, value);
}




//Sum of values in an object array
let sum = [{ x : 1}, {x : 2}, {x : 3}].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);