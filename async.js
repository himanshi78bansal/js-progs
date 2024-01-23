// Asynchronous

console.log("one");
console.log("two");
setTimeout(printHello, 2000); // wait 2sec then print hello (2 sec = 2000(millisecond))
console.log("three");   // it will not wait for above code
console.log("four");

// printHello function
function printHello(){
    console.log("Hello");
}