//  How to create String in JavaScript
// let str = "Hello RTSoft";
// let str = 'Hello RTSoft';
// let str = new String("Hello RTSoft");

/** String is an array of characters */
// let str = ['H', 'e', 'l', 'l', 'o', ' ', 'R', 'T', 'S', 'o', 'f', 't'];
// ==> It means each character of the string is associated with unique number i.e. Index Number.
// Eg. 'H' = 0, 'e'=1, 'l'=2, ......, 't'= 11 i.e. Length-1

let str = "Hello RTSoft";
// console.log(str.length)  : length is the property of the string object.

// To get the index number of each character in the given string.
// indexOf(char ch) : Return the index number of the given character, otherwise return -1 if not  present
// console.log(str.indexOf('d'))
//  It also return the index no. of string.
// console.log(str.indexOf("Soft")) // It search only for first character

// ----------------------------------
// lastIndexOf(string) : Search from the end to the start.
console.log(str.lastIndexOf('o'))  // Backword lookup
console.log(str.indexOf('o'))   // Forward lookup
