userInput = "";
defaultValue = "good";
let result = userInput || defaultValue;
console.log(result);  // good
// since userInput is empty which is considered false, the result will be defaultValue 

userInput = "hello";
result = userInput || defaultValue;
console.log(result);  // hello
// since userInput is non-empty which is considered true, the result will be userInput

