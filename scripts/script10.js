// let

let num1 = 5;
function ex1(){
    let num2 = 6;
    console.log(num1);    //no error will occur
    console.log(num2);     //no error will occur

    num2 = 10;  //it can be assigned a new value
    let num2 = 15;  //error will occur because redeclaration is not possible
}


// var

var number1 = 5;
function ex2(){
    var number2 = 6;   
    console.log(number1);    //no error will occur
    console.log(number2);     //no error will occur

    number2 = 10;  //it can be assigned a new value
    var number2 = 15;  //no error will occur because redeclaration is possible
}


// const

const val1 = 5;
function ex3(){
    const val2 = 6;   
    console.log(val1);    //no error will occur
    console.log(val2);     //no error will occur    

    val1 = 10;  //error will occur because reassignment is not possible
    const val2 = 15;  //error will occur because redeclaration is not possible
}