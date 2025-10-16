var name = "finn";
var name = "jake";  // re-declaration is allowed in var

function num(){
    console.log(numberr);
    var numberr = 10;  // undefined is printed 
}
num(); // undefined is printed 

// let
function num1(){
    console.log(numberr1);
    let numberr1 = 10;  //VM1593:2 Uncaught ReferenceError: Cannot access 'numberr1' before initialization
}

