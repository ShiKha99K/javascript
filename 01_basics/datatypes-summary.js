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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (for Primitive), Heap (for Non-Primitive)

let myYoutubename = "shikhakumari"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
} 

let userTwo = userOne

userTwo.email = "Shikha@google.com"

console.log(userOne.email);
console.log(userTwo.email);

// in stack, we get the copy of the orginal and
// making changes in copy doesn't change the original one

//in heap, we get the reference to the data so 
// making changes in one will change the data for both since they are pointing to same data