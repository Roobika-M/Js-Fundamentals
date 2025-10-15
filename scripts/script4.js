const paragraph = document.getElementById("para");
const button = document.getElementById("btn");

button.addEventListener("click", function(){
    paragraph.textContent = "It changed";
})