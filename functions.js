// Rectangle Area Calculator
function calculateArea(length, width){
    return length * width;
}
console.log(calculateArea(5,10));

//String Reverser
function reverseString(str){
 return str.split('').reverse().join('') 
}
console.log(reverseString('hello'));

//Even Number Checker
function isEven(num){
    if (num % 2 === 0){
        return true;g
    } else { 
        return false;
    }
}
console.log(isEven(4));
console.log(isEven(7));


//Score Categorizer
function scoreCategory(score) {
    if (score >= 90) {
        return "Excellent";
    }
        else if (score >= 80) {
            return "Very Good";
    }   else if (score >= 70) {
        return "Pass";
    }   else {
        return"Fail";
    }
}
console.log(scoreCategory(85)); // testing for  Very Good
console.log(scoreCategory(90)); // testing for  Excellent

