function checkNumber(){
    let num = Number(document.getElementById("num").value);
    let finn = num>0 ? "positive" : num<0 ? "negative" : "zero";
    document.getElementById("result").innerText = finn;
}