// Primitive --> call by value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

const bigNumber = 54535637457467454567n // BigInt


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];

let myObj = {
    name: "Shikha",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction); // return function but originally its datatype is called 'object function'