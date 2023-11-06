// Arrow Function (=>): Use to shorter the function code.
// By default arrow function return value.
// If there is only ONE statement to be executed by the function,
// then do not use return statement and pair of curly bracket {}.
// Added in ES6[2015] version of JavaScript
/* function test(){
    let a = 10;
    let b = 20;
    let c = a + b;
    return c;
} */

/*test = () => {
    let a = 10;
    let b = 20;
    let c = a + b;
    return c;
}*/

// test = () => 10 + 20;

// console.log(test())

// Calling by passing the parameters
// test = (a,b) => a + b;
// console.log(test(40 , 58))

// ---------------------
// Program to test whether the number is even or odd.
// If function need only ONE parameter, then you can skip function parenthesis.
// evenOrOdd = num => {
//     if(num%2 === 0)
//         return "The number is Even Number.";
//     else
//         return "The number is Odd number."
// }
// console.log(evenOrOdd(5))
// console.log(evenOrOdd(13))
// console.log(evenOrOdd(4654))

//  --------------------------
// Program to calculate the area of circle.
areaOfCircle = rad => (Math.PI*rad*rad) ;
console.log("Area of Circle : " + areaOfCircle(12));

//***************** Home Work */
/**
 * 1. Create an arrow function to calculate area of rectangle.
 * 2. Create an arrow function to calculate sum & average of 5 numbers
 * 3. Create an arrow function to display digit into words.
 * 4. Create an arrow function to print the grade of students according to his percentage.
 * 
 */