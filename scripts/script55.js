// bigint refers to large numbers

let a = 10000000000000000000n;
let b = 20000000000000000000n;

let sum = a + b;
console.log(sum);  // 30000000000000000000n

console.log(10n > 5n);   // true
console.log(10n === 10n); // true
console.log(10n === 10);  // false bigint !== number

console.log(sum.toString())  //output : "30000000000000000000"