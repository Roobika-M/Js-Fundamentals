add(5,10); // no error  output: 15
function add(x,y){
    console.log(x + y);
}
add(10,5); // no error  output: 15

// i can call this function before the declaration because of function hoisting
sum(5,10); // error
let sum = function(x,y){
    console.log(x + y);
}
sum(10,5); // no error  output: 15
// here i can call the function expression only after its being declared because only variable is being hoisted not the assigned value