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
// let arr = [[10,20,30], [40,50]]
// console.log(arr);
// let newArray = arr.flat(); // convert 2D Array.
// console.log(newArray)


// ************ 27-10-2023 ************

/**
 * splice() : It use to add NEW ELEMENTS within the array
 * at any position. It also add multiple elements.
 * Also, it REMOVE the elements
 * Syntax : splice(startIndex, NoOfElements, ArrayList)
 * RETURN DELETED ARRAY ALWAYS.
 */
// let arr = [10,20,30,40]
// console.log(arr)
// let x = arr.splice(1,0,60,70,80,90,100) //return deleted array of element
// console.log(arr)
// console.log(x);

// let arr = [10,20,30,40]
// console.log(arr)
// let x = arr.splice(1,2,60,70) //return deleted array of element
// console.log(arr)
// console.log(x);

// ********** DELETE THE MIDDLE ELEMENTS AND MAINTAIN THE HOLES.
// let arr = [10,20,30,40,4,7,2,43,34,67,34,7,3,7,4,76,34,67,78,45,78]
// console.log(arr)
// let x = arr.splice(0,2) //return deleted array of element
// let x = arr.splice(0,arr.length) //Delete ALL elements
// let x = arr.splice(0) //Delete ALL elements
// let x = arr.splice(3) //Delete ALL elements
// console.log(arr)
// console.log(x);

/** 
 * slice() : Remove / slices the array
 * Syntax : slice(start, endIndex)
 * endIndex Element is excluded from the slice.
 */

// let arr = [10,20,30,40];
// let x = arr.slice(1,3); //Return sub-array [NEW ARRAY]
// // NOTE : IT ALWAYS CREATE A NEW ARRAY AND DON'T CHANGE THE ORIGINAL ARRAY.
// console.log(arr);
// console.log(x);\

//************ SORTING and Reversing METHODS ************ */
// Sorting : Means, arranging the data elements in particular order
// either in ascending or descending order
// sort(): method used to sort the array in ASCENDING ORDER [default nature].
// NOTE : it ONLY SORT STRING TYPE VALUES.
// If we apply this method over the number type array.
// we well get unexpected result.

// let students = ['A', 'Z', 'G', 'P', 'K'];
// console.log(students)
// students.sort();
// console.log(students)

// let percentages = [45.89,78.45,93.57, 64.98,61.32,37.57,89.56]
// console.log(percentages)
// percentages.sort();
// console.log(percentages)
// // To Print TOPPER
// console.log(percentages[percentages.length-1])
// // To Last scorer student
// console.log(percentages[0])

//******* DESCENDING ORDER */
// use COMPARE FUNCTION
// syntax:  sort(CALLBACK)
// let percentages = [45.89,78.45,93.57, 64.98,61.32,37.57,89.56]
// percentages.sort((a,b)=> b-a);
// console.log(percentages)


/**
 * reverse() : reverse the elements of the array.
*/
// let arr = [10,20,30,40,50]
// arr.reverse();
// console.log(arr)

// arr.reverse();
// console.log(arr)

// let percentages = [45.89,78.45,93.57, 64.98,61.32,37.57,89.56]
// percentages.sort();
// percentages.reverse();
// console.log(percentages)


/**
 * TO FIND MIXIMUM AND MINIMUM VALUE FROM THE ARRAY
 */
// let percentages = [45.89,78.45,93.57, 64.98,61.32,37.57,89.56]
// console.log(Math.max(percentages))
// console.log(Math.min(percentages))


// ********** ARRAY ITERATION *************
let arr = [10,20,30,40,50,60,70];
// 1. using for loop
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// 2. Using while loop
// let i = 0;
// while(i < arr.length){
//     console.log(arr[i])
//     i++;
// }

// 3. Using do ... while loop:
// let i = 0;
// do{
//     console.log(arr[i])
//     i++;
// }while(i < arr.length);

// 4. Using for in Loop : RETURN INDEX NUMBER
// for (x in arr){
//     console.log(x) // print index number
//     console.log(arr[x])
// }
// 5. Using for of Loop : Return value at every position
// for (x of arr){
//     console.log(x); //access value directly.
// }

// 6. Using map() method : RETURN
// syntax : map((data, index) => {handle} )
// arr.map((i,j)=> {
//     console.log(i,j)
//     //return (expression)
// });

