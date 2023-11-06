// **** REST OPERATOR ****
// use within the function as a parameter.
// It should be the last parameter.
// SYMBOL :  triple continous dots. [...]
// Syntax: funName(...varName)
// varName is consider as an ARRAY type of value.

function add(...numbers){
    // console.log(numbers);
    let sum = 0;
    for(num of numbers){
        sum += num;
    }
    return sum;
}
// add(10,20)
// add(10,20,30)
// add(10,20,30,40)
console.log(add(10,20))
console.log(add(10,20,30))
console.log(add(10,20,30,40))