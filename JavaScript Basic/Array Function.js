//  Array : is a collection of data elements.
// Represented by pair of square bracket []
// Each element of the array is associated with Index Number.
// First element : 0
// Second Element : 1
// .... Last Element : SIZE-1
// [12,34,63,75,74,37,86]
// Array Property : length : return total no. of element present in an array.

/**
 * ARRAY METHOD
 * 1. push(data) : Insert a NEW ELEMENT at the END of the array.
 * Logic : arr[arr.length] = data;
 */
// let arr = [10,20,30];
// console.log("Before Push Operation : " + arr);
// console.log("Length Before : " + arr.length)
// arr.push(40);  // Insert ONE Value
// arr.push([40,50,60,70,80]) // sub-array
// arr = [10,20,30, [40,50,60,70]]
// console.log("After Push Operation : " + arr);
// console.log("Length After : " + arr.length)

/**
 * pop() Method : Return & REMOVE the last element from the given array.
 * data = arr[arr.length-1]
 * delete (arr[arr.length-1])
 * return (data);
 */
// let arr = [10,20,30,40,50];
// console.log("Before POP : " + arr)
// console.log("Length : " + arr.length)
// let x = arr.pop();
// console.log("After POP : " + arr)
// console.log("Length : " + arr.length)

/**
 * shift() : Return and REMOVE FIRST ELEMENT from the array.
 * and shift all the elements towards the left side i.e. lower index number.
 * shift() [FRONT] == pop() [End]
 */
// let arr = [10,20,30,40,50];
// console.log("Before Shift : " + arr)
// console.log("Length : " + arr.length)
// let x = arr.shift();
// console.log("After Shift : " + arr)
// console.log("Length : " + arr.length)


/**
 * unshift(data) : Insert NEW DATA ELEMENT at the beggining of the array.
 * shift all the elements towards right side. i.e. upper indexes
 * unshift(data) == push(data)
*/
// let arr = [10,20,30,40,50];
// console.log("Before unshift : " + arr)
// console.log("Length : " + arr.length)
// arr.unshift(60);
// console.log("After unshift : " + arr)
// console.log("Length : " + arr.length)


/**
 * delete() : DELETE the memory block of the given index number in an array.
 */
// let arr = [10,20,30,40,50];
// console.log("Before Delete : " + arr)
// console.log("Length : " + arr.length)
// delete arr[3]; // value 40
// console.log("After Delete : " + arr)
// console.log("Length : " + arr.length)

/**
 * concat(array) : This method combine two array into a single large array.
 * syntax : firstArray.concat(secondArray)
 */
// let arr1 = [10,20,30];
// let arr2 = [40,50];
// let arr3 = arr1.concat(arr2);
// arr3 = [arr1, arr2]
// arr3 = [10,20,30,40,50] 
// length = arr1.length + arr2.length;
// console.log(arr3)

/**
 * flat() : remove all the sub-arrays from the array and RETURN NEW array.
 * without sub-array.
 */

// arr = [
//     [10,20],
//     [
//         [30,40,50],
//         [60,70]
//     ],
//     [80,90,100,
//     [
//         [110,120],
//         [130,140]
//     ]]
// ]
let arr = [[10,20,30], [40,50]]
console.log(arr);
let newArray = arr.flat(); // convert 2D Array.
console.log(newArray)