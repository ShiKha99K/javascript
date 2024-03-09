let score = "33abc"
//let score = null // after changing in number it gives value 0
//let score = undefined// after changing in number it gives value NaN
//let score = true // after changing in number it gives value 1

// console.log(typeof(score));
// console.log(typeof score);

let valueInNUmber = Number(score);
// console.log(typeof valueInNUmber);
// console.log(valueInNUmber)

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)

//1 => true; 0 => false
//"" => false
//"shikha" => true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ******************** Operations *****************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Shikha"
 
let str3 = str1 + str2
console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(+true); //1
// console.log(+""); //0

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);