// function before declaration
add(5,10);
function add(a,b){
    let sum = a + b;
    console.log(sum);
}
// here the function is called before its being declared and it works because javascript remebers all the function declarations 

// function after declaration
function sub(a,b){
    let diff = a - b;
    console.log(diff);
}
sub(10,5);
// this is a normal function call after its being declared


// the below code won't work because the function is stored in a variable. in js the hoisting occurs only for variable declarations not for variable assignments
sayHello();  
const sayHello = function() {
    console.log("Hi!");
}
