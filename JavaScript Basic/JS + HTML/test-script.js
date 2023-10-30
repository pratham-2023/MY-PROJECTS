// let sName = "Shyam";
// document.getElementById('myId').innerText = `Hello ${sName}`;

// Handling Events Using JS

// function hello(){
//     console.log("Hello")
// }

// function mouseOn(){
//     console.log("Mouse On the Button")
// }
// function mouseOut(){
//     console.log("Mouse Out of the Button")
// }

/*
CHANGE THE HTML CONTENT USING innerHTML & innerText property of JS Object [Element]
function changeData(){
    // 1. Get that HTML element by ID.
    let resElem = document.getElementById('myId');
    // Now, change the content dynamically.
    // 1. approach  : innerText property
    // resElem.innerText = "<mark>John</mark>";

    // 2. approach : innerHTML property
    resElem.innerHTML = "<mark>John</mark>"
}
*/

// Change the CSS Styling of HTML ELEMENT through JS.
function changeCSS(){
    // 1. Get the element first.
    let elem = document.getElementById('testID');
    // 2. Now, change the CSS.
    // All the CSS property are implemented by JS with small change.
    // Eg. color == color,  background-color == backgroundColor,
    // margin == margin, margin-left == marginLeft
    // To apply these properties, use 'style' property of HTML element object
    elem.style.color = "Blue";
    // elem.style.backgroundColor = 'black';
    // elem.style.backgroundColor = 'rgb(255,0,0)'
    elem.style.backgroundColor = '#00FF00';
    elem.style.height = '200px';
    elem.style.transition = '0.5s ease-in-out'
}