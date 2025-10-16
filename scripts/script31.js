// example for nested conditions using ternary operator

let mark = 85;
let grade = mark>=40 ? mark>=75 ? mark>=95 ? "o" : "a" : "b" :"Fail";
console.log(grade); // output = a

// the above code with proper if else statements
if(mark>=40){
    if(mark>=75){
        if(mark>=95){
            grade = "o";
        }
        else{
            grade = "a";
        }   
    }
    else{
        grade = "b";
    }
}
else{
    grade = "Fail"; 
}
console.log(grade); // output = a