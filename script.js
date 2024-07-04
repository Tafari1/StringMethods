// Chat at method returns the character at a specific position

let myName = "Tafari";
// This returns the character T from my name
console.log(myName.charAt(0));

/* returns the unicode of the letter or character of
 my name  in this case it returns the unicode of T in my name
 which is 84*/
console.log(myName.charCodeAt(0));

/*es2022 introduced the string method at() similar to charAt() 
but this allows negative numbers supported in all browsers*/
console.log(myName.at(-1));

//Property access returns T as the character at index 0 returns T
console.log(myName[0]);

/* Extracting String Parts Slice(start, end) 
substring(start,end) and substr(start, length)*/

let text = "Apple, Banana, Oranges";
// Slice extracts parts of a string specified by you
//here i want it to start at index 0 and end at 8
// this returns 'Apple, B'
console.log(text.slice(0, 8));

//SubString Similar to slice
console.log(text.substring(7, 13)); // start, stop output: "Banana"

//Substr second part specifies the length of the extracted part
console.log(text.substr(7, 6));
console.log(text.substr(15, 7)); //Expected output "Oranges"

// to uppercase and lowercase methods and concat
let variable = "first";

console.log(variable.toUpperCase());
console.log(variable.toLowerCase());

let string1 = "hello";
let string2 = "world";
console.log(string1.concat(" ", string2).toUpperCase());

// repeat method
// repeats the string with the parameter you set
console.log(string1.repeat(3));

//Example of replace/////////////////////////////////////
let text1 = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
/////////////////////////////////////////////////////////

console.log(text1.split(", "));

// IndexOf method shows where the word microsoft occurs
// it shows -1 if text is not found
console.log(text1.indexOf("Microsoft"));

//The search() method searches a string for a string (or a regular expression)
//and returns the position of the match:
console.log(text1.search("Please"));

// Match method returns an array containing the results of mathcing a string against a string
console.log(text1.match("lease"));

let text2 =
  "I love dogs, Dogs are a guy's best friend, Dogs are loyal. i love dogs";
const iterator = text2.matchAll("Dogs");

for (const match of iterator) {
  console.log(match);
}

// Includes() returns true of false if the word is within the text variable
console.log(text2.includes("dogs"));

//checks and see if it starts with the letter and returns either true or false
console.log(text2.startsWith("I"));

//checks if the postion is correct on where it starts and searches
console.log(text2.startsWith("love", 2));

//does the same as start but just checks with the end of the text
console.log(text2.endsWith("dogs"));
