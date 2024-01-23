//  iife - immediately invoked function expression
// no need to call function

// 1st method
(function() {
    console.log("hello");
})();

// 2nd method
(() => {
    console.log("Hi");
})();

// 3rd method
(async() => {
    console.log("Bonjour");
})();