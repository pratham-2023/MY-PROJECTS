
function add(a, b){
    return a+b
}

function sub(a,b){
    return a-b
}

function mul(a,b){
    return a*b
}

function div(a,b){
    return a/b
}

function sqr(n){
    return n*n
}

function cube(n){
    return n*n*n
}

function checkSign(n){
    if(n > 0) return 1;
    else if(n < 0 ) return -1;
    else return 0;
}

function checkEvenOdd(n){
    if(n%2 === 0) return 1;
    else return 0;
}

function digitToWord(digit){
    switch(digit){
        case 0: return "ZERO";
        case 1: return "ONE";
        case 2: return "TWO";
        case 3: return "THREE";
        case 4: return 'FOUR';
        case 5: return 'FIVE';
        case 6: return 'SIX';
        case 7: return 'SEVENN';
        case 8: return 'EIGHT';
        case 9: return 'NINE';
        default: return "INVALID";
    }
}

module.exports = {digitToWord, sqr};