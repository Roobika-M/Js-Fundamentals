function checkNumber() {
    let num = document.getElementById("num").value;
    if(num>0){
        document.getElementById("result").innerText = "positive";
    }
    else if(num<0){
        document.getElementById("result").innerText = "negative";
    }
    else{
        document.getElementById("result").innerText = "zero";
    }
}