// if
const isUserloggedIn = true
const temperature = 41
// if( temperature === 40 ){
//     console.log("less than 50")
// }else{
//     console.log("Temperature is greater than 50");
// }
// console.log("Executed");

// comparison operators : <, >, <=, >=, ==, !=, ===(datatype checking), !==
// Assignment operator: =

const score = 200

if(score > 100){
   const power = "fly" 
   //console.log(`User power: ${power}`);
}

// var has global scope

//console.log(`User power: ${power}`);

const balance = 1000

if(balance > 500) console.log("test"); // Implicit scope

if(balance < 500){
    console.log("less than 500");
}else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
     console.log("User logged in");
}