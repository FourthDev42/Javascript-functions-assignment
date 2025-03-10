// Extracting Substring
let str = "JavaScript is fun!";
let subString = str.substring(4,10);
console.log(subString);

// Converting Cases
let string2 = "hello WORLD";
let convertedString2 = string2.slice (0,5). toUpperCase() + " " + String2.slice(6).toLowerCase();
console.log(convertedString2);

// Finding Characters
let string3 = "Programming";
let index = string3.indexOf("r");
console.log(index);

// String Length
let string4 = "Coding is cool";
console.log(string4.length);

// Checking for Inclusion
let string5 = "Web Development";
if (string5.substring(0,3) == "Web"){
    console.log("true")
} else {console.log (false)

}

 //Replacing Substrings
 let string6 = "I like apples and apples";
 let newString = string6.replaceAll("apples","oranges");
 console.log(newString);

 //Splitting Strings
 let fruits ="apple, banana, orange";
 let fruitsImage = fruits.split(", ");
 console.log(fruitsImage);

 // Trimming Whitespace
 let String10 = " Extra spaces ";
 let endTrim = 0;
 while (endTrim < text.length && String10[endTrim] === " "){
    endTrim++;
 }
 let beginTrim = String10.length - 1;
 while (beginTrim >= 0 && String10[beginTrim] === " ") {
    beginTrim--;
 }
 let trimmedString = String10.slice(endTrim, beginTrim + 1);
 console.log(trimmedString);
 
 // Concatenation
 let string7 = "Front";
 let string8 = "end";
 let Concatenation = string7 + string8;
 console.log(Concatenation);

 // Repeating Strings
 let string9 = "ha";
 let res = "";
 for(let i = 0; i < 3; i++){
    res +=string9
 }
 console.log(res);

 