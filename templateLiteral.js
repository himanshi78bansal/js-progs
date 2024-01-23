// template literals
let newStr = `A new way of writing string`;
console.log(newStr);
console.log(typeof(newStr));

// use of template literals (backticks (``))
console.log(`himanshi\nbansal`); // can use escape chracters

// template literals also used for expression between a statement
let obj = {
    item : "pen",
    price : 10
};

let output1 = "the cost of "+ obj.item + " is "+ obj.price+ " rupees"; // normal string
console.log(output1);

let output2 = `the cost of ${obj.item} is ${obj.price} rupees`; // using template literal
console.log(output2);
