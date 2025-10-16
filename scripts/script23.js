function square(){
    let n = Number(document.getElementById("num").value);
    let square = n * n;
    document.getElementById("result").innerText = "The square of " + n + " is " + square;
}

function avg(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let average = (n1+n2)/2;
    document.getElementById("result1").innerText = "The average of " + n1 + " and " + n2 + " is " + average;
}

function rem(){
    let n3  = Number(document.getElementById("num3").value);
    let n4 = Number(document.getElementById("num4").value);
    let remainder = n3 % n4;
    document.getElementById("result2").innerText = "The remainder when " + n3 + " is divided by " + n4 + " is " + remainder;
}