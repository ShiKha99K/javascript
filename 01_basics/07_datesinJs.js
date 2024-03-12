// Dates

let myDate = new Date()
console.log(myDate);

// console.log(myDate.toString()); // Tue Mar 12 2024 13:01:29 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Tue Mar 12 2024
// console.log(myDate.toISOString()); // 2024-03-12T13:06:17.694Z
// console.log(myDate.toJSON()); // 2024-03-12T13:06:17.694Z
// console.log(myDate.toLocaleDateString()); // 3/12/2024
// console.log(myDate.toLocaleString()); // 3/12/2024, 1:06:17 PM

// console.log(typeof myDate); // Object

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString());
// In javascript, month start from 0 , eg, jan => 0 and feb => 1

//let myCreatedDate = new Date(2023, 0, 23, 5, 3)
//let myCreatedDate = new Date("2023-01-14");
let myCreatedDate = new Date("03-12-2024");
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long",
})