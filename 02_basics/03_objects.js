// Singleton 
// Object.create // object is created through singleton method

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Shikha",
    "full name": "Shikha Kumari",
    [mySym]: "mykey1",
    age: 20,
    location: "Bhubaneshwar",
    email: "shikha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "shikha@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "shikha@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
   console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
 }

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());