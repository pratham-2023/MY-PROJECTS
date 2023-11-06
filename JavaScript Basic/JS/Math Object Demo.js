// Math Object Property [Store or provide value]
// constant property : PI => is a constant variable/property in Math Object,
// Which provide the pi constant value i.e. 3.141
// Access/use => Math.PI
// console.log("Math.PI = " + Math.PI);


// ----------------- Math Objects Method ---------------- //
// 1. sqrt(x) : Return the square root of any no. ie. 'x'.
// let a = Math.sqrt(568);
// console.log("The Square root of 16 : " + a);

// 2. cbrt(x) : Return cube root of x.
console.log("Cube Root of 27 : " + Math.cbrt(27))

/**
 * 3. pow(x,y) : Return x to the power y. i.e. x = 2 and y = 3  ==> 2^3 = 8
 * 4. abs(x) : Return absolute value of x i.e. |x| : x without sign
 * 5. floor(x) :  Round down
 * 6. ceil(x) : Round Up
 * 7. round(x) : Return round up or round down value accordingly
 */

    // console.log("Floor(2.4) + " + Math.floor(2.4))
    // console.log("Ceil(2.4) = " + Math.ceil(2.4))
    // console.log("round(2.4) [Round Down] = " + Math.round(2.4))
    // console.log("round(2.49999) [Round Up] = " + Math.round(2.5))

    // Math.random() : Return the random number between 0 - 1
    // 0, 0.1, 0.2, ..., .12, 0.13, ... , 0.346563, 0.2342, ..... ,  1
    // console.log(Math.random())

    //  To generate random number between 1 to 10
    console.log(Math.round(Math.random() * 10))
    //  To generate random number between 10 to 20
    console.log(10 + Math.round(Math.random() * 10))