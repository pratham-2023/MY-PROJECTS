let a = 100;
let b = 2054;
let c = 102;
let d = 405;

// if(a > b && a > c && a>d) console.log("a is largest.")
// else if(b>c && b>a && b>d) console.log("b is largest")
// else if(c>a && c>b && c>d) console.log("c is largest.");
// else console.log("d is largest")

let largest = a;

if(largest<b) largest = b;
if(largest<c) largest = c;
if(largest<d) largest = d;

console.log(largest + " is largest value.")