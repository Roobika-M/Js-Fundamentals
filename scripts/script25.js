function generate(){
    let n1 = Number(document.getElementById("min").value);
    let n2 = Number(document.getElementById("max").value);
    let random = Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
    document.getElementById("result").innerText = "The random number between " + n1 + " and " + n2 + " is " + random;
}