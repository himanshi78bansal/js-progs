// forEach method 
// It is a high order function as it takes another function as a parameter(callback function)

let arr = ["apple", "banana", "cupcake", "donut", "eclairs"];

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
})

// practice question -> print the square of numbers(1-5) using the forEach loop
let numbers = [1,2,3,4,5];
numbers.forEach((val) => {
    console.log(val*val);
})

// There are alot of methods in js, available for access an array