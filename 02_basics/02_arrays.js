const marvel_heroes = ["thor","Ironman","Spiderman"]
const dc_heroes = ["superman", "Flash", "Batman"]

//marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes) // concating two arrays return a new array
// console.log(allHeroes);

const all_new_heores = [...marvel_heroes, ...dc_heroes] // spread operation
//console.log(all_new_heores);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Shikha"));
console.log(Array.from("Shikha"));
console.log(Array.from({name:"Shikha"})); // if function cannot convert the given input into array it returns empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));