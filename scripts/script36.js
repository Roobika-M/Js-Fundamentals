//  when we use ||, the falsy values are ignored eventhough they are valid
// when we use ??, the defined values are considered and thus it will be assigned

let message = "" //no message-empty 
let finn = message || "default message"; 
console.log(finn); // default message

let finn2 = message ?? "default message";
console.log(finn2); // "" 