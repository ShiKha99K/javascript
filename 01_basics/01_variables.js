const accountId = 144553
let accountEmail = "shikha@google.com"
var accountPassword = "11111"
accountCity = "Jaipur"

//accountId = 2 // not allowed

accountEmail = "da@gf.com"
accountPassword = "21212121"
accountCity = "Benguluru"
let accountState;
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])