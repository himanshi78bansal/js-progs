// Callback function - a function passed as an argument to another function.

// add function
function sum(a,b){
    console.log(a+b);
}
// multiply function
function mul(a,b){
    console.log(a*b);
}
// subtract function
function sub(a,b){
    console.log(a-b);
}
// divide funtion
function div(a,b){
    console.log(a/b);
}

// callback function 
function calculate(a,b,operator){
    return operator(a,b); 
}

// calling callbackfunction
calculate(5,2,sum);
calculate(5,2,mul);
calculate(5,2,sub);
calculate(5,2,div);