// for-of loop (used for arrays and strings)

let name = "himanshi";

for(let i of name){
    console.log(i);
}


// for-in loop(used for objects and arrays)
let student = {
    name : "himanshi",
    age : 24,
    cgpa : 9.9,
    pass : true
};

for(let key in student){
    console.log(key + ":" + student[key]);
}