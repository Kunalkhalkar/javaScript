/*
strings in js
*/
let a = 'this is an example of string.'
console.log(a+"\nthis is a string added at time of printing.");

let boy1 = "swapnil"
let boy2 = "sopan"

//template literals
console.log(`${boy1}  is a friend of   ${boy2}`); // Syntax       ` ${boy1}` this are backtic and under that ${ string reference} used 


let sentence = `${boy1} ${boy2} are my friends`
console.log(sentence)

//length is the property of th e string
console.log(boy1.length);

//to uppercase (this is a method)
console.log(boy2.toUpperCase());

//toLowerCased()
console.log(boy2.toLowerCase());

//str,slice() method
console.log(boy1.slice(1,4)) // goes upto the second last to the given end

console.log(boy1.slice(1)) // starts from given index and goes upto the end
// trim() method 
let name = "             aniket             "
console.log(name.trim());
console.log(name)

//charAt() method
console.log(name.charAt(13));
console.log(name.slice(13))

//replace() method
let str = "i am a bad boy"
let str2 = str.replace("bad", "intelligent");
console.log(str);
console.log(str2);

//replace() with const variables
const line = "hello i am a engineer learning new technical things daily. engineer are intelligent.";
console.log(line.replace("engineer", "software engineer"))

// o/p : hello i am a software engineer learning new technical things daily. engineer are intelligent
//in above example only first occurance of the "engineer" will changed 
//to change it in all places use replaceAll() method 

console.log(line.replaceAll("engineer", "software engineer"));

// now the o/p : hello i am a software engineer learning new technical things daily. software engineer are intelligent.