//let marks = new Array(10, 20, 30)
//console.log(typeof(marks))

let marks = [
    [10,20,30] , 
    [45,20] , 
    [87,49,58,68] , 
    [30,40,88,38,64]
];

//console.log(marks[2][1])

//Iterate the array using loop.
// for(let i=0; i < marks.length; i++){
//     // console.log(marks[i]); => Access sub-array
//     for(let j=0; j<3; j++){
//         console.log( "marks["+i+"]["+j+"] : " + marks[i][j]) ; // marks[1][2]
//     }
// }

// for(let i=0; i < marks.length; i++){
//     for(let j=0; j<marks[i].length; j++){
//         console.log( "marks["+i+"]["+j+"] : " + marks[i][j]) ; // marks[1][2]
//     }
// }

// *************************************************
//  Find the maximum value from the 2D array.
let max = marks[0][0];
for(let i=0; i<marks.length; i++){
    for(let j=0; j<marks[i].length;j++){
            // Comapare each value with max.
            if(max < marks[i][j]){
                max = marks[i][j];
            }
    }
}

console.log("Maximum Value is : " + max);

// *************  ASSINGMENT ****************
// 1. Find maximum value from the 1D array.
// 2. Find smallest value from the 1D array.
// 3. Find smallest value from the 2D array.
// 4. Calculate sum of all elements of 1D Array.
// 5. Calculate sum of all elements of 2D Array.
// 6. Print the square and cube of all elements of 1D Array.
// 7. Print the square and cube of all elements of 2D Array.
// 8. Print the sum of all the ODD elements of 1D array.
// 9. Print the sum of all the ODD elements of 2D array.
// 10. Print the sum of all the elements which are divisible by x of 1D array.
// 11. Print the sum of all the elements which are divisible by x of 2D array.
// NOTE: assume any values and any value for variable 'x'.