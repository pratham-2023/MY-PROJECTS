// In JS, we can use function as a variable.
// Just like normal variables.
// To make a function as a variable, we need to do following
// 1. Create a variable [let, const, var]
//  2. Assign the function code to the variable [=]
// The function can be of any type.
// syntax:
/**
 * funVarName = function (D|P) {
 *  //function body
 * }
 */

test = function (a,b) {
    return (a+b);
}
// console.log(test(10,30)); // This line will call function.
// Now, let's use a function variable name as a parameter 
//as we pass the values, now we will pass the values as a function

// ***** Calculate the square of sum of two variables.
// function sqr(num){
//     return (num(5,3)*num(5,3));
// }

function sqr(a,b){
    return (test(a,b)*test(a,b));
}

console.log(sqr(5,3))