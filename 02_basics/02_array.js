const marvelheroes = ["thor","Ironman","spiderman"]
const dc =["superman","flash","batman"]

//marvelheroes.push(dc);
//console.log(marvelheroes);
const ConcatArray = marvelheroes.concat(dc)
//console.log(ConcatArray);

const ALlnewHeroses =[...marvelheroes,...dc]
//console.log(ALlnewHeroses)

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array)
console.log(Array.isArray("Manasi"))

console.log(Array.from({name:"Manasi"}))//interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))