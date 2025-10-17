console.log(0 === -0); //true (it should be false)
console.log(NaN === NaN); // false (it shoulld be true)

// if we use Object.is()
console.log(Object.is(0 , -0)); //false
console.log(Object.is(NaN, NaN)); //true