// inbuilt functions of string
// strings are immutable. That's why actual string never changes.

let str = "Himanshi";

// length of string
console.log(str.length);

// val at index
console.log(str[3]);
console.log(str.charAt(3));

// uppercase
console.log(str.toUpperCase());

//lowercase
console.log(str.toLowerCase());

//trim
console.log(str.trim());

// slice
console.log(str.slice(3,7));

// concat
let newStr = "Bansal";
console.log(str.concat(newStr));
console.log(str+newStr); // concat 2nd method

// replace
console.log(str.replace("H", "D"));