//  whenever we use ?? with ||, usage of parantheses is a must

let a = null;
let b = "hi";
let c = "Hello";

let result = a ?? b || c; // error without parantheses
result = a ?? (b || c); // correct usage with parantheses
console.log(result); // hi