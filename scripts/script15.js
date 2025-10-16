// when an array or object is created using const, it means that we cannot reassign the variable to new array or object.
// but we can still add, modify and remove the values from array or object

const obj = {
    name: "happy",
    age: 10
}
obj.name = "peter"; //doesn't throw error
obj = {name:"hello"}; // throws an error : Uncaught TypeError: Assignment to constant variable.

const arr = [1,23,4,5];
arr.push(6); //doesn't throw error
arr = [1,2]; // throws an error : Uncaught TypeError: Assignment to constant variable.