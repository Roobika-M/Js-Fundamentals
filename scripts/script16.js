let year = prompt("Enter your year of birth");
let age = 2024 - year;
let boo = confirm("Are you sure?");
if(boo != true){
    alert("Cancelled");
}
else{
    alert("Your age is " + age);
}
