// object
let obj1 = {name : "geez"};
let obj2 = {name : "geez"};

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false

// eventhough both objects have same values, they are stored at different memory locations. hence the output is false in both cases

let obj3 = obj1;

console.log(obj1 == obj3); // true
console.log(obj1 === obj3); // true 
// both obj1 and obj3 point to the same memory location. hence the output is true in both cases

// arrays

let arr1 = [1,2,3];
let arr2 = [1,2,3];
console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false
// even though both arrays have same values, they are stored at different memory locations. hence the output is false in both cases

let arr3 = arr1;
console.log(arr1 == arr3); // true
console.log(arr1 === arr3); // true
// both arr1 and arr3 point to the same memory location. hence the output is true in both cases