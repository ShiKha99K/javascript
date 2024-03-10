const name = "Shikha"
const repoCount = 50

//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// String interpolation :is the process of evaluating a string literal containing one or more placeholders, 
//                        yielding a result in which the placeholders are replaced with their corresponding values.


const gameName = new String('Shikha-K')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

//const newString = gameName.substring(0, 4);
const newString = gameName.substring(1, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "   shikha    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shikha.com/shikha%20kumari"

console.log(url.replace('%20','-'));

console.log(url.includes('shikha'));

console.log(gameName.split('-'));
