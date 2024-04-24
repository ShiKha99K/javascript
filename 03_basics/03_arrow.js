const user = {
    username: "shikha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this); // empty object

// function chai(){
//    // console.log(this)
//    let username = "shikha"
//    console.log(this.username);
// }
//chai()

// const chai = function(){
//     let username = "shikha"
//     console.log(this.username);
// }

const chai = () => {
    let username = "shikha"
    console.log(this)
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//const addTwo = (num1, num2) => num1 + num2
//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "shikha"})

console.log(addTwo(3, 4))