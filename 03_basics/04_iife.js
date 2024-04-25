// Immediately invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB CONNECTED`)
})();
// To reduce the pollution caused by global scope and execute the function immediately iife is used

( function aurcode(){
    console.log(`DB CONNECTED TWO`)
} )();

( (name) =>{
    console.log(`DB CONNECTED Three ${name}`)
} )('shikha');