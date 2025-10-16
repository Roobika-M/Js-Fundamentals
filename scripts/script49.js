// anonymous function

const write = function(name){
    console.log("Hello " + name);
}
write("John"); // Hello John

// named function expression
const greet = function greetUser(name){
    console.log("Hi " + name);
}
greet("Alice"); // Hi Alice
greetUser("Bob"); // Error: greetUser is not defined