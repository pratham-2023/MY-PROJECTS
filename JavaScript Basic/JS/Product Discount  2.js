let productPrice = 11000;

let discount = 0;
let totalPay = 0;

if(productPrice >= 10000) discount = productPrice * 0.3;
else if(productPrice >= 8000 && productPrice < 10000) discount = productPrice * 0.2;
else if(productPrice >= 5000 && productPrice < 8000) discount = productPrice * 0.15;
else if(productPrice >= 3000 && productPrice < 5000) discount = productPrice * 0.1;
else if(productPrice >= 2000 && productPrice < 3000) discount = productPrice * 0.05;
else discount = 0;

totalPay = productPrice - discount;
console.log("Total Amount to be paid : " + totalPay + " Rupees Only.");
