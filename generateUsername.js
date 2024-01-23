// generate username
// @fullname8, here 8 is the length of fullname

let fullName = prompt("Enter your Full Name(without spaces): ");

let username = "@" + fullName + fullName.length;

console.log(username);