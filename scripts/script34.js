let user = prompt("Enter your name:");

function greet(name){
    return "Hello, " + name + "!";
}

user&&greet(user); // if name is not empty, greet function will be called 
// if name is empty, greet function will not be called and nothing will be returned