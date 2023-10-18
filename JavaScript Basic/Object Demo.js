let student = {
    "roll" : 101, 
    "name" : 'Ajay', 
    "age" : 20, 
    "City" : "Gondia",
    "marks" : [67,39,59,60]
}
// console.log(student.name);
// console.log(student)
// student.name = "RTSoft"; Update the name value
console.log(student.marks)

let total = 0;
for(let i=0; i < student.marks.length; i++){
    total = total + student.marks[i];
}

console.log("Total : " + total)