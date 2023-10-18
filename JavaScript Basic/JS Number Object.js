// let x = 10.45276; //it is a number variable

// convert variable into Number Object
// 1 => provide method : parseInt(string value) / parseFloat(string value)

// 2 => using Number() method/ Constructor
// Object Construct -> use 'new' keyword
// let aObj = new Number(x);

// let strA = aObj.toString();
// console.log(typeof(strA));

// toFixed() method 
// console.log(aObj.toFixed(8));

// Convert String value to Number Value
// let p = '23486'

// let pNum = Number.parseInt(p) ; String Type Wrap into Integer type.

// let pNum = new Number(p) ; // string type wrapper class i.e. Number Object into Int

// console.log(typeof(p))
// console.log(typeof(pNum))


let a = "23";
let b = " 576"

// perform addtion of these two.
// let sum = a + b;  // typeOf(a) : string -- typeOf(b) : string
// sum = string + string ; ==> string Concatenation (join)

// let sum = parseInt(a) + parseInt(b); // typeOf(a) : int == typeOf(b) : int
// sum = int + int; ==> integer addition

let sum = new Number(a) + new Number(b); // typeOf(a) : Object == typeOf(b) : Object
// sum = NumberObject + NumberObject ; 
// Auto-boxing : number object automatically converted into number type i.e. primitive
// sum = number + number ;
console.log(typeof(sum)); 