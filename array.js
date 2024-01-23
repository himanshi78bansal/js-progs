// arrays (mutable)

let marks = [90, 98, 99, 97];

// type of array is object
console.log(typeof(marks)); // object

// print array
console.log(marks);

// length
console.log(marks.length);

// 0-indexing
console.log(marks[2]);

// change value
marks[2] = 100;
console.log(marks);

// printing through loop
for(let i = 0; i<marks.length;i++){
    console.log(marks[i]);
}

for(let value of marks){
    console.log(value)
}

// add
// 1. push() -> add to end
marks.push(95);
console.log(marks);
// 2. unshift() -> add to start
marks.unshift(85);
console.log(marks);

// delete
// 1. pop() -> delete from end & return
marks.pop();
console.log(marks);
// 2. shift() -> delete from start & return
marks.shift();
console.log(marks);

// toString
console.log(typeof(marks.toString()));

// concat
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let final = arr1.concat(arr2);  // newArray
console.log(final); 

// slice
console.log(marks.slice(1,3));

// splice (splice(startIndex(1), deleteCount(2), newElements(4)))
marks.splice(1, 2, 176, 165, 189, 145);
console.log(marks);