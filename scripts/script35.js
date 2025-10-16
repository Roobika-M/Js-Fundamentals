// the operatot || is used to return the first truthy value among other values
// the operator ?? is used to return the first defined value among other values

// for || the falsy values are: false, 0, "", null, undefined, NaN
// for ?? the defined values are: null, undefined

let name = ""; // falsy value
let defaultName = "Guest";  
let finalName = name || defaultName; // since name is falsy, finalName will be assigned 
console.log(finalName); // Guest    


let age = null; // falsy value    
let defaultAge = 18;
let finalAge = age ?? defaultAge; // since age is null, finalAge will be assigned the value of defaultAge
console.log(finalAge); // 18    
