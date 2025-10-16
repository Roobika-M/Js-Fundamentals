// usually the prompt input is string
// to convert to number we use parseInt() or Number()

let num = prompt("enter a number");
alert("befor using Number()" + typeof num);
num = Number(num);
alert("after using Number()" + typeof num);