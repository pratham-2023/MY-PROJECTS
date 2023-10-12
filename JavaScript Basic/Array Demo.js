// Array Declaration and Initialization
let marks = [59,36,58,39,60, 76,73,68]

// Accessing Array Element.
// console.log(marks[0]);  // 59

// Printing using For Loop
for(let i = 0; i < marks.length; i++)
{
    console.log(marks[i]);
}

// Calculation
// let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let total = 0;
for(let i=0; i < marks.length; i++){
    total = total + marks[i];
}
console.log("Total Obtained marks : " + total)

// Array of String
// let students = ["RTSoft" , "Sarang" , "Aarti" , "Shital"];
// console.log(students[20])


// Print Square of Each element of the array.
for(let i = 0; i < marks.length; i++){
    let sqr = marks[i] * marks[i];
    console.log("The Square of " + marks[i] + " is : " + sqr)
}