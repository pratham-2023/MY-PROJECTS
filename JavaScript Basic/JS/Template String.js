/**
 * Template String : 
 * also known as, String Literal, Template Literal, String Template
 * SYMBOL : pair of back-tick ` ` [ESC KEY DOWN OR key with ~ tilde]
 * USE : We can directly insert or embed the value of 
 * variable withing the string literal.
 * TO INSERT THE VARIABLE OR VALUE :
 * USE : ${variableName or Value}
 */

let age = 20;
let sname = "RTSoft";
// Modern Approach
console.log(`Your Name is "${sname}" and age is ${age}.`)

// Traditional Approach
// console.log("Your Name is " + sname + " And age is " + age)
// Using Chaining Operation/call
// console.log("Your Name is ".concat(sname).concat(" And age is ").concat(age))
// console.log("Your Name is ",(sname)," And age is ",(age))